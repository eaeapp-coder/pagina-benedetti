import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ChevronRight, User, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBlog } from '../hooks/useBlog';

export default function BlogSection() {
  const { posts, loading } = useBlog();
  const displayPosts = posts.slice(0, 3);

  if (loading) {
    return (
      <section className="py-24 bg-white flex justify-center items-center">
        <Loader2 className="animate-spin text-[#0088CC] w-8 h-8" />
      </section>
    );
  }

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
          {displayPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col"
            >
              <Link to={`/blog/${post.id}`} className="block relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0088CC]">
                  {post.category}
                </div>
              </Link>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#1A3A5A] mb-3 group-hover:text-[#0088CC] transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-sm font-bold text-[#1A3A5A] hover:text-[#0088CC] transition-colors"
                >
                  Leer más
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
