import React from 'react';
import { BookOpen, Video, FileText, Code } from 'lucide-react';

const Learning = () => {
  const resources = [
    {
      category: "Tutorials",
      title: "Getting Started with RaySync",
      desc: "A comprehensive guide to integrating our API into your applications.",
      icon: <Code size={32} />,
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      category: "Video Course",
      title: "Mastering Cloud Architecture",
      desc: "Learn how to build scalable systems with our expert-led video series.",
      icon: <Video size={32} />,
      color: "text-red-400",
      bg: "bg-red-400/10"
    },
    {
      category: "Documentation",
      title: "API Reference",
      desc: "Detailed documentation for all our endpoints and SDKs.",
      icon: <FileText size={32} />,
      color: "text-green-400",
      bg: "bg-green-400/10"
    },
    {
      category: "E-Book",
      title: "The Future of AI",
      desc: "Download our latest whitepaper on the trajectory of artificial intelligence.",
      icon: <BookOpen size={32} />,
      color: "text-purple-400",
      bg: "bg-purple-400/10"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-['Orbitron'] tracking-wider">
            Learning <span className="text-[#FFD54F]">Hub</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Expand your knowledge with our curated resources, tutorials, and guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((item, index) => (
                <div 
                    key={index} 
                    className="group flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#FFD54F]/30 transition-all duration-300 cursor-pointer"
                >
                    <div className={`p-4 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                    </div>
                    <div>
                        <span className={`text-xs font-bold uppercase tracking-wider mb-2 block ${item.color}`}>
                            {item.category}
                        </span>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-[#FFD54F] transition-colors font-['Orbitron']">
                            {item.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-gradient-to-r from-[#FFD54F]/20 to-transparent border border-[#FFD54F]/30 rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 mix-blend-overlay"></div> 
            {/* Removed missing bg-[url('/noise.png')] */}
            <h2 className="text-3xl font-bold mb-4 font-['Orbitron']">Stay Updated</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Join 10,000+ developers getting the latest tech news and tutorials delivered to their inbox.
            </p>
            <form className="max-w-md mx-auto flex gap-2">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 bg-black/50 border border-white/20 rounded-full px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD54F]"
                />
                <button className="bg-[#FFD54F] text-black font-bold px-8 py-3 rounded-full hover:bg-[#ffe082] transition-colors">
                    Subscribe
                </button>
            </form>
        </div>

      </div>
    </div>
  );
};

export default Learning;
