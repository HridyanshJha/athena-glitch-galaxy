
import { useState } from "react";
import { Linkedin, Instagram } from "lucide-react";

// Updated team data with two heads per department
const teamData = {
  mentors: [
    {
      id: 1,
      name: "Prof. Suman Yadav",
      designation: "Faculty Advisor",
      bio: "Associate Professor with 10+ years of experience in game development and Electronics education.",
      linkedin: "#",
      image: "/src/assets/suman_maam.jpg"
    }
  ],
  leadership: [
    {
      id: 1,
      name: "Kshitiz Gaur",
      role: "President",
      bio: "Computer Science senior with a passion for game development and competitive gaming.",
      linkedin: "https://www.linkedin.com/in/kshitiz-gaur-3b03ba241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "https://www.instagram.com/_kshitiz_13?igsh=a29sMG56cjVtZ2tj",
      image: "/src/assets/images/Kshitiz gaur.jpg"
    },
    {
      id: 2,
      name: "Abhisar Chaudhary",
      role: "Vice President",
      bio: "Game design enthusiast with experience in organizing large-scale gaming events.",
      linkedin: "https://www.linkedin.com/in/abhisar-choudhary-1b6917316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "#https://www.instagram.com/abb.ysar?igsh=aDVuNXEzZGpkaGpz",
      image: "/src/assets/images/Abhisar.png"
    },
    {
      id: 3,
      name: "Aryan Baghel",
      role: "General Secratary",
      bio: "Organized and efficient communication specialist with a love for esports.",
      linkedin: "https://www.linkedin.com/in/aryan-baghel-718816285",
      instagram: "https://www.instagram.com/aryan_baghel97?igsh=MWIycWI5dnoyZW5lOA==",
      image: "/src/assets/images/Aryan Baghel .jpg"
    },
    {
      id: 4,
      name: "Hridyansh Jha",
      role: "Treasurer",
      bio: "Finance student with a knack for resource management and budgeting for events.",
      linkedin: "https://www.linkedin.com/in/hridyansh-j-b8a165260",
      instagram: "#https://www.instagram.com/hridyansh.jha?igsh=dG5idmEwNnh1YW5w",
      image: "/src/assets/images/MYPIC.jpg"
    },
    {
      id: 4,
      name: "Nipun Vasistha",
      role: "Joint Secretary",
      bio: "Supporting events, sponsorships, and content teams to maintain efficiency. Keeping the gaming community engaged and active.",
      linkedin: "https://www.linkedin.com/in/hridyansh-j-b8a165260",
      instagram: "#https://www.instagram.com/hridyansh.jha?igsh=dG5idmEwNnh1YW5w",
      image: "/src/assets/images/Nipun.jpg"
    }
  ],
  departments: [
    {
      id: 1,
      name: "Technical",
      heads: [
        {
          id: 1,
          name: "Aditya Gautam",
          role: "Technical & Game Development Head",
          description: "Oversees all technical aspects of events and competitions",
          linkedin: "#",
          image: "/src/assets/images/Heads/Aditya.jpg"
        },
        {
          id: 2,
          name: "Diptanshu",
          role: "Technical Head",
          description: "Manages technology infrastructure and gaming servers",
          linkedin: "#",
          image: "/src/assets/images/Heads/diptanshu EM head.jpg"
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
          name: "Shashank Jha",
          role: "Design Head",
          description: "Manages branding, graphics and creative direction",
          linkedin: "#",
          image: "/src/assets/images/Heads/SHASHANK Jha design head.jpg"
        },
        {
          id: 2,
          name: "Aadarsh Chaudhary",
          role: "Design Lead",
          description: "Specializes in UI/UX for gaming interfaces and posters",
          linkedin: "#",
          image: "/src/assets/images/Heads/Aadarsh Chaudhary Head.jpg"
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
          name: "Anirudh Goel",
          role: "Event Management Head",
          description: "Plans and executes all gaming events and workshops",
          linkedin: "#",
          image: "/src/assets/images/Heads/Anirudh.png"
        },
        {
          id: 2,
          name: "Sahil Sharma",
          role: "Event Management Head",
          description: "Manages logistics and participant registration",
          linkedin: "#",
          image: "/src/assets/images/Heads/Sahil Sharma .jpg"
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
          name: "Khushi Khanna",
          role: "Sponsorship & Outreach Head",
          description: "Manages partnerships and sponsorships for events",
          linkedin: "#",
          image: "/src/assets/images/Heads/Khushi khanna.png"
        },
        {
          id: 2,
          name: "Kartik Chhabara",
          role: "Sponsorship & Outreach Head",
          description: "Negotiates deals and handles sponsor relations",
          linkedin: "#",
          image: "/src/assets/images/Heads/Kartik.png"
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
          name: "Somya Sharma",
          role: "Social Media Head",
          description: "Creates and directs all video content for social media",
          linkedin: "#",
          image: "/src/assets/images/Heads/Somya SM head.jpg"
        },
        {
          id: 2,
          name: "Krish Mutreja",
          role: "Social Media Head",
          description: "Manages social media presence and content strategy",
          linkedin: "#",
          image: "/src/assets/images/Heads/sm head .jpg"
        }
      ],
      executives: ["Aishwarya Rao", "Tarun Malhotra"]
    },
    
    {
      id: 6,
      name: "Content",
      heads: [
        {
          id: 1,
          name: "Nitya Mahajan",
          role: "Content Head",
          description: "Writes articles and manages blog content for the community",
          linkedin: "#",
          image: "/src/assets/images/Heads/Nitya Mahajan.PNG"
        },
        {
          id: 2,
          name: "Aditya Sharma",
          role: "Content Head",
          description: "Creates engaging content for newsletters and social media",
          linkedin: "#",
          image: "/src/assets/images/Heads/Aditya sharma.jpg"
        }
      ],
      executives: ["Nikita Singh", "Rahul Yadav"]
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
