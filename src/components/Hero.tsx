
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import athenaLogo from '../assets/athena-logo.png'; // We'll create a placeholder logo

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mount
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-2 opacity-10">
        {Array.from({ length: 144 }).map((_, index) => (
          <div 
            key={index} 
            className={`border border-neon-green ${
              Math.random() > 0.9 ? 'bg-neon-green bg-opacity-20' : ''
            }`}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 z-10 py-20 md:py-0">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo */}
          <div className={`mb-8 transition-all duration-1500 transform ${isLoaded ? 'animate-logo-zoom' : 'opacity-0 scale-95'}`}>
            <img 
              src={athenaLogo} 
              alt="Athena Gaming Society Logo" 
              className="h-56 md:h-56 animate-pulse-glow rounded-full"
            />
          </div>
          
          {/* Main title */}
          <h1 className={`font-audiowide text-3xl md:text-5xl text-white mb-4 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'
          }`}>
            Welcome to <span className="neon-text">ATHENA</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className={`font-orbitron text-xl md:text-2xl text-gray-300 mb-6 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'
          }`}>
            Gaming Society of BVCOE
          </h2>
          
          {/* Tagline */}
          <p className={`text-md md:text-lg text-neon-green font-orbitron mb-8 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'
          }`}>
            Unleash Your Inner Gamer. Compete. Collaborate. Conquer.
          </p>
          
          {/* Description */}
          <div className={`max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-900 ${
            isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Athena is the official technical gaming society of Bhartiya Vidyapeeth College of Engineering,
              dedicated to nurturing gaming talent and providing a platform for students
              to showcase their skills in competitive gaming environments.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Through tournaments, workshops, and collaborative events, we're building
              a community of passionate gamers ready to make their mark in the gaming world.
            </p>
            <p className="text-gray-300 leading-relaxed">
            To become the leading collegiate gaming society in India, creating opportunities for students to excel in esports while developing valuable skills in leadership, teamwork, and event management.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-1100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Link to="/events">
  <button className="gaming-button animate-pulse-glow">
    Explore Events
  </button>
</Link>

          </div>
        </div>
      </div>
      
      {/* Animated accents */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gaming-dark to-transparent"></div>
      
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neon-green rounded-full filter blur-[100px] opacity-20 animate-float"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-green rounded-full filter blur-[100px] opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
