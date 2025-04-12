
import { useState } from "react";
import { Instagram, Send } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Join = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    collegeId: "",
    department: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDepartmentChange = (value) => {
    setFormData((prev) => ({ ...prev, department: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Application Received!",
        description: "We'll get back to you soon about joining Athena.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        collegeId: "",
        department: "",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-orbitron text-center text-white mb-2">
          Join <span className="neon-text">The Squad</span>
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          Ready to level up? Become a part of Athena Gaming Society and help us build
          an amazing gaming community at BVCE.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="gaming-card mb-8">
            <h3 className="font-orbitron text-xl text-white mb-6">Registration Form</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="bg-gaming-accent border-gaming-gray text-white placeholder:text-gray-500"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="bg-gaming-accent border-gaming-gray text-white placeholder:text-gray-500"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="collegeId" className="text-white">College ID</Label>
                <Input
                  id="collegeId"
                  name="collegeId"
                  value={formData.collegeId}
                  onChange={handleChange}
                  placeholder="Enter your college ID"
                  required
                  className="bg-gaming-accent border-gaming-gray text-white placeholder:text-gray-500"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="department" className="text-white">Choose Department</Label>
                <Select 
                  value={formData.department} 
                  onValueChange={handleDepartmentChange}
                  required
                >
                  <SelectTrigger className="bg-gaming-accent border-gaming-gray text-white">
                    <SelectValue placeholder="Select a department" />
                  </SelectTrigger>
                  <SelectContent className="bg-gaming-dark border-gaming-gray text-white">
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="tech">Technical</SelectItem>
                    <SelectItem value="events">Events</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sponsorship">Sponsorship</SelectItem>
                    <SelectItem value="content">Content Creation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <button type="submit" className="gaming-button w-full flex justify-center items-center">
                <Send size={18} className="mr-2" />
                Submit Application
              </button>
            </form>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="https://chat.whatsapp.com/athena-gaming"
              target="_blank"
              rel="noopener noreferrer"
              className="gaming-card flex flex-col items-center text-center p-6 hover:neon-border"
            >
              <div className="w-16 h-16 rounded-full bg-gaming-green flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                  <path d="M9.5 15.5a5 5 0 0 0 7 0"></path>
                </svg>
              </div>
              <h4 className="font-orbitron text-white text-lg mb-2">Join WhatsApp Group</h4>
              <p className="text-gray-400 text-sm">Connect with current members and stay updated on daily activities</p>
            </a>
            
            <a 
              href="https://instagram.com/athena_bvce"
              target="_blank"
              rel="noopener noreferrer"
              className="gaming-card flex flex-col items-center text-center p-6 hover:neon-border"
            >
              <div className="w-16 h-16 rounded-full bg-gaming-green flex items-center justify-center mb-4">
                <Instagram size="28" className="text-white" />
              </div>
              <h4 className="font-orbitron text-white text-lg mb-2">Follow on Instagram</h4>
              <p className="text-gray-400 text-sm">Check out our latest events, achievements, and community highlights</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
