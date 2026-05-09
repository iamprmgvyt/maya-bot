'use client';

import type { Metadata } from "next";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Crown, Zap, Brain, Wrench, Globe, Heart } from 'lucide-react';
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

export const metadata: Metadata = {
  title: "Our Team - Maya Development Team | Maya Bot",
  description: "Meet the amazing people behind Maya Bot - Rizx, Emmu, Zyrax, prmgvyt, and the entire Maya Development Team working on your ultimate Discord music bot.",
  keywords: ["Maya Bot Team", "Maya Development Team", "Discord Bot Team", "Rizx", "Emmu", "Zyrax", "prmgvyt"],
};

export default function TeamPage() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

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
      {theme === 'dark' ? '☀️' : '🌙'}
    </Button>
  );

  const TeamSection = ({ title, members, icon: Icon, color }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {members.map((member: string, index: number) => (
          <motion.div
            key={member}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white/80 dark:bg-gray-800/80 dark:hover:border-purple-400 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">{member}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const teams = [
    {
      role: 'teamRoleOwner',
      members: ['Rizx', 'Emmu'],
      icon: Crown,
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    },
    {
      role: 'teamRoleCoOwner',
      members: ['Zyrax'],
      icon: Zap,
      color: 'bg-gradient-to-br from-blue-400 to-cyan-500',
    },
    {
      role: 'teamRoleDev',
      members: ['prmgvyt', 'shibin_hussain'],
      icon: Brain,
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
    },
    {
      role: 'teamRoleCoDev',
      members: ['Ramakrisha'],
      icon: Wrench,
      color: 'bg-gradient-to-br from-green-400 to-emerald-500',
    },
    {
      role: 'teamRoleNodeManager',
      members: ['Jinto'],
      icon: Globe,
      color: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    },
    {
      role: 'teamRoleSupporter',
      members: ['Dharmzzz', 'sharon__y'],
      icon: Heart,
      color: 'bg-gradient-to-br from-pink-400 to-rose-500',
    },
  ];

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
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              Maya Bot
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="hidden md:flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105 transition-all duration-300 mr-4"
            >
              {t('home')}
            </a>
            <div className="flex items-center gap-2">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg px-6 py-2">
              <Users className="w-4 h-4 mr-2" />
              {t('teamTitle')}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-8">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                👨‍💻 {t('teamTitle')}
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t('teamSubtitle')}
            </p>
          </motion.div>

          {/* Team Sections */}
          <div className="max-w-6xl mx-auto mt-16">
            {teams.map((team, index) => (
              <TeamSection
                key={team.role}
                title={t(team.role)}
                members={team.members}
                icon={team.icon}
                color={team.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-700 p-8">
              <CardContent>
                <div className="text-6xl mb-6">🎵</div>
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent mb-4">
                  {t('teamImageAlt')}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Users className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold">Maya Bot</span>
            </div>
            <div className="flex gap-6 text-gray-400">
              <a href="/" className="hover:text-white transition-colors">
                {t('home')}
              </a>
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
