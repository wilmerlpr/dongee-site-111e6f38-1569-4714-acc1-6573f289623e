import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Loader2, ArrowUpRight, Clock, Tag } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
  category: string;
  image_url: string;
}

export const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase
        .from('app_111e6_services')
        .select('*');
      
      if (!error && data && data.length > 0) {
        setServices(data);
      } else {
        // Fallback data with images
        setServices([
          {
            id: '1', 
            name: 'Corte Estilo Vogue',
            price: '45€',
            duration: '60 min',
            category: 'Cortes',
            image_url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2000&auto=format&fit=crop'
          },
          {
            id: '2', 
            name: 'Balayage Premium',
            price: '120€',
            duration: '180 min',
            category: 'Color',
            image_url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2000&auto=format&fit=crop'
          },
          {
            id: '3', 
            name: 'Tratamiento Keratina',
            price: '90€',
            duration: '90 min',
            category: 'Tratamientos',
            image_url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2000&auto=format&fit=crop'
          },
          {
            id: '4', 
            name: 'Peinado Evento',
            price: '60€',
            duration: '45 min',
            category: 'Styling',
            image_url: 'https://images.unsplash.com/photo-1522337360705-8b13d52c03cc?q=80&w=2000&auto=format&fit=crop'
          },
          {
             id: '5',
             name: 'Extensiones Naturales',
             price: '300€',
             duration: '240 min',
             category: 'Extensiones',
             image_url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2000&auto=format&fit=crop'
          },
          {
             id: '6',
             name: 'Manicura Gel',
             price: '35€',
             duration: '50 min',
             category: 'Uñas',
             image_url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2000&auto=format&fit=crop'
          }
        ]);
      }
      setLoading(false);
    };

    fetchServices();
  }, []);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-950 relative">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-fuchsia-900/20 to-transparent"></div>
      
      {/* Background Blobs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-fuchsia-500 font-bold tracking-widest text-sm uppercase">Menú Exclusivo</span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 mt-2">Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500">Servicios</span></h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">Experimenta el lujo y la precisión en cada detalle. Selecciona tu tratamiento ideal.</p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-10 h-10 text-fuchsia-500 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Image Background */}
                <img 
                  src={service.image_url} 
                  alt={service.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="glass-panel p-6 rounded-2xl bg-white/5 border-white/10 backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-start mb-4">
                       <div>
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-fuchsia-400 uppercase tracking-wider mb-2">
                            <Tag className="w-3 h-3" />
                            {service.category}
                          </span>
                          <h3 className="text-2xl font-bold text-white leading-tight">{service.name}</h3>
                       </div>
                       <span className="text-2xl font-bold text-white bg-white/10 px-3 py-1 rounded-lg">{service.price}</span>
                    </div>
                    
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                       <div className="pt-4 border-t border-white/10 flex justify-between items-center text-sm text-slate-300">
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-fuchsia-400" />
                            {service.duration}
                          </span>
                          <button className="flex items-center gap-2 text-white font-bold hover:text-fuchsia-400 transition-colors">
                            Reservar <ArrowUpRight className="w-4 h-4" />
                          </button>
                       </div>
                    </div>
                    
                    {/* Mobile Only: Visible default state info for touch devices */}
                    <div className="md:hidden pt-4 border-t border-white/10 flex justify-between items-center text-sm text-slate-300">
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-fuchsia-400" />
                          {service.duration}
                        </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
