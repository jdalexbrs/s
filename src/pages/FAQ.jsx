import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: '¿Cómo me uno al servidor?',
      answer: 'Para Java Edition, usa la IP: mc.godestmc.xyz. Para Bedrock Edition, usa: bedrock.godestmc.xyz. Simplemente añade la IP en tu lista de servidores multijugador y conéctate.',
    },
    {
      question: '¿El servidor es gratuito?',
      answer: 'Sí, GodestMC es completamente gratuito para jugar. Ofrecemos rangos premium opcionales que ayudan a mantener el servidor, pero no son necesarios para disfrutar de la experiencia completa.',
    },
    {
      question: '¿Qué versiones de Minecraft son compatibles?',
      answer: 'Soportamos las versiones más recientes de Minecraft Java Edition (1.20+) y Bedrock Edition. Recomendamos usar siempre la última versión para la mejor experiencia.',
    },
    {
      question: '¿Hay protección contra griefing?',
      answer: 'Absolutamente. Contamos con sistemas avanzados de protección de terrenos y un equipo de moderación activo 24/7 para garantizar que tus construcciones estén seguras.',
    },
    {
      question: '¿Puedo jugar con amigos?',
      answer: 'Por supuesto. Puedes crear clans, formar equipos y construir juntos. También ofrecemos sistemas de teletransporte para facilitar el encuentro con tus amigos.',
    },
    {
      question: '¿Qué modos de juego están disponibles?',
      answer: 'Ofrecemos Survival, Creative, SkyBlock, PvP, minijuegos y eventos especiales semanales. Constantemente añadimos nuevos modos basados en las sugerencias de la comunidad.',
    },
    {
      question: '¿Cómo reporto a un jugador problemático?',
      answer: 'Puedes usar el comando /report en el juego o contactar a nuestro equipo de moderación a través de Discord. Tomamos muy en serio todos los reportes.',
    },
    {
      question: '¿Hay recompensas por jugar?',
      answer: 'Sí, tenemos un sistema de recompensas diarias, logros desbloqueables y eventos con premios exclusivos. Cuanto más juegues, más recompensas obtendrás.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Preguntas Frecuentes - GodestMC</title>
        <meta name="description" content="Encuentra respuestas a las preguntas más frecuentes sobre GodestMC. Aprende cómo conectarte, jugar y disfrutar al máximo de nuestro servidor." />
      </Helmet>

      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black text-gradient mb-6">
              Preguntas Frecuentes
            </h1>
            <p className="text-xl text-gray-300">
              Encuentra respuestas a las dudas más comunes
            </p>
          </motion.div>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Accordion.Item
                  value={`item-${index}`}
                  className="bg-slate-800/50 border border-emerald-500/20 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full px-6 py-5 flex items-center justify-between text-left group">
                      <span className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {faq.question}
                      </span>
                      <ChevronDown className="h-5 w-5 text-emerald-400 transition-transform group-data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pb-5 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl p-8 text-center border border-emerald-500/30"
          >
            <h2 className="text-2xl font-bold mb-3 text-white">¿No encuentras tu respuesta?</h2>
            <p className="text-gray-300 mb-6">
              Nuestro equipo de soporte está listo para ayudarte
            </p>
            <a
              href="/contact"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contáctanos
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FAQ;