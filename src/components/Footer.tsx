import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
             <span className="text-3xl font-bold tracking-tighter text-white">VOGUE<span className="text-fuchsia-500">.</span></span>
             <p className="text-slate-400 leading-relaxed">
               Redefiniendo la belleza con estilo y precisión. Tu transformación comienza aquí.
             </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Servicios</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Equipo</a></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-fuchsia-500"/> Av. Principal 123, Madrid</li>
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-fuchsia-500"/> +34 912 345 678</li>
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-fuchsia-500"/> hola@vogue.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Síguenos</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-white/5 rounded-full hover:bg-fuchsia-600 transition-all duration-300 group">
                  <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-slate-500 text-sm">
          © 2024 VOGUE SALON. Designed by AI.
        </div>
      </div>
    </footer>
  );
};