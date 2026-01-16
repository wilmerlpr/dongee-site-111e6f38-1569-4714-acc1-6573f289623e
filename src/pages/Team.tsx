import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const team = [
  {
    name: "Elena Vogue",
    role: "Directora Creativa",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    bio: "Especialista en cortes geométricos con 15 años de experiencia en Londres."
  },
  {
    name: "Marco Rossi",
    role: "Master Colorist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    bio: "El rey del rubio platino y las técnicas de degradado sutil."
  },
  {
    name: "Sofia Chen",
    role: "Stylist Senior",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    bio: "Apasionada por las texturas naturales y los peinados editoriales."
  }
];

export const Team = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Conoce al <span className="text-gradient">Equipo</span></h1>
          <p className="text-slate-400">Artistas apasionados dedicados a tu belleza.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl h-[450px]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <p className="text-fuchsia-400 font-medium mb-2">{member.role}</p>
                  <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{member.bio}</p>
                </div>
              </div>
              <button className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-fuchsia-600">
                <Instagram className="w-5 h-5 text-white" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};