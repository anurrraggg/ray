import React from 'react';
import { User, Users, Globe, Heart } from 'lucide-react';

const Impact = () => {
  return (
    <div id="impact" className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-12 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Orbitron'] tracking-wider">
            Our <span className="text-[#FFD54F]">Impact</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Driving positive change through technology and sustainable practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
             <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD54F] to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl h-full">
                    <h2 className="text-3xl font-bold mb-4">Empowering Communities</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        We believe in the power of technology to bridge gaps. Our initiatives have helped over 10,000 students gain access to digital learning resources, fostering a new generation of tech-savvy innovators.
                    </p>
                    <div className="flex items-center gap-4 text-[#FFD54F]">
                        <Users size={24} />
                        <span className="font-semibold">10,000+ Lives Touched</span>
                    </div>
                </div>
             </div>

             <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl h-full">
                    <h2 className="text-3xl font-bold mb-4">Sustainable Future</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        Sustainability is at our core. By optimizing cloud infrastructure and adopting green coding practices, we've reduced carbon footprints for our partners by an average of 30%.
                    </p>
                    <div className="flex items-center gap-4 text-green-400">
                        <Globe size={24} />
                        <span className="font-semibold">30% Carbon Reduction</span>
                    </div>
                </div>
             </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-[#FFD54F]/10 to-transparent opacity-50"></div>
             <Heart className="mx-auto text-red-500 mb-6 relative z-10" size={64} fill="currentColor" />
             <h2 className="text-3xl font-bold mb-4 relative z-10">Commitment to giving back</h2>
             <p className="text-gray-300 max-w-2xl mx-auto relative z-10">
                 We pledge 1% of our annual profits to support open-source projects and educational non-profits.
             </p>
        </div>

      </div>
    </div>
  );
};

export default Impact;
