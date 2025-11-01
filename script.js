
/* Converted static site script - full version */
const routes = {
  '/': render_home,
  '/about': render_about,
  '/faq': render_faq,
  '/contact': render_contact,
  '/tos': render_tos,
  '/privacy': render_privacy
};

function setActiveLink(path) {
  document.querySelectorAll('.nav-link').forEach(a=>{
    const href = a.getAttribute('href') || '';
    if(href.endsWith(path) || (path==='/' && href.endsWith('#/'))){
      a.classList.add('font-semibold','text-indigo-600');
    } else {
      a.classList.remove('font-semibold','text-indigo-600');
    }
  });
}

function router() {
  const hash = location.hash || '#/';
  const path = hash.replace('#','').split('?')[0];
  setActiveLink(path);
  const fn = routes[path] || (()=>{document.getElementById('app').innerHTML='<h1>Página no encontrada</h1>'});
  fn();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

/* Simple toaster */
function toast({title='', description='', variant='default', duration=3500}){
  const id = 't'+Date.now();
  const el = document.createElement('div');
  el.id = id;
  el.className = 'max-w-xs p-3 rounded shadow-lg border flex flex-col gap-1 ' + (variant==='destructive' ? 'bg-red-50 border-red-200' : 'bg-white border-gray-200');
  el.innerHTML = '<strong class="block text-sm">'+title+'</strong><div class="text-xs text-gray-600">'+description+'</div>';
  const container = document.getElementById('toaster');
  container.appendChild(el);
  setTimeout(()=>{ el.remove(); }, duration);
}

/* copy helper */
async function copyText(text, opts={}){
  try{
    await navigator.clipboard.writeText(text);
    toast({title: opts.title || 'Copiado', description: opts.description || text});
  }catch(e){
    toast({title: 'Error', description: 'No se pudo copiar la IP.', variant:'destructive'});
  }
}

/* Mobile menu */
document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('menuBtn');
  if(btn) btn.addEventListener('click', ()=>{
    const nav = document.getElementById('navLinks');
    if(nav.classList.contains('hidden')) nav.classList.remove('hidden'); else nav.classList.add('hidden');
  });
});


function render_home(){
  document.getElementById('app').innerHTML = `
    <section class="bg-white rounded p-6 shadow">
      <h1 class="text-2xl font-bold mb-2">Home</h1>
      <p class='text-gray-600 mb-3'>const Home = () =&gt; = useToast(); const javaIP = &#x27;mc.godestmc.xyz&#x27;; const bedrockIP = &#x27;bedrock.godestmc.xyz&#x27;; useEffect(() =&gt; `); const data = await response.json(); if (data.online &amp;&amp; data.players) } catch (error) }; fetchPlayerCount(); const interval = setInterval(fetchPlayerCount, 60000); return () =&gt; clearInterval(interval); }, []); const copyToClipboard = async (text, type) =&gt; else toast( ha sido copiada al portapapeles.`, }); } catch (error) ); } }; const features = [ , , , ]; return ( &lt;&gt; GodestMC - El Mejor Servidor de Minecraft en Español Bienvenido a GodestMC Vive la mejor experiencia de Minecraft con nuestra comunidad jugadores conectados JAVA EDITION BEDROCK EDITION ¿Por Qué Elegirnos? initial=} whileInView=} viewport=} transition=} whileHover=} className=&quot;bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8 space-y-4 hover:border-emerald-500/50 transition-all&quot; &gt; ))} ¿Listo para la Aventura? Únete a miles de jugadores y comienza tu viaje épico hoy mismo Copiar IP y Jugar Ahora ); };.</p>
    </section>
  `;
}


function render_about(){
  document.getElementById('app').innerHTML = `
    <section class="bg-white rounded p-6 shadow">
      <h1 class="text-2xl font-bold mb-2">About</h1>
      <p class='text-gray-600 mb-3'>const About = () =&gt; , , , , ]; return ( &lt;&gt; Sobre Nosotros - GodestMC Sobre Nosotros Somos una comunidad apasionada dedicada a ofrecer la mejor experiencia de Minecraft Nuestra Historia GodestMC nació en 2020 con una visión clara: crear un servidor de Minecraft donde la comunidad hispana pudiera disfrutar de una experiencia única, justa y emocionante. Desde nuestros humildes comienzos con solo unos pocos jugadores, hemos crecido hasta convertirnos en una de las comunidades más grandes y activas de Minecraft en español. Nuestro compromiso es simple: proporcionar un entorno seguro, divertido y constantemente actualizado donde cada jugador pueda crear recuerdos inolvidables. Nuestra Misión Crear una comunidad inclusiva donde jugadores de todas las edades y niveles de experiencia puedan disfrutar de Minecraft al máximo. Nuestros Valores • Respeto y fair play en todo momento • Innovación constante en modos de juego • Transparencia con nuestra comunidad • Soporte activo y atento initial=} whileInView=} viewport=} transition=} className=&quot;bg-slate-800/50 border border-emerald-500/20 rounded-xl p-6 text-center space-y-3&quot; &gt; ))} Únete a Nuestra Familia Forma parte de una comunidad que valora la diversión, el respeto y la creatividad ); };.</p>
    </section>
  `;
}


