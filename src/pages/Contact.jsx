import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: '¡Mensaje Enviado!',
      description: 'Gracias por contactarnos. Te responderemos pronto.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contacto - GodestMC</title>
        <meta name="description" content="Ponte en contacto con el equipo de GodestMC. Estamos aquí para ayudarte con cualquier pregunta o problema." />
      </Helmet>

      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black text-gradient mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-300">
              ¿Tienes preguntas? Estamos aquí para ayudarte
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-emerald-400 mb-6">
                  Información de Contacto
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier consulta o problema que puedas tener.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-slate-800/50 border border-emerald-500/20 rounded-xl p-6">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">soporte@godestmc.xyz</p>
                    <p className="text-sm text-gray-400 mt-1">Respuesta en 1-24 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-slate-800/50 border border-emerald-500/20 rounded-xl p-6">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Discord</h3>
                    <p className="text-gray-300">http://discord.godestmc.xyz</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Soporte en tiempo real
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl p-6 border border-emerald-500/30">
                <h3 className="text-xl font-bold text-white mb-3">
                  ¿Necesitas ayuda inmediata?
                </h3>
                <p className="text-gray-300 mb-4">
                  Únete a nuestro servidor de Discord para obtener soporte instantáneo de nuestro equipo y la comunidad.
                </p>
                <a
                  href="http://discord.godestmc.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Unirse a Discord
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="bg-slate-800/50 border border-emerald-500/20 rounded-xl p-8 space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Envíanos un Mensaje
                </h2>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-emerald-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar Mensaje</span>
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;