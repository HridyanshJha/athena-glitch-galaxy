
import { useState } from "react";
import { Linkedin, Instagram } from "lucide-react";

// Sample team data
const teamData = {
  mentors: [
    {
      id: 1,
      name: "Prof. Ananya Sharma",
      designation: "Faculty Advisor",
      bio: "Associate Professor with 10+ years of experience in game development and computer science education.",
      linkedin: "https://linkedin.com/in/ananya-sharma",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1061"
    }
  ],
  leadership: [
    {
      id: 1,
      name: "Rahul Verma",
      role: "President",
      bio: "Computer Science senior with a passion for game development and competitive gaming.",
      linkedin: "https://linkedin.com/in/rahul-verma",
      instagram: "https://instagram.com/rahul.verma",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1974"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Vice President",
      bio: "Game design enthusiast with experience in organizing large-scale gaming events.",
      linkedin: "https://linkedin.com/in/priya-patel",
      instagram: "https://instagram.com/priya.patel",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&q=80&w=2070"
    },
    {
      id: 3,
      name: "Aditya Kumar",
      role: "Treasurer",
      bio: "Finance student with a knack for resource management and budgeting for events.",
      linkedin: "https://linkedin.com/in/aditya-kumar",
      instagram: "https://instagram.com/aditya.kumar",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974"
    },
    {
      id: 4,
      name: "Kavya Singh",
      role: "General Secretary",
      bio: "Organized and efficient communication specialist with a love for esports.",
      linkedin: "https://linkedin.com/in/kavya-singh",
      instagram: "https://instagram.com/kavya.singh",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976"
    }
  ],
  leads: [
    {
      id: 1,
      name: "Arjun Reddy",
      role: "Technical Head",
      description: "Oversees all technical aspects of events and competitions",
      linkedin: "https://linkedin.com/in/arjun-reddy",
      executives: ["Vikram Shah", "Nisha Gupta", "Rohan Das"]
    },
    {
      id: 2,
      name: "Sara Mehta",
      role: "Design Lead",
      description: "Manages branding, graphics and creative direction",
      linkedin: "https://linkedin.com/in/sara-mehta",
      executives: ["Jay Patel", "Sanjana Roy", "Karan Soni"]
    },
    {
      id: 3,
      name: "Vivek Joshi",
      role: "Event Coordinator",
      description: "Plans and executes all gaming events and workshops",
      linkedin: "https://linkedin.com/in/vivek-joshi",
      executives: ["Meera Kapoor", "Diya Sharma", "Rajat Verma"]
    },
    {
      id: 4,
      name: "Neha Khanna",
      role: "Sponsorship Head",
      description: "Manages partnerships and sponsorships for events",
      linkedin: "https://linkedin.com/in/neha-khanna",
      executives: ["Amit Singh", "Riya Desai"]
    },
    {
      id: 5,
      name: "Kunal Mehra",
      role: "Video Editor Head",
      description: "Creates and directs all video content for social media",
      linkedin: "https://linkedin.com/in/kunal-mehra",
      executives: ["Aishwarya Rao", "Tarun Malhotra"]
    }
  ]
};

const TeamSection = () => {
  const [expandedLead, setExpandedLead] = useState(null);

  return (
    <>
      {/* Mentors Section */}
      <div className="mb-16">
        <h3 className="section-title">Mentors</h3>
        <div className="flex flex-wrap justify-center">
          {teamData.mentors.map((mentor) => (
            <div key={mentor.id} className="gaming-card w-full md:w-96 mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-neon-green shadow-lg">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-orbitron text-xl text-white">{mentor.name}</h4>
                <p className="text-neon-green text-sm mb-2">{mentor.designation}</p>
                <p className="text-gray-300 text-center mb-4">{mentor.bio}</p>
                <div className="flex space-x-3">
                  <a 
                    href={mentor.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-neon-green transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Section */}
      <div className="mb-16">
        <h3 className="section-title">Leadership</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.leadership.map((leader) => (
            <div 
              key={leader.id} 
              className="gaming-card text-center hover:transform hover:scale-[1.03] transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-neon-green shadow-lg">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-orbitron text-lg text-white mb-1">{leader.name}</h4>
              <p className="text-neon-green text-sm mb-2">{leader.role}</p>
              <p className="text-gray-300 text-sm mb-4">{leader.bio}</p>
              <div className="flex justify-center space-x-3">
                <a 
                  href={leader.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-green transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href={leader.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-green transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leads & Heads Section */}
      <div>
        <h3 className="section-title">Leads & Heads</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.leads.map((lead) => (
            <div 
              key={lead.id} 
              className="gaming-card hover:transform hover:scale-[1.02]"
            >
              <h4 className="font-orbitron text-lg text-white mb-1">{lead.name}</h4>
              <p className="text-neon-green text-sm mb-2">{lead.role}</p>
              <p className="text-gray-300 text-sm mb-4">{lead.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <a 
                  href={lead.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-green transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                
                <button 
                  className="text-sm text-neon-green hover:underline"
                  onClick={() => setExpandedLead(expandedLead === lead.id ? null : lead.id)}
                >
                  {expandedLead === lead.id ? "Hide Team" : "Show Team"}
                </button>
              </div>
              
              {expandedLead === lead.id && (
                <div className="mt-2 pt-2 border-t border-gaming-gray animate-accordion-down">
                  <h5 className="text-sm text-gray-400 mb-2">Executive Team:</h5>
                  <ul className="space-y-1">
                    {lead.executives.map((executive, idx) => (
                      <li key={idx} className="text-gray-300 text-sm">
                        • {executive}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamSection;
