import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

const posts = [
  {
    title: "Tendencias de Color Otoño 2024",
    excerpt: "Descubre por qué el 'Copper Red' está dominando las pasarelas este año.",
    date: "12 Oct, 2024",
    author: "Elena Vogue",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Cómo mantener tu cabello sano",
    excerpt: "5 consejos esenciales para que tu tratamiento de keratina dure el doble.",
    date: "05 Oct, 2024",
    author: "Marco Rossi",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Cortes cortos: ¿Te atreves?",
    excerpt: "La guía definitiva para saber si el Pixie Cut es adecuado para tu rostro.",
    date: "28 Sep, 2024",
    author: "Sofia Chen",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1887&auto=format&fit=crop"
  }
];

export const Blog = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12 text-center">VOGUE <span className="text-fuchsia-500">Journal</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden group"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-fuchsia-900/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-6">
                <div className="flex gap-4 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-fuchsia-400 transition-colors">{post.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{post.excerpt}</p>
                <button className="text-fuchsia-500 text-sm font-bold hover:underline">LEER ARTÍCULO</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};