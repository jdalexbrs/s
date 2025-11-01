import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Políticas de Privacidad - GodestMC</title>
        <meta name="description" content="Lee nuestras políticas de privacidad y conoce cómo protegemos tu información en GodestMC." />
      </Helmet>

      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black text-gradient mb-6">
              Políticas de Privacidad
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
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">1. Información que Recopilamos</h2>
                <div className="text-gray-300 space-y-3">
                  <p className="font-semibold text-white">Recopilamos la siguiente información:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nombre de usuario de Minecraft y UUID</li>
                    <li>Dirección IP para seguridad y prevención de abusos</li>
                    <li>Estadísticas de juego y progreso en el servidor</li>
                    <li>Mensajes del chat (para moderación y soporte)</li>
                    <li>Información de compras y transacciones</li>
                    <li>Información de contacto si nos la proporcionas voluntariamente</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">2. Cómo Usamos tu Información</h2>
                <div className="text-gray-300 space-y-3">
                  <p>Utilizamos la información recopilada para:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Proporcionar y mejorar nuestros servicios</li>
                    <li>Personalizar tu experiencia de juego</li>
                    <li>Procesar transacciones y compras</li>
                    <li>Mantener la seguridad del servidor</li>
                    <li>Hacer cumplir nuestras reglas y términos de servicio</li>
                    <li>Comunicarnos contigo sobre actualizaciones y eventos</li>
                    <li>Analizar el uso del servidor para mejoras</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">3. Compartir Información</h2>
                <p className="text-gray-300 leading-relaxed">
                  No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en las siguientes circunstancias:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300 mt-3">
                  <li>Con proveedores de servicios que nos ayudan a operar el servidor (procesadores de pago, hosting)</li>
                  <li>Cuando sea requerido por ley o para proteger nuestros derechos legales</li>
                  <li>Con tu consentimiento explícito</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">4. Cookies y Tecnologías Similares</h2>
                <p className="text-gray-300 leading-relaxed">
                  Nuestro sitio web puede usar cookies para mejorar tu experiencia. Las cookies son pequeños archivos que se almacenan en tu dispositivo. Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades del sitio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">5. Seguridad de Datos</h2>
                <p className="text-gray-300 leading-relaxed">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet es 100% seguro.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">6. Retención de Datos</h2>
                <p className="text-gray-300 leading-relaxed">
                  Conservamos tu información mientras tu cuenta esté activa o según sea necesario para proporcionarte servicios. Podemos retener cierta información después de que cierres tu cuenta si es requerido por ley o para propósitos legítimos de negocio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">7. Derechos del Usuario</h2>
                <div className="text-gray-300 space-y-3">
                  <p>Tienes derecho a:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Acceder a tu información personal</li>
                    <li>Solicitar la corrección de datos inexactos</li>
                    <li>Solicitar la eliminación de tu información (sujeto a ciertas excepciones)</li>
                    <li>Oponerte al procesamiento de tu información</li>
                    <li>Solicitar la portabilidad de tus datos</li>
                  </ul>
                  <p className="mt-3">
                    Para ejercer estos derechos, contáctanos a través de nuestra página de contacto.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">8. Privacidad de Menores</h2>
                <p className="text-gray-300 leading-relaxed">
                  Nuestro servidor está abierto a jugadores de todas las edades. Si eres menor de 13 años, debes tener el permiso de tus padres o tutores para jugar. No recopilamos intencionalmente información de menores sin el consentimiento parental.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">9. Cambios en esta Política</h2>
                <p className="text-gray-300 leading-relaxed">
                  Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios significativos publicando la nueva política en esta página y actualizando la fecha de "última actualización".
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">10. Contacto</h2>
                <p className="text-gray-300 leading-relaxed">Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos tu información, puedes contactarnos en soporte@godestmc.xyz o a través de nuestra página de contacto.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Privacy;