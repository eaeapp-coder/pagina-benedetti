import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ChevronRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const BLOG_POSTS = [
  {
    id: 1,
    title: "Beneficios de la Quiropraxia en la vida diaria",
    excerpt: "Descubre cómo los ajustes vertebrales pueden mejorar tu postura y reducir el estrés cotidiano.",
    date: "20 Mar, 2026",
    author: "Dr. Roberto Gómez",
    image: "https://lh3.googleusercontent.com/d/1LOXqn-eOuM5tTno7lRElV6_aA3UZprLa",
    category: "Quiropraxia"
  },
  {
    id: 2,
    title: "Análisis de la pisada: ¿Por qué es importante?",
    excerpt: "La forma en que caminamos influye en todo nuestro cuerpo. Aprende a prevenir lesiones desde la base.",
    date: "15 Mar, 2026",
    author: "Lic. Carlos Rodríguez",
    image: "https://lh3.googleusercontent.com/d/1LOXqn-eOuM5tTno7lRElV6_aA3UZprLa",
    category: "Kinesiología"
  },
  {
    id: 3,
    title: "Prevención de lesiones en deportistas",
    excerpt: "Consejos fundamentales de traumatología para mantenerte activo y evitar interrupciones en tu entrenamiento.",
    date: "10 Mar, 2026",
    author: "Dra. Ana Martínez",
    image: "https://lh3.googleusercontent.com/d/1LOXqn-eOuM5tTno7lRElV6_aA3UZprLa",
    category: "Ortopedia"
  }
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A5A] mb-4">
              Nuestro <span className="text-[#0088CC]">Blog</span> de Salud
            </h2>
            <p className="text-gray-500">
              Información útil, consejos y novedades para cuidar tu bienestar y el de tu familia.
            </p>
          </div>
          <Link 
            to="/blog" 
            className="mt-6 md:mt-0 flex items-center text-[#0088CC] font-bold hover:text-[#1A3A5A] transition-colors group"
          >
            Ver todas las entradas
            <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 mb-6 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0088CC]">
                  {post.category}
                </div>
              </div>

              <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {post.author}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#1A3A5A] mb-3 group-hover:text-[#0088CC] transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>
              
              <Link 
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-sm font-bold text-[#1A3A5A] hover:text-[#0088CC] transition-colors"
              >
                Leer más
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
