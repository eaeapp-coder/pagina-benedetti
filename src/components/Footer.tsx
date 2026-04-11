import React from 'react';
import { Phone, MapPin, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#F8FAFC] border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <img 
                  src="https://photos.app.goo.gl/FwTdmu6AzJcQK5mKA" 
                  alt="Logo" 
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback');
                    if (fallback) (fallback as HTMLElement).style.display = 'flex';
                  }}
                />
                <div className="logo-fallback hidden bg-gradient-to-br from-[#0088CC] to-[#005580] p-1.5 rounded-lg shadow-sm">
                  <Plus className="text-white w-5 h-5" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#1A3A5A] tracking-tight leading-none">Consultorios</span>
                <span className="text-lg font-bold text-[#0088CC] tracking-tight">Benedetti</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Brindamos atención médica de excelencia con un equipo de profesionales altamente capacitados y tecnología de última generación.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#1A3A5A] font-bold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-600">
                <MapPin className="w-5 h-5 text-[#0088CC] shrink-0" />
                <span>Dirección: 29 de Setiembre 2168, Lanús Este</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-600">
                <Phone className="w-5 h-5 text-[#0088CC] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>2071-7674 (Línea)</span>
                  <span>011 2288-3581 (WhatsApp)</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[#1A3A5A] font-bold mb-6">Institucional</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/nosotros" className="hover:text-[#0088CC]">Sobre Nosotros</Link></li>
              <li><Link to="/especialidades" className="hover:text-[#0088CC]">Especialidades</Link></li>
              <li><Link to="/profesionales" className="hover:text-[#0088CC]">Profesionales</Link></li>
              <li><Link to="/obras-sociales" className="hover:text-[#0088CC]">Obras Sociales</Link></li>
              <li><a href="https://pruebas.eaeapp.com/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0088CC]">Blog</a></li>
              <li><Link to="/contacto" className="hover:text-[#0088CC]">Contacto</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[#1A3A5A] font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/privacidad" className="hover:text-[#0088CC]">Política de privacidad</Link></li>
              <li><Link to="/terminos" className="hover:text-[#0088CC]">Términos de pedido</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2026 Consultorios Benedetti. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Diseño y Desarrollo <a href="https://eaeapp.com" target="_blank" rel="noopener noreferrer" className="text-[#FF3365] font-bold hover:opacity-80 transition-opacity">eaeapp</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
