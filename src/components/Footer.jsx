import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-emerald-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold text-gradient">GodestMC</span>
            </div>
            <p className="text-gray-400 text-sm">El mejor servidor de Minecraft en español. Únete a nuestra comunidad y al Olimpo.</p>
          </div>

          <div>
            <span className="text-emerald-400 font-semibold mb-4 block">Enlaces Rápidos</span>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Inicio
              </Link>
              <a href="https://tienda.godestmc.website/" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Tienda
              </a>
              <Link to="/about" className="block text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Sobre Nosotros
              </Link>
              <Link to="/faq" className="block text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                FAQ
              </Link>
            </div>
          </div>

          <div>
            <span className="text-emerald-400 font-semibold mb-4 block">Legal</span>
            <div className="space-y-2">
              <Link to="/tos" className="block text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Términos de Servicio
              </Link>
              <Link to="/privacy" className="block text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Políticas de Privacidad
              </Link>
            </div>
          </div>

          <div>
            <span className="text-emerald-400 font-semibold mb-4 block">Contacto</span>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="h-4 w-4" />
                <span>soporte@godestmc.xyz</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4" />
                <span>http://discord.godestmc.xyz</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-500/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 GodestMC. Todos los derechos reservados. No afiliado con Mojang AB.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;