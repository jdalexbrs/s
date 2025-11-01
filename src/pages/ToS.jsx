import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const ToS = () => {
  return (
    <>
      <Helmet>
        <title>Términos de Servicio - GodestMC</title>
        <meta name="description" content="Lee los términos de servicio de GodestMC. Conoce las reglas y condiciones para jugar en nuestro servidor de Minecraft." />
      </Helmet>

      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black text-gradient mb-6">
              Términos de Servicio
            </h1>
            <p className="text-xl text-gray-300">
              Última actualización: 1 de noviembre de 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none space-y-8"
          >
            <div className="bg-slate-800/50 border border-emerald-500/20 rounded-xl p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">1. Aceptación de Términos</h2>
                <p className="text-gray-300 leading-relaxed">
                  Al acceder y jugar en GodestMC, aceptas cumplir con estos términos de servicio. Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestros servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">2. Reglas de Conducta</h2>
                <div className="text-gray-300 space-y-3">
                  <p className="font-semibold text-white">Los jugadores deben:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Respetar a todos los jugadores y miembros del staff</li>
                    <li>No usar lenguaje ofensivo, discriminatorio o inapropiado</li>
                    <li>No hacer spam en el chat</li>
                    <li>No hacer griefing o destruir construcciones ajenas</li>
                    <li>No usar hacks, mods no autorizados o explotar bugs</li>
                    <li>No hacer publicidad de otros servidores</li>
                    <li>Seguir las instrucciones del staff en todo momento</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">3. Cuenta de Usuario</h2>
                <p className="text-gray-300 leading-relaxed">
                  Eres responsable de mantener la seguridad de tu cuenta de Minecraft. No compartas tu cuenta con otros. Cualquier actividad realizada desde tu cuenta es tu responsabilidad.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">4. Compras y Donaciones</h2>
                <p className="text-gray-300 leading-relaxed">
                  Todas las compras de rangos, items o beneficios son finales y no reembolsables, excepto cuando lo requiera la ley. Las donaciones son voluntarias y ayudan a mantener el servidor funcionando.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">5. Propiedad Intelectual</h2>
                <p className="text-gray-300 leading-relaxed">
                  Todo el contenido del servidor, incluyendo pero no limitado a plugins personalizados, mapas, texturas y diseños, es propiedad de GodestMC. No está permitido copiar, distribuir o usar este contenido sin autorización expresa.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">6. Sanciones</h2>
                <div className="text-gray-300 space-y-3">
                  <p>El incumplimiento de estos términos puede resultar en:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Advertencias verbales o escritas</li>
                    <li>Silenciamiento temporal del chat</li>
                    <li>Suspensión temporal de la cuenta</li>
                    <li>Baneo permanente del servidor</li>
                  </ul>
                  <p className="mt-3">
                    La severidad de la sanción dependerá de la gravedad de la infracción y del historial del jugador.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">7. Modificaciones del Servicio</h2>
                <p className="text-gray-300 leading-relaxed">
                  Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del servidor en cualquier momento sin previo aviso. No somos responsables ante ti o terceros por cualquier modificación, suspensión o discontinuación del servicio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">8. Limitación de Responsabilidad</h2>
                <p className="text-gray-300 leading-relaxed">
                  GodestMC no se hace responsable por pérdidas de items, construcciones o progreso debido a bugs, reinicios del servidor, o cualquier otro problema técnico. Hacemos nuestro mejor esfuerzo para mantener el servidor estable, pero no podemos garantizar un servicio ininterrumpido.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">9. Cambios en los Términos</h2>
                <p className="text-gray-300 leading-relaxed">
                  Podemos actualizar estos términos en cualquier momento. Los cambios significativos serán notificados a través del servidor o nuestro Discord. El uso continuado del servidor después de los cambios constituye tu aceptación de los nuevos términos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">10. Contacto</h2>
                <p className="text-gray-300 leading-relaxed">
                  Si tienes preguntas sobre estos términos, puedes contactarnos a través de nuestra página de contacto o en nuestro servidor de Discord.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ToS;