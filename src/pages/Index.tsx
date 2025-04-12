
import Hero from "@/components/Hero";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/events" className="gaming-card hover:neon-border group">
            <h3 className="font-orbitron text-xl text-white mb-3 group-hover:text-neon-green transition-colors">
              Explore Events
            </h3>
            <p className="text-gray-300 mb-4">
              Discover our upcoming tournaments, workshops, and gaming meetups.
            </p>
            <div className="flex items-center text-neon-green">
              <span className="mr-2">View Events</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          
          <Link to="/team" className="gaming-card hover:neon-border group">
            <h3 className="font-orbitron text-xl text-white mb-3 group-hover:text-neon-green transition-colors">
              Meet Our Team
            </h3>
            <p className="text-gray-300 mb-4">
              Get to know the passionate gamers behind Athena Gaming Society.
            </p>
            <div className="flex items-center text-neon-green">
              <span className="mr-2">View Team</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          
          <Link to="/join" className="gaming-card hover:neon-border group">
            <h3 className="font-orbitron text-xl text-white mb-3 group-hover:text-neon-green transition-colors">
              Join Us
            </h3>
            <p className="text-gray-300 mb-4">
              Become a part of our gaming community and showcase your skills.
            </p>
            <div className="flex items-center text-neon-green">
              <span className="mr-2">Apply Now</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
