import React, { useState } from 'react';
import { Moon, Star, Users, BookOpen, MessageSquare, TwitchIcon, ChevronDown, Shield, Trophy } from 'lucide-react';
import ServiceCalculator from './components/ServiceCalculator';
import TwitchEmbed from './components/TwitchEmbed';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';

function App() {
  const [activeService, setActiveService] = useState('elojob');

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
          style={{
            backgroundImage: "url('https://cdn.selectgame.net/wp-content/uploads/2024/08/League-of-Legends-Diana-Blood-Moon-Wallpaper-Cover-1200x675.webp')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900 z-1" />
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="flex items-center justify-center mb-6">
            <Moon className="w-12 h-12 text-purple-400 mr-3" />
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              JuninCWB
            </h1>
          </div>
          <p className="text-2xl mb-8 text-gray-300">Top 1 Challenger Diana desde Season 1</p>
          <div className="flex items-center justify-center space-x-4 mb-12">
            <Trophy className="w-6 h-6 text-yellow-400" />
            <span className="text-lg">Challenger desde 2011</span>
          </div>
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-purple-400" />
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-slate-800" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 'elojob', icon: Shield, title: 'EloJob' },
              { id: 'duoboost', icon: Users, title: 'Duo Boost' },
              { id: 'md5', icon: Star, title: 'MD5 (5v5)' },
              { id: 'coaching', icon: BookOpen, title: 'Coaching' }
            ].map(service => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`p-6 rounded-lg transition-all ${
                  activeService === service.id
                    ? 'bg-purple-600 shadow-lg shadow-purple-500/50'
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              >
                <service.icon className="w-8 h-8 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </button>
            ))}
          </div>

          <ServiceCalculator serviceType={activeService} />
        </div>
      </section>

      {/* Twitch Integration */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <TwitchIcon className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-4xl font-bold">Live Stream</h2>
          </div>
          <TwitchEmbed channel="junincwb" />
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Moon className="w-6 h-6 text-purple-400 mr-2" />
            <span className="text-xl font-bold">JuninCWB</span>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
