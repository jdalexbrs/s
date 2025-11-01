import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Copy, Check, Zap, Shield, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Home = () => {
  const [playerCount, setPlayerCount] = useState(0);
  const [copiedJava, setCopiedJava] = useState(false);
  const [copiedBedrock, setCopiedBedrock] = useState(false);
  const { toast } = useToast();

  const javaIP = 'mc.godestmc.xyz';
  const bedrockIP = 'bedrock.godestmc.xyz';

  useEffect(() => {
    const fetchPlayerCount = async () => {
      try {
        const response = await fetch(`https://api.mcsrvstat.us/3/${javaIP}`);
        const data = await response.json();
        if (data.online && data.players) {
          setPlayerCount(data.players.online || 0);
        }
      } catch (error) {
        console.error('Error fetching player count:', error);
      }
    };

    fetchPlayerCount();
    const interval = setInterval(fetchPlayerCount, 60000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'java') {
        setCopiedJava(true);
        setTimeout(() => setCopiedJava(false), 2000);
      } else {
        setCopiedBedrock(true);
        setTimeout(() => setCopiedBedrock(false), 2000);
      }
      toast({
        title: '¡IP Copiada!',
        description: `La IP de ${type === 'java' ? 'Java' : 'Bedrock'} ha sido copiada al portapapeles.`,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'No se pudo copiar la IP. Inténtalo de nuevo.',
        variant: 'destructive',
      });
    }
  };

  const features = [
    {
      icon: Zap,
      title: 'Rendimiento Óptimo',
      description: 'Servidor de alta velocidad con 99.9% de uptime',
    },
    {
      icon: Shield,
      title: 'Protección Anti-Griefing',
      description: 'Tu construcción está segura con nuestro sistema de protección',
    },
    {
      icon: Trophy,
      title: 'Eventos Épicos',
      description: 'Participa en eventos semanales con premios increíbles',
    },
  ];

  return (
    <>
      <Helmet>
        <title>GodestMC - El Mejor Servidor de Minecraft en Español</title>
        <meta name="description" content="Únete a GodestMC, el servidor de Minecraft más emocionante en español. Survival, minijuegos, eventos y una comunidad increíble te esperan." />
      </Helmet>

      <div className="pt-16">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-black text-gradient glow-effect"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Bienvenido a GodestMC
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="my-8"
              >
                <img 
                  src="https://horizons-cdn.hostinger.com/c4ae1077-3f8f-4f6a-96bc-fdeda172aec5/d15d947e8f46c4c260dcc8804bdd8508.png" 
                  alt="GodestMC Banner" 
                  className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl shadow-emerald-500/20"
                />
              </motion.div>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Vive la mejor experiencia de Minecraft con nuestra comunidad
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center space-x-3 text-emerald-400"
              >
                <Users className="h-6 w-6" />
                <span className="text-2xl font-bold">{playerCount}</span>
                <span className="text-gray-400">jugadores conectados</span>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-emerald-400 font-semibold text-sm">JAVA EDITION</span>
                      <p className="text-2xl font-bold mt-1">{javaIP}</p>
                    </div>
                    <Button
                      onClick={() => copyToClipboard(javaIP, 'java')}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white"
                    >
                      {copiedJava ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-cyan-400 font-semibold text-sm">BEDROCK EDITION</span>
                      <p className="text-2xl font-bold mt-1">{bedrockIP}</p>
                    </div>
                    <Button
                      onClick={() => copyToClipboard(bedrockIP, 'bedrock')}
                      className="bg-cyan-500 hover:bg-cyan-600 text-white"
                    >
                      {copiedBedrock ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
            >
              ¿Por Qué Elegirnos?
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8 space-y-4 hover:border-emerald-500/50 transition-all"
                >
                  <div className="w-14 h-14 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-7 w-7 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl p-12 text-center border border-emerald-500/30">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
              >
                ¿Listo para la Aventura?
              </motion.h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Únete a miles de jugadores y comienza tu viaje épico hoy mismo
              </p>
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-8 py-6"
                onClick={() => copyToClipboard(javaIP, 'java')}
              >
                Copiar IP y Jugar Ahora
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;