function render_faq(){
  document.getElementById('app').innerHTML = `
    <section class="bg-white rounded p-6 shadow">
      <h1 class="text-2xl font-bold mb-2">Faq</h1>
      <p class='text-gray-600 mb-3'>const FAQ = () =&gt; , , , , , , , , ]; return ( &lt;&gt; Preguntas Frecuentes - GodestMC Preguntas Frecuentes Encuentra respuestas a las dudas más comunes initial=} animate=} transition=} &gt; ))} ¿No encuentras tu respuesta? Nuestro equipo de soporte está listo para ayudarte Contáctanos ); };.</p>
    </section>
  `;
}


function render_contact(){
  document.getElementById('app').innerHTML = `
    <section class="bg-white rounded p-6 shadow">
      <h1 class="text-2xl font-bold mb-2">Contact</h1>
      <p class='text-gray-600 mb-3'>const Contact = () =&gt; ); const = useToast(); const handleChange = (e) =&gt; ); }; const handleSubmit = (e) =&gt; ); setFormData(); }; return ( &lt;&gt; Contacto - GodestMC Contáctanos ¿Tienes preguntas? Estamos aquí para ayudarte Información de Contacto Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier consulta o problema que puedas tener. Email soporte@godestmc.xyz Respuesta en 1-24 horas Discord http://discord.godestmc.xyz Soporte en tiempo real ¿Necesitas ayuda inmediata? Únete a nuestro servidor de Discord para obtener soporte instantáneo de nuestro equipo y la comunidad. Unirse a Discord Envíanos un Mensaje Nombre Email Asunto Mensaje Enviar Mensaje ); };.</p>
    </section>
  `;
}


function render_tos(){
  document.getElementById('app').innerHTML = `
    <section class="bg-white rounded p-6 shadow">
      <h1 class="text-2xl font-bold mb-2">Tos</h1>
      <p class='text-gray-600 mb-3'>const ToS = () =&gt; } animate=} className=&quot;text-center mb-16&quot; &gt; Términos de Servicio Última actualización: 1 de noviembre de 2025 1. Aceptación de Términos Al acceder y jugar en GodestMC, aceptas cumplir con estos términos de servicio. Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestros servicios. 2. Reglas de Conducta Los jugadores deben: Respetar a todos los jugadores y miembros del staff No usar lenguaje ofensivo, discriminatorio o inapropiado No hacer spam en el chat No hacer griefing o destruir construcciones ajenas No usar hacks, mods no autorizados o explotar bugs No hacer publicidad de otros servidores Seguir las instrucciones del staff en todo momento 3. Cuenta de Usuario Eres responsable de mantener la seguridad de tu cuenta de Minecraft. No compartas tu cuenta con otros. Cualquier actividad realizada desde tu cuenta es tu responsabilidad. 4. Compras y Donaciones Todas las compras de rangos, items o beneficios son finales y no reembolsables, excepto cuando lo requiera la ley. Las donaciones son voluntarias y ayudan a mantener el servidor funcionando. 5. Propiedad Intelectual Todo el contenido del servidor, incluyendo pero no limitado a plugins personalizados, mapas, texturas y diseños, es propiedad de GodestMC. No está permitido copiar, distribuir o usar este contenido sin autorización expresa. 6. Sanciones El incumplimiento de estos términos puede resultar en: Advertencias verbales o escritas Silenciamiento temporal del chat Suspensión temporal de la cuenta Baneo permanente del servidor La severidad de la sanción dependerá de la gravedad de la infracción y del historial del jugador. 7. Modificaciones del Servicio Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del servidor en cualquier momento sin previo aviso. No somos responsables ante ti o terceros por cualquier modificación, suspensión o discontinuación del servicio. 8. Limitación de Responsabilidad GodestMC no se hace responsable por pérdidas de items, construcciones o progreso debido a bugs, reinicios del servidor, o cualquier otro problema técnico. Hacemos nuestro mejor esfuerzo para mantener el servidor estable, pero no podemos garantizar un servicio ininterrumpido. 9. Cambios en los Términos Podemos actualizar estos términos en cualquier momento. Los cambios significativos serán notificados a través del servidor o nuestro Discord. El uso continuado del servidor después de los cambios constituye tu aceptación de los nuevos términos. 10. Contacto Si tienes preguntas sobre estos términos, puedes contactarnos a través de nuestra página de contacto o en nuestro servidor de Discord. ); };.</p>
    </section>
  `;
}


