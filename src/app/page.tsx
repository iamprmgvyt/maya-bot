'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, Play, Pause, Radio, ListMusic, Search, Volume2, Disc, Sparkles, Command, Server, Users, Moon, Sun, Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function MayaBotPage() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentBeat, setCurrentBeat] = useState(0);

  // Audio visualization animation
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentBeat((prev) => (prev + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const MusicVisualizer = () => (
    <div className="flex items-end justify-center gap-1 h-20">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((bar) => (
        <motion.div
          key={bar}
          className="w-2 bg-gradient-to-t from-purple-600 to-pink-500 rounded-full"
          animate={{
            height: isPlaying
              ? [20, 60, 40, 80, 30, 70, 50, 90][(bar + currentBeat) % 8]
              : 20,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );

  const FloatingDisc = () => (
    <div className="relative">
      <motion.div
        className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center shadow-2xl"
        animate={{
          rotate: isPlaying ? 360 : 0,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          },
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-800 via-pink-700 to-purple-900 flex items-center justify-center">
          <motion.div
            className="w-20 h-20 rounded-full bg-gradient-to-br from-white to-pink-200 flex items-center justify-center"
            animate={{
              scale: isPlaying ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Music className="w-10 h-10 text-purple-600" />
          </motion.div>
        </div>
      </motion.div>
      {/* Orbiting notes */}
      {[1, 2, 3, 4].map((note) => (
        <motion.div
          key={note}
          className="absolute text-pink-400"
          style={{
            top: '50%',
            left: '50%',
          }}
          animate={{
            rotate: note * 90 + (isPlaying ? 360 : 0),
            x: Math.cos((note * Math.PI) / 2) * 100,
            y: Math.sin((note * Math.PI) / 2) * 100,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Music className="w-6 h-6" />
        </motion.div>
      ))}
    </div>
  );

  const FloatingBackground = () => {
    const [particles, setParticles] = useState<Array<{ left: number; top: number; duration: number; delay: number }>>([]);

    useEffect(() => {
      setParticles(
        [...Array(20)].map(() => ({
          left: Math.random() * 100,
          top: Math.random() * 100,
          duration: 3 + Math.random() * 4,
          delay: Math.random() * 2,
        }))
      );
    }, []);

    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>
    );
  };

  const LanguageSelector = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="min-w-12">
          <Globe className="w-4 h-4 mr-2" />
          {language.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage('en')}>
          🇬🇧 English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('vi')}>
          🇻🇳 Tiếng Việt
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('hi')}>
          🇮🇳 हिंदी
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const ThemeToggle = () => (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="min-w-12"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </Button>
  );

  const FeatureCard = ({ icon: Icon, title, desc }: any) => (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-purple-200 bg-white/80 dark:bg-gray-800/80 dark:hover:border-purple-400 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{desc}</p>
      </CardContent>
    </Card>
  );

  const CommandCard = ({ command, desc }: any) => (
    <Card className="transition-all duration-300 hover:shadow-md hover:border-purple-200 bg-white/80 dark:bg-gray-800/80 dark:hover:border-purple-400 backdrop-blur-sm">
      <CardContent className="p-4 flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
          <Command className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <code className="text-lg font-semibold text-purple-700 dark:text-purple-400">{command}</code>
          <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <FloatingBackground />

      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-purple-100 dark:border-purple-900/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <Disc className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              Maya Bot
            </span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              {[
                { key: 'home', icon: Music },
                { key: 'features', icon: Sparkles },
                { key: 'commands', icon: Command },
                { key: 'about', icon: Server },
              ].map((item) => (
                <a
                  key={item.key}
                  href={`#${item.key}`}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105 transition-all duration-300"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{t(item.key)}</span>
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <Sparkles className="w-3 h-3 mr-1" />
                  {t('heroSubtitle')}
                </Badge>
              </motion.div>
              <motion.h1
                className="text-6xl md:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  {t('heroTitle')}
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 dark:text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {t('heroDescription')}
              </motion.p>
              <motion.div
                className="flex gap-4 flex-wrap"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg shadow-lg shadow-purple-500/30"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    {t('ctaInvite')}
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-purple-300 hover:bg-purple-50 px-8 py-6 text-lg dark:border-purple-700 dark:hover:bg-purple-900/50"
                  >
                    {t('ctaLearnMore')}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <FloatingDisc />
              <MusicVisualizer />
              <motion.button
                className="mt-8 w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-white" />
                ) : (
                  <Play className="w-8 h-8 text-white" />
                )}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              {t('featuresTitle')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t('featuresSubtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Volume2}
              title={t('featureHighQuality')}
              desc={t('featureHighQualityDesc')}
            />
            <FeatureCard
              icon={ListMusic}
              title={t('featurePlaylists')}
              desc={t('featurePlaylistsDesc')}
            />
            <FeatureCard
              icon={Search}
              title={t('featureSearch')}
              desc={t('featureSearchDesc')}
            />
            <FeatureCard
              icon={Radio}
              title={t('featureRadio')}
              desc={t('featureRadioDesc')}
            />
            <FeatureCard
              icon={Music}
              title={t('featureLyrics')}
              desc={t('featureLyricsDesc')}
            />
            <FeatureCard
              icon={Server}
              title={t('featureMultiServer')}
              desc={t('featureMultiServerDesc')}
            />
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section id="commands" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              {t('commandsTitle')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t('commandsSubtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <CommandCard
              command={t('commandPlay')}
              desc={t('commandPlayDesc')}
            />
            <CommandCard
              command={t('commandSkip')}
              desc={t('commandSkipDesc')}
            />
            <CommandCard
              command={t('commandPause')}
              desc={t('commandPauseDesc')}
            />
            <CommandCard
              command={t('commandResume')}
              desc={t('commandResumeDesc')}
            />
            <CommandCard
              command={t('commandQueue')}
              desc={t('commandQueueDesc')}
            />
            <CommandCard
              command={t('commandVolume')}
              desc={t('commandVolumeDesc')}
            />
            <CommandCard
              command={t('commandShuffle')}
              desc={t('commandShuffleDesc')}
            />
            <CommandCard
              command={t('commandClear')}
              desc={t('commandClearDesc')}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4">{t('aboutTitle')}</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">{t('aboutDescription')}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: '10K+', label: t('statsServers'), icon: Server },
              { value: '500K+', label: t('statsUsers'), icon: Users },
              { value: '1M+', label: t('statsSongs'), icon: Music },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <stat.icon className="w-10 h-10" />
                </div>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Disc className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold">Maya Bot</span>
            </div>
            <div className="flex gap-6 text-gray-400">
              <a href="/tos" className="hover:text-white transition-colors">
                {t('footerTerms')}
              </a>
              <a href="/privacy" className="hover:text-white transition-colors">
                {t('footerPrivacy')}
              </a>
              <a href="https://discord.gg/TyQbkCVPr6" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                {t('footerSupport')}
              </a>
            </div>
          </div>
          <motion.div
            className="text-center mt-8 text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2026 Maya Bot. {t('footerRights')}
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
