
import { useState } from "react";
import { Calendar, ExternalLink, Image } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Sample past events data
const pastEvents = [
  {
    id: 1,
    title: "Valorant Championship",
    date: "March 15, 2024",
    image: "/assets/images/Events/event9.jpg",
    description: "Our biggest competitive programming event of the year, bringing together the best coders from across the campus.",
    gallery: ["https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&q=80&w=1171", "https://images.unsplash.com/photo-1523843268911-45a882919fec?auto=format&fit=crop&q=80&w=1174"],
    externalLink: "https://www.instagram.com/reel/C4FavhCyCRn/?igsh=YTFwa25teGdrb2tj"
  },
  {
    id: 2,
    title: "BGMI Battle Royale Showdown",
    date: "January 20, 2024",
    image: "/assets/images/Events/event8.jpg",
    description: "A fierce 5v5 tactical shooter tournament with teams competing for the ultimate campus champion title.",
    gallery: ["https://images.unsplash.com/photo-1576972405668-2d020a01cbfa?auto=format&fit=crop&q=80&w=2074", "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=2070"],
    externalLink: "https://playvalorant.com/"
  },
  {
    id: 3,
    title: "Game Dev Workshop",
    date: "November 10, 2023",
    image: "/assets/images/Events/event7.jpg",
    description: "A hands-on workshop teaching the fundamentals of game development using Unity, led by industry professionals.",
    gallery: ["https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&q=80&w=2070", "https://images.unsplash.com/photo-1548086396-2075d8322ebe?auto=format&fit=crop&q=80&w=1254"],
    externalLink: "https://unity.com/"
  },
  {
    id: 4,
    title: "Minecraft Build Challenge",
    date: "October 5, 2023",
    image: "/assets/images/Events/event6.jpg",
    description: "A creative building competition where participants showcased their architectural and artistic skills within Minecraft.",
    gallery: ["https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&q=80&w=2070", "https://images.unsplash.com/photo-1639252794098-06f8cb064541?auto=format&fit=crop&q=80&w=2070"],
    externalLink: "https://www.instagram.com/reel/C4FavhCyCRn/?igsh=YTFwa25teGdrb2tj"
  },
  {
    id: 5,
    title: "eSports Boot Camp",
    date: "September 18, 2022",
    image: "/assets/images/Events/event5.jpg",
    description: "An intensive training program for aspiring eSports athletes, featuring coaching from professional players.",
    gallery: ["https://images.unsplash.com/photo-1560253023-3ec5085aaab8?auto=format&fit=crop&q=80&w=2070", "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=2057"],
    externalLink: "https://www.instagram.com/p/C3Vcs7KShTt/?img_index=4&igsh=MTFmYWY3cWg2cHNpNg=="
  },
  {
    id: 6,
    title: "Game Art Workshop",
    date: "August 12, 2022",
    image: "/assets/images/Events/event4.jpg",
    description: "A workshop focused on the artistic aspects of game development, including character design and environment creation.",
    gallery: ["https://images.unsplash.com/photo-1536164261511-3a17e671d380?auto=format&fit=crop&q=80&w=2070", "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&q=80&w=2064"],
    externalLink: "https://www.artstation.com/"
  },
  {
    id: 7,
    title: "Gaming Industry Career Fair",
    date: "July 25, 2022",
    image: "/assets/images/Events/Event3.jpg",
    description: "A networking event connecting students with professionals and companies from the gaming industry.",
    gallery: ["https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2069", "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=2071"],
    externalLink: "https://www.instagram.com/reel/CrX57Brs60p/?igsh=bGYwdG9pNjhzamk3"
  },
  {
    id: 8,
    title: "Retro Gaming Night",
    date: "June 8, 2022",
    image: "/assets/images/Events/event 2.jpg",
    description: "A nostalgic evening celebrating classic games from the 80s and 90s with tournaments and free play.",
    gallery: ["https://images.unsplash.com/photo-1579309401389-a2476dddf3d4?auto=format&fit=crop&q=80&w=2070", "https://images.unsplash.com/photo-1586182987320-4f376d39d787?auto=format&fit=crop&q=80&w=2068"],
    externalLink: "https://www.instagram.com/p/CqM_r2_JCuC/?igsh=eWlhM3NueDR5dmIz"
  },
  {
    id: 8,
    title: "FIFA World Cup",
    date: "June 8, 2022",
    image: "/assets/images/Events/event1.jpg",
    description: "A nostalgic evening celebrating classic games from the 80s and 90s with tournaments and free play.",
    gallery: ["https://images.unsplash.com/photo-1579309401389-a2476dddf3d4?auto=format&fit=crop&q=80&w=2070", "https://images.unsplash.com/photo-1586182987320-4f376d39d787?auto=format&fit=crop&q=80&w=2068"],
    externalLink: "https://www.instagram.com/p/CqM_oKhpdpp/?igsh=MXhxOGY3dWliZTd4eA=="
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
            <div className="relative h-80 mb-4 overflow-hidden rounded">
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