function render_privacy(){
  document.getElementById('app').innerHTML = `
    <section class="bg-white rounded p-6 shadow">
      <h1 class="text-2xl font-bold mb-2">Privacy</h1>
      <p class='text-gray-600 mb-3'>const Privacy = () =&gt; } animate=} className=&quot;text-center mb-16&quot; &gt; Políticas de Privacidad Última actualización: 1 de noviembre de 2025 1. Información que Recopilamos Recopilamos la siguiente información: Nombre de usuario de Minecraft y UUID Dirección IP para seguridad y prevención de abusos Estadísticas de juego y progreso en el servidor Mensajes del chat (para moderación y soporte) Información de compras y transacciones Información de contacto si nos la proporcionas voluntariamente 2. Cómo Usamos tu Información Utilizamos la información recopilada para: Proporcionar y mejorar nuestros servicios Personalizar tu experiencia de juego Procesar transacciones y compras Mantener la seguridad del servidor Hacer cumplir nuestras reglas y términos de servicio Comunicarnos contigo sobre actualizaciones y eventos Analizar el uso del servidor para mejoras 3. Compartir Información No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en las siguientes circunstancias: Con proveedores de servicios que nos ayudan a operar el servidor (procesadores de pago, hosting) Cuando sea requerido por ley o para proteger nuestros derechos legales Con tu consentimiento explícito 4. Cookies y Tecnologías Similares Nuestro sitio web puede usar cookies para mejorar tu experiencia. Las cookies son pequeños archivos que se almacenan en tu dispositivo. Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades del sitio. 5. Seguridad de Datos Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet es 100% seguro. 6. Retención de Datos Conservamos tu información mientras tu cuenta esté activa o según sea necesario para proporcionarte servicios. Podemos retener cierta información después de que cierres tu cuenta si es requerido por ley o para propósitos legítimos de negocio. 7. Derechos del Usuario Tienes derecho a: Acceder a tu información personal Solicitar la corrección de datos inexactos Solicitar la eliminación de tu información (sujeto a ciertas excepciones) Oponerte al procesamiento de tu información Solicitar la portabilidad de tus datos Para ejercer estos derechos, contáctanos a través de nuestra página de contacto. 8. Privacidad de Menores Nuestro servidor está abierto a jugadores de todas las edades. Si eres menor de 13 años, debes tener el permiso de tus padres o tutores para jugar. No recopilamos intencionalmente información de menores sin el consentimiento parental. 9. Cambios en esta Política Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios significativos publicando la nueva política en esta página y actualizando la fecha de &quot;última actualización&quot;. 10. Contacto Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos tu información, puedes contactarnos en soporte@godestmc.xyz o a través de nuestra página de contacto. ); };.</p>
    </section>
  `;
}


function render_home(){
  const javaIP = 'mc.godestmc.xyz';
  const bedrockIP = 'bedrock.godestmc.xyz';
  document.getElementById('app').innerHTML = `
    <section class="bg-white rounded p-6 shadow">
      <h1 class="text-3xl font-bold mb-2">GodestMC</h1>
      <p class="text-gray-600 mb-4">Servidor Minecraft - Rendimiento, comunidad y seguridad.</p>
      <div class="flex flex-col sm:flex-row gap-3">
        <div class="p-4 border rounded flex-1">
          <h3 class="font-semibold">Java</h3>
          <div class="mt-2 flex items-center justify-between">
            <div><code id="javaIP">${javaIP}</code></div>
            <div class="flex gap-2">
              <button id="copyJava" class="px-3 py-1 bg-indigo-600 text-white rounded">Copiar IP</button>
            </div>
          </div>
        </div>
        <div class="p-4 border rounded flex-1">
          <h3 class="font-semibold">Bedrock</h3>
          <div class="mt-2 flex items-center justify-between">
            <div><code id="bedrockIP">${bedrockIP}</code></div>
            <div class="flex gap-2">
              <button id="copyBed" class="px-3 py-1 bg-indigo-600 text-white rounded">Copiar IP</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
  document.getElementById('copyJava').addEventListener('click', ()=> copyText(javaIP,{title:'IP Java copiada', description: javaIP}));
  document.getElementById('copyBed').addEventListener('click', ()=> copyText(bedrockIP,{title:'IP Bedrock copiada', description: bedrockIP}));
}
