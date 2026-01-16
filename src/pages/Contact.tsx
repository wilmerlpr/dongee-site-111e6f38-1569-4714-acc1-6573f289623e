import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 2000);
  };

  return (
    <div className="pt-32 pb-20 bg-slate-950 min-h-screen relative">
       <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none"></div>
       
       <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           {/* Info */}
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
           >
             <h1 className="text-5xl font-bold mb-6">Hablemos de tu <br/><span className="text-gradient">Próximo Look</span></h1>
             <p className="text-slate-400 text-lg mb-12">
               ¿Tienes dudas sobre qué tratamiento es mejor para ti? ¿Quieres reservar una sesión especial? Estamos aquí para ayudarte.
             </p>

             <div className="space-y-8">
               <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-fuchsia-500">
                 <h3 className="text-xl font-bold mb-1">Ubicación</h3>
                 <p className="text-slate-400">Calle Velázquez 45, Barrio Salamanca, Madrid</p>
               </div>
               <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-purple-500">
                 <h3 className="text-xl font-bold mb-1">Horario</h3>
                 <p className="text-slate-400">Lunes - Sábado: 10:00 - 21:00</p>
               </div>
             </div>
           </motion.div>

           {/* Form */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             className="glass-panel p-10 rounded-3xl"
           >
             {formState === 'success' ? (
               <div className="h-full flex flex-col items-center justify-center text-center">
                 <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                   <Send className="w-10 h-10 text-green-500" />
                 </div>
                 <h3 className="text-2xl font-bold">¡Mensaje Enviado!</h3>
                 <p className="text-slate-400 mt-2">Nos pondremos en contacto contigo pronto.</p>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                 <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
                 <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm text-slate-400">Nombre</label>
                     <input type="text" required className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-fuchsia-500 focus:outline-none transition-colors" placeholder="Tu nombre" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm text-slate-400">Apellido</label>
                     <input type="text" required className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-fuchsia-500 focus:outline-none transition-colors" placeholder="Tu apellido" />
                   </div>
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm text-slate-400">Email</label>
                   <input type="email" required className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-fuchsia-500 focus:outline-none transition-colors" placeholder="tu@email.com" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm text-slate-400">Mensaje</label>
                   <textarea required rows={4} className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-fuchsia-500 focus:outline-none transition-colors" placeholder="¿En qué podemos ayudarte?"></textarea>
                 </div>
                 <button type="submit" disabled={formState === 'submitting'} className="w-full btn-primary flex items-center justify-center gap-2">
                   {formState === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
                   {!formState && <Send className="w-4 h-4" />}
                 </button>
               </form>
             )}
           </motion.div>
         </div>
       </div>
    </div>
  );
};