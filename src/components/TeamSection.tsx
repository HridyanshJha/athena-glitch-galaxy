
import { useState } from "react";
import { Linkedin, Instagram } from "lucide-react";

// Updated team data with two heads per department
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
  departments: [
    {
      id: 1,
      name: "Technical",
      heads: [
        {
          id: 1,
          name: "Arjun Reddy",
          role: "Technical Head",
          description: "Oversees all technical aspects of events and competitions",
          linkedin: "https://linkedin.com/in/arjun-reddy",
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=2070"
        },
        {
          id: 2,
          name: "Sneha Rao",
          role: "Technical Head",
          description: "Manages technology infrastructure and gaming servers",
          linkedin: "https://linkedin.com/in/sneha-rao",
          image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1974"
        }
      ],
      executives: ["Vikram Shah", "Nisha Gupta", "Rohan Das"]
    },
    {
      id: 2,
      name: "Design",
      heads: [
        {
          id: 1,
          name: "Sara Mehta",
          role: "Design Lead",
          description: "Manages branding, graphics and creative direction",
          linkedin: "https://linkedin.com/in/sara-mehta",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
        },
        {
          id: 2,
          name: "Dev Kapoor",
          role: "Design Lead",
          description: "Specializes in UI/UX for gaming interfaces and posters",
          linkedin: "https://linkedin.com/in/dev-kapoor",
          image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=2070"
        }
      ],
      executives: ["Jay Patel", "Sanjana Roy", "Karan Soni"]
    },
    {
      id: 3,
      name: "Event",
      heads: [
        {
          id: 1,
          name: "Vivek Joshi",
          role: "Event Coordinator",
          description: "Plans and executes all gaming events and workshops",
          linkedin: "https://linkedin.com/in/vivek-joshi",
          image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=2070"
        },
        {
          id: 2,
          name: "Anita Reddy",
          role: "Event Coordinator",
          description: "Manages logistics and participant registration",
          linkedin: "https://linkedin.com/in/anita-reddy",
          image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=2071"
        }
      ],
      executives: ["Meera Kapoor", "Diya Sharma", "Rajat Verma"]
    },
    {
      id: 4,
      name: "Sponsorship",
      heads: [
        {
          id: 1,
          name: "Neha Khanna",
          role: "Sponsorship Head",
          description: "Manages partnerships and sponsorships for events",
          linkedin: "https://linkedin.com/in/neha-khanna",
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2070"
        },
        {
          id: 2,
          name: "Raj Malhotra",
          role: "Sponsorship Head",
          description: "Negotiates deals and handles sponsor relations",
          linkedin: "https://linkedin.com/in/raj-malhotra",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1974"
        }
      ],
      executives: ["Amit Singh", "Riya Desai"]
    },
    {
      id: 5,
      name: "Media",
      heads: [
        {
          id: 1,
          name: "Kunal Mehra",
          role: "Video Editor Head",
          description: "Creates and directs all video content for social media",
          linkedin: "https://linkedin.com/in/kunal-mehra",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2070"
        },
        {
          id: 2,
          name: "Ritika Sharma",
          role: "Social Media Head",
          description: "Manages social media presence and content strategy",
          linkedin: "https://linkedin.com/in/ritika-sharma",
          image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=2070"
        }
      ],
      executives: ["Aishwarya Rao", "Tarun Malhotra"]
    }
  ]
};

const TeamSection = () => {
  const [expandedDept, setExpandedDept] = useState(null);

  return (
    <>
      {/* Mentors Section */}
      <div className="mb-16">
        <h3 className="section-title">Mentors</h3>
        <div className="flex flex-wrap justify-center">
          {teamData.mentors.map((mentor) => (
            <div key={mentor.id} className="gaming-card w-full md:w-96 mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-2 border-neon-green shadow-lg">
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
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 border-2 border-neon-green shadow-lg">
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

      {/* Departments & Heads Section */}
      <div>
        <h3 className="section-title">Departments & Heads</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.departments.map((dept) => (
            <div 
              key={dept.id} 
              className="gaming-card hover:transform hover:scale-[1.02]"
            >
              <h4 className="font-orbitron text-lg text-white mb-3">{dept.name} Department</h4>
              
              <div className="space-y-4 mb-4">
                {dept.heads.map((head) => (
                  <div key={head.id} className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-neon-green shadow-lg">
                      <img 
                        src={head.image} 
                        alt={head.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-orbitron text-md text-white mb-1">{head.name}</h5>
                      <p className="text-neon-green text-xs">{head.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-300 text-sm mb-4">{dept.heads[0].description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-3">
                  {dept.heads.map((head) => (
                    <a 
                      key={head.id}
                      href={head.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-green transition-colors"
                      aria-label={`${head.name}'s LinkedIn`}
                    >
                      <Linkedin size={18} />
                    </a>
                  ))}
                </div>
                
                <button 
                  className="text-sm text-neon-green hover:underline"
                  onClick={() => setExpandedDept(expandedDept === dept.id ? null : dept.id)}
                >
                  {expandedDept === dept.id ? "Hide Team" : "Show Team"}
                </button>
              </div>
              
              {expandedDept === dept.id && (
                <div className="mt-2 pt-2 border-t border-gaming-gray animate-accordion-down">
                  <h5 className="text-sm text-gray-400 mb-2">Executive Team:</h5>
                  <ul className="space-y-1">
                    {dept.executives.map((executive, idx) => (
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
