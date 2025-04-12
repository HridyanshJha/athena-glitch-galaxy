
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Events", path: "/events" },
    { title: "Team", path: "/team" },
    { title: "Join Us", path: "/join" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gaming-darker bg-opacity-90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 group"
        >
          <Logo size="sm" className="transition-all duration-300 group-hover:scale-110" />
          <span className="font-audiowide text-xl md:text-2xl text-white group-hover:text-neon-green transition-colors duration-300">
            ATHENA<span className="text-neon-green">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              className="font-orbitron text-sm uppercase tracking-wider text-white hover:text-neon-green transition-colors duration-300 relative group"
            >
              {link.title}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-neon-green transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white hover:text-neon-green transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-gaming-darker bg-opacity-95 backdrop-blur-md transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-60 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              className="font-orbitron text-sm uppercase tracking-wider text-white hover:text-neon-green transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
