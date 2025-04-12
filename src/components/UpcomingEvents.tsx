
import { useState } from "react";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Sample upcoming events data
const upcomingEvents = [
  {
    id: 1,
    title: "CS:GO Tournament",
    date: "May 20, 2025",
    time: "2:00 PM",
    deadline: "May 15, 2025",
    image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&q=80&w=1773",
    description: "Join our premier Counter-Strike: Global Offensive tournament and compete for awesome prizes and campus-wide recognition!",
    registrationLink: "https://forms.google.com/csgo-tournament"
  },
  {
    id: 2,
    title: "Game Art Workshop",
    date: "June 5, 2025",
    time: "11:00 AM",
    deadline: "June 1, 2025",
    image: "https://images.unsplash.com/photo-1580327332925-a10e6cb11baa?auto=format&fit=crop&q=80&w=1770",
    description: "Learn the fundamentals of game art design in this hands-on workshop led by industry professionals.",
    registrationLink: "https://forms.google.com/game-art-workshop"
  },
  {
    id: 3,
    title: "Mobile Gaming League",
    date: "July 10, 2025",
    time: "4:00 PM",
    deadline: "July 5, 2025",
    image: "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?auto=format&fit=crop&q=80&w=1909",
    description: "Showcase your mobile gaming skills in this multi-game tournament featuring PUBG Mobile, CoD Mobile, and more!",
    registrationLink: "https://forms.google.com/mobile-gaming-league"
  }
];

const UpcomingEvents = () => {
  const handleRegister = (event) => {
    window.open(event.registrationLink, "_blank");
    toast({
      title: "Registration Link Opened",
      description: `You're registering for ${event.title}`,
      duration: 3000,
    });
  };

  return (
    <div className="py-10">
      <h3 className="section-title">Upcoming Events</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEvents.map((event) => (
          <div 
            key={event.id} 
            className="gaming-card group relative overflow-hidden"
          >
            <div className="absolute inset-0 -z-10">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover opacity-20 filter blur-sm"
              />
              <div className="absolute inset-0 bg-gaming-dark bg-opacity-70"></div>
            </div>
            
            <div className="h-full flex flex-col">
              <h4 className="font-orbitron text-xl text-white mb-3 group-hover:text-neon-green transition-colors">
                {event.title}
              </h4>
              
              <div className="flex items-center text-gray-300 text-sm mb-2">
                <Calendar size={16} className="mr-1 text-neon-green" />
                <span>{event.date}</span>
                <span className="mx-2">•</span>
                <Clock size={16} className="mr-1 text-neon-green" />
                <span>{event.time}</span>
              </div>
              
              <p className="text-gray-400 text-sm mb-2">
                Registration Deadline: {event.deadline}
              </p>
              
              <p className="text-gray-300 mb-6 flex-grow">{event.description}</p>
              
              <button 
                className="gaming-button w-full mt-auto"
                onClick={() => handleRegister(event)}
              >
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
