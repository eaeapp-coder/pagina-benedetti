import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { Calendar, User, ArrowLeft, Share2, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Consultorios Benedetti",
      "logo": {
        "@type": "ImageObject",
        "url": "https://eaeapp.com/images-ia/benedetti/favico.png"
      }
    },
    "datePublished": post.date,
    "description": post.excerpt
  };

  return (
    <PageTransition>
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={`https://consultoriosbenedetti.com.ar/blog/${post.id}`}
        ogType="article"
        ogImage={post.image}
      />
      <StructuredData data={articleSchema} />
      <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link 
            to="/blog" 
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#0088CC] mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Volver al blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <span className="px-4 py-1.5 bg-blue-50 text-[#0088CC] text-sm font-bold rounded-full inline-block">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-[#1A3A5A] leading-tight tracking-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-[#0088CC]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1A3A5A]">{post.author}</p>
                    <p className="text-xs text-gray-400">Especialista</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
              </div>
            </motion.div>
          </header>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl mb-16 aspect-video"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar - Share/Actions */}
            <div className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-40 space-y-6">
                <button className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#0088CC] hover:border-[#0088CC] transition-all shadow-sm">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#0088CC] hover:border-[#0088CC] transition-all shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Article Body */}
            <div className="lg:col-span-11">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="prose prose-lg prose-blue max-w-none text-gray-600 leading-relaxed"
              >
                {post.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-6">
                    {paragraph.trim()}
                  </p>
                ))}
              </motion.div>

              {/* Footer CTA */}
              <div className="mt-16 p-10 rounded-[3rem] bg-[#1A3A5A] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0088CC] rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">¿Te interesó este artículo?</h3>
                  <p className="text-blue-100 mb-8 max-w-xl">
                    Si tienes dudas sobre este tema o necesitas una consulta personalizada, nuestro equipo está listo para ayudarte.
                  </p>
                  <Link 
                    to="/contacto" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#0088CC] text-white rounded-2xl font-bold hover:bg-[#0077B3] transition-all shadow-lg"
                  >
                    Contactar ahora
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
