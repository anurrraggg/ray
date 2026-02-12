import React from 'react';
import { Trophy, Star, Award, TrendingUp } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy size={48} />,
      count: "50+",
      label: "Awards Won",
      desc: "Recognized excellence in digital innovation."
    },
    {
      icon: <Star size={48} />,
      count: "100%",
      label: "Client Satisfaction",
      desc: "Dedicated to exceeding expectations."
    },
    {
      icon: <Award size={48} />,
      count: "200+",
      label: "Projects Delivered",
      desc: "Successful deployments across various industries."
    },
    {
      icon: <TrendingUp size={48} />,
      count: "500%",
      label: "Growth Rate",
      desc: "Consistent year-over-year expansion."
    }
  ];

  return (
    <div id="achievements" className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-12 px-6 relative overflow-hidden flex flex-col justify-center">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-['Orbitron'] tracking-wider">
            Our <span className="text-[#FFD54F]">Achievements</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Milestones that mark our journey of excellence and dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {achievements.map((item, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 
                         hover:bg-white/10 hover:border-[#FFD54F]/50 transition-all duration-300
                         text-center hover:-translate-y-2 flex flex-col items-center"
            >
              <div className="text-[#FFD54F] mb-6 p-4 bg-[#FFD54F]/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-2 group-hover:text-[#FFD54F] transition-colors">
                {item.count}
              </h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-200">
                {item.label}
              </h3>
              
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
