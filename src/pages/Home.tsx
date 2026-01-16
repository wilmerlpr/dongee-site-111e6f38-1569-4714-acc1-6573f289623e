import { motion } from 'framer-motion';
import { Star, ArrowRight, Scissors, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop" 
            alt="Salon Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-fuchsia-600/30 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-fuchsia-400 text-sm font-medium mb-6 backdrop-blur-md">
              ✨ La experiencia definitiva en belleza
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 leading-tight">
              ESTILO <br /> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600">ALMA</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              No es solo un corte de pelo, es una declaración. Descubre tu mejor versión con nuestros estilistas de clase mundial en un ambiente exclusivo.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-primary">
                Ver Servicios
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-bold text-white hover:bg-white/10 transition-all duration-300">
                Reservar Cita
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 bg-slate-950 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-panel p-8 rounded-3xl col-span-1 md:col-span-2 flex flex-col justify-center min-h-[300px] group relative overflow-hidden"
            >
               <div className="absolute right-0 top-0 w-64 h-64 bg-fuchsia-600/20 blur-[80px] group-hover:bg-fuchsia-600/30 transition-all duration-500"></div>
               <Scissors className="w-12 h-12 text-fuchsia-500 mb-6" />
               <h3 className="text-3xl font-bold mb-4">Cortes de Vanguardia</h3>
               <p className="text-slate-400 text-lg">Nuestros estilistas dominan las últimas tendencias internacionales. Desde bobs afilados hasta capas texturizadas.</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center text-center group"
            >
               <Sparkles className="w-12 h-12 text-purple-400 mb-6 group-hover:scale-125 transition-transform duration-300" />
               <h3 className="text-2xl font-bold mb-2">Colorimetría</h3>
               <p className="text-slate-400">Expertos en Balayage y Babylights.</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-panel p-8 rounded-3xl"
            >
               <Clock className="w-10 h-10 text-fuchsia-400 mb-4" />
               <h3 className="text-xl font-bold mb-2">Horarios Extendidos</h3>
               <p className="text-slate-400">Abiertos hasta las 21:00 para tu comodidad.</p>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-panel p-8 rounded-3xl col-span-1 md:col-span-2 flex items-center justify-between group cursor-pointer"
            >
               <div>
                 <h3 className="text-2xl font-bold mb-2 group-hover:text-fuchsia-400 transition-colors">Ver Galería de Trabajos</h3>
                 <p className="text-slate-400">Inspírate con nuestros cambios de look más recientes.</p>
               </div>
               <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-fuchsia-500 transition-all">
                 <ArrowRight className="text-white" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof / Reviews */}
      <section className="py-24 relative overflow-hidden">
         <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Lo que dicen nuestros <span className="text-fuchsia-500">Clientes</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="glass-panel p-8 rounded-2xl"
                >
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                  </div>
                  <p className="text-slate-300 mb-6 italic">"Simplemente espectacular. El ambiente, el trato y sobre todo el resultado. Nunca he tenido el pelo tan sano."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
                    <div>
                      <p className="font-bold text-white">María González</p>
                      <p className="text-xs text-slate-500">Cliente Verificado</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
         </div>
      </section>
    </div>
  );
};