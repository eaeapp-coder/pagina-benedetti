import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import PageTransition from '../components/PageTransition';
import { Calendar, User, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function BlogArchive() {
  return (
    <PageTransition>
      <SEO 
        title="Blog de Salud"
        description="Explora nuestro blog de salud en Consultorios Benedetti. Consejos de especialistas en kinesiología, quiropraxia y bienestar integral para tu vida diaria."
      />
      <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-[#1A3A5A] mb-6 tracking-tight"
            >
              Nuestro <span className="text-[#0088CC]">Blog</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Consejos, novedades e información de salud de la mano de nuestros especialistas.
            </motion.p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full"
              >
                {/* Image */}
                <Link to={`/blog/${post.id}`} className="block overflow-hidden aspect-[16/10]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </Link>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-[#0088CC] text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-[#1A3A5A] mb-4 group-hover:text-[#0088CC] transition-colors">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-[#0088CC] font-bold text-sm group/link"
                    >
                      Leer más
                      <ChevronRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
