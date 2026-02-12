import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team = () => {
    // Placeholder team data - in a real app this might come from an API or config
    const teamMembers = [
        {
            name: "Anurag",
            role: "Founder & CEO",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anurag&backgroundColor=b6e3f4", 
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        {
            name: "Sarah Jenkins",
            role: "Chief Technology Officer",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=ffdfbf",
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        {
            name: "Michael Chen",
            role: "Lead Designer",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael&backgroundColor=c0aede",
            linkedin: "#",
            twitter: "#",
            github: "#"
        },
        {
            name: "Emily Davis",
            role: "Marketing Director",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily&backgroundColor=d1d4f9",
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    ];

  return (
    <div id="team" className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-12 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-0 right-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-['Orbitron'] tracking-wider">
            Meet the <span className="text-[#FFD54F]">Team</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The brilliant minds behind our innovation and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
                <div 
                    key={index} 
                    className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center 
                               hover:-translate-y-2 transition-transform duration-300 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FFD54F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#FFD54F]/20 group-hover:border-[#FFD54F] transition-colors duration-300">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h3 className="text-xl font-bold mb-1 font-['Orbitron'] tracking-wide group-hover:text-[#FFD54F] transition-colors">
                        {member.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">
                        {member.role}
                    </p>

                    <div className="flex justify-center gap-4 relative z-10">
                        <a href={member.linkedin} className="text-gray-400 hover:text-[#0077b5] transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                            <Linkedin size={20} />
                        </a>
                        <a href={member.twitter} className="text-gray-400 hover:text-[#1DA1F2] transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                            <Twitter size={20} />
                        </a>
                        <a href={member.github} className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
