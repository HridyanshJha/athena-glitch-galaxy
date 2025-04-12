
import { useState } from "react";
import { Calendar, ExternalLink, Image } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Sample past events data
const pastEvents = [
  {
    id: 1,
    title: "CodeMaster Tournament",
    date: "March 15, 2023",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070",
    description: "Our biggest competitive programming event of the year, bringing together the best coders from across the campus.",
    gallery: ["https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&q=80&w=1171", "https://images.unsplash.com/photo-1523843268911-45a882919fec?auto=format&fit=crop&q=80&w=1174"],
    externalLink: "https://codingcompetitions.withgoogle.com/codejam"
  },
  {
    id: 2,
    title: "Valorant Championship",
    date: "January 20, 2023",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=1776",
    description: "A fierce 5v5 tactical shooter tournament with teams competing for the ultimate campus champion title.",
    gallery: ["https://images.unsplash.com/photo-1576972405668-2d020a01cbfa?auto=format&fit=crop&q=80&w=2074", "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=2070"],
    externalLink: "https://playvalorant.com/"
  },
  {
    id: 3,
    title: "Game Dev Workshop",
    date: "November 10, 2022",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=2070",
    description: "A hands-on workshop teaching the fundamentals of game development using Unity, led by industry professionals.",
    gallery: ["https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&q=80&w=2070", "https://images.unsplash.com/photo-1548086396-2075d8322ebe?auto=format&fit=crop&q=80&w=1254"],
    externalLink: "https://unity.com/"
  }
];

const PastEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="py-10">
      <h3 className="section-title">Past Events</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pastEvents.map((event) => (
          <div 
            key={event.id} 
            className="gaming-card group hover:transform hover:scale-[1.02] hover:-translate-y-1"
          >
            <div className="relative h-48 mb-4 overflow-hidden rounded">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gaming-darker to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-orbitron text-lg line-clamp-1">{event.title}</h4>
                <div className="flex items-center text-gray-300 text-sm mt-1">
                  <Calendar size={14} className="mr-1" />
                  <span>{event.date}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm mb-4 line-clamp-2">{event.description}</p>
            
            <div className="flex justify-between items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <button 
                    className="flex items-center text-sm text-neon-green hover:text-white transition-colors"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <Image size={16} className="mr-1" />
                    View Gallery
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-gaming-dark border-gaming-gray max-w-3xl">
                  {selectedEvent && (
                    <div>
                      <h3 className="font-orbitron text-xl text-white mb-4">{selectedEvent.title} Gallery</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedEvent.gallery.map((img, idx) => (
                          <div key={idx} className="h-56 rounded overflow-hidden border border-gaming-gray">
                            <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
              
              <a 
                href={event.externalLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-400 hover:text-neon-green transition-colors"
              >
                <ExternalLink size={16} className="mr-1" />
                Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastEvents;
