
import { Instagram, Linkedin, Mail, MessageSquare } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gaming-dark py-10 border-t border-gaming-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center space-x-3">
            <Logo size="sm" />
            <div>
              <h3 className="font-audiowide text-xl text-white mb-2">
                ATHENA<span className="text-neon-green">.</span>
              </h3>
              <p className="text-sm text-gray-400">
                Official Technical Gaming Society of BVCOE
              </p>
            </div>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="mailto:athena@bvce.edu.in" 
              className="text-gray-400 hover:text-neon-green transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.instagram.com/athena_bvcoe?igsh=b21id29iMnZudmc2" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-neon-green transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/athena-bvcoe-a1603a2a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-neon-green transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://discord.gg/athena-bvce" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-neon-green transition-colors"
              aria-label="Discord"
            >
              <MessageSquare size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gaming-gray mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Athena Gaming Society. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Designed by <span className="text-neon-green">Athena Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
