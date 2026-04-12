import React from 'react';
import { Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSettings } from '../hooks/useSettings';

export default function Footer() {
  const { settings } = useSettings();
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';

  return (
    <footer className="bg-[#F8FAFC] border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isAdminPage && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-5">
              <Link to="/" className="inline-block mb-6">
                <img 
                  src="https://eaeapp.com/images-ia/benedetti/logo-benedetti.png" 
                  alt="Consultorios Benedetti" 
                  className="h-16 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                Brindamos atención médica de excelencia con un equipo de profesionales altamente capacitados y tecnología de última generación.
              </p>
              <div className="flex space-x-4 mt-6">
                {settings.instagramUrl && (
                  <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 text-gray-400 hover:text-[#E1306C] transition-colors">
                    <Instagram size={20} />
                  </a>
                )}
                {settings.facebookUrl && (
                  <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 text-gray-400 hover:text-[#1877F2] transition-colors">
                    <Facebook size={20} />
                  </a>
                )}
                {settings.linkedinUrl && (
                  <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 text-gray-400 hover:text-[#0A66C2] transition-colors">
                    <Linkedin size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-span-1 md:col-span-4">
              <h4 className="text-[#1A3A5A] font-bold mb-6">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-sm text-gray-600">
                  <MapPin className="w-5 h-5 text-[#0088CC] shrink-0" />
                  <span>Dirección: {settings.address}</span>
                </li>
                <li className="flex items-start space-x-3 text-sm text-gray-600">
                  <Phone className="w-5 h-5 text-[#0088CC] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span>{settings.phoneLine} (Línea)</span>
                    <span>{settings.phoneWhatsapp} (WhatsApp)</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div className="col-span-1 md:col-span-3">
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
          </div>
        )}

        <div className={`border-t border-gray-200 pt-8 flex flex-col items-center text-xs text-gray-400 ${isAdminPage ? 'border-none pt-0' : ''}`}>
          {!isAdminPage && (
            <p className="mb-4 md:mb-0">© 2026 Consultorios Benedetti. Todos los derechos reservados.</p>
          )}
          <div className="flex justify-center mt-2">
            <span className="text-center">Diseño y Desarrollo <a href="https://eaeapp.com" target="_blank" rel="noopener noreferrer" className="text-[#FF3365] font-bold hover:opacity-80 transition-opacity">eaeapp</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
