
import PastEvents from "@/components/PastEvents";
import UpcomingEvents from "@/components/UpcomingEvents";

const Events = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-orbitron text-center text-white mb-2">
          Game <span className="neon-text">Events</span>
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          Join our community events, tournaments, and workshops to level up your gaming skills
          and connect with fellow gamers.
        </p>
        
        <UpcomingEvents />
        
        <div className="my-16 border-t border-gaming-gray"></div>
        
        <PastEvents />
      </div>
    </div>
  );
};

export default Events;
