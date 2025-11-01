import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Jugadores Registrados' },
    { icon: Globe, value: '24/7', label: 'Disponibilidad' },
    { icon: Award, value: '50+', label: 'Eventos Realizados' },
    { icon: Heart, value: '5★', label: 'Valoración Promedio' },
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Nosotros - GodestMC</title>
        <meta name="description" content="Conoce la historia de GodestMC, nuestro equipo y nuestra misión de crear la mejor experiencia de Minecraft en español." />
      </Helmet>

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black text-gradient mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Somos una comunidad apasionada dedicada a ofrecer la mejor experiencia de Minecraft
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-emerald-400">Nuestra Historia</h2>
              <p className="text-gray-300 leading-relaxed">
                GodestMC nació en 2020 con una visión clara: crear un servidor de Minecraft donde la comunidad hispana pudiera disfrutar de una experiencia única, justa y emocionante.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Desde nuestros humildes comienzos con solo unos pocos jugadores, hemos crecido hasta convertirnos en una de las comunidades más grandes y activas de Minecraft en español.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Nuestro compromiso es simple: proporcionar un entorno seguro, divertido y constantemente actualizado donde cada jugador pueda crear recuerdos inolvidables.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-emerald-400">Nuestra Misión</h2>
              <p className="text-gray-300 leading-relaxed">
                Crear una comunidad inclusiva donde jugadores de todas las edades y niveles de experiencia puedan disfrutar de Minecraft al máximo.
              </p>
              <div className="bg-slate-800/50 border border-emerald-500/20 rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">Nuestros Valores</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    Respeto y fair play en todo momento
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    Innovación constante en modos de juego
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    Transparencia con nuestra comunidad
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    Soporte activo y atento
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-emerald-500/20 rounded-xl p-6 text-center space-y-3"
              >
                <stat.icon className="h-10 w-10 text-emerald-400 mx-auto" />
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl p-12 text-center border border-emerald-500/30"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Únete a Nuestra Familia</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Forma parte de una comunidad que valora la diversión, el respeto y la creatividad
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;