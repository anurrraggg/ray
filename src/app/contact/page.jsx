"use client";
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formState);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-zinc-100 pt-24 pb-12 px-6 relative overflow-hidden flex items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-yellow-400/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
            <h2 className="text-yellow-400 tracking-[0.5em] text-sm uppercase font-bold mb-4">GET IN TOUCH</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Orbitron'] tracking-wider text-white">
                Contact <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">RaySync</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Ready to start your next project? We are here to help you turn your vision into reality.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Cards - Left Column */}
            <div className="lg:col-span-1 space-y-6">
                {[
                    { icon: <Mail size={24} />, title: "Email", val1: "hello@raysync.com", val2: "support@raysync.com" },
                    { icon: <Phone size={24} />, title: "Phone", val1: "+1 (555) 123-4567", val2: "Mon-Fri, 9am-6pm" },
                    { icon: <MapPin size={24} />, title: "Office", val1: "123 Innovation Drive", val2: "Tech Valley, CA" }
                ].map((item, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                        className="group p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:bg-zinc-800/50 hover:border-yellow-400/30 transition-all duration-300 flex items-start gap-5 cursor-default shadow-lg hover:shadow-[0_0_20px_rgba(253,224,71,0.05)]"
                    >
                        <div className="p-3 bg-black/40 rounded-xl text-yellow-400 group-hover:scale-110 transition-transform duration-300 border border-zinc-700/50">
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-1 text-zinc-100 group-hover:text-yellow-400 transition-colors">{item.title}</h3>
                            <p className="text-zinc-400 text-sm">{item.val1}</p>
                            <p className="text-zinc-500 text-sm">{item.val2}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Form - Right Column (Spans 2) */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2 bg-zinc-900/30 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 md:p-10 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-wider text-zinc-500 font-bold ml-1">Name</label>
                            <input 
                              type="text" 
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              className="w-full bg-black/40 border border-zinc-800 rounded-xl px-4 py-4 text-zinc-200 focus:outline-none focus:border-yellow-400/50 focus:bg-zinc-900/60 transition-all placeholder-zinc-700 hover:border-zinc-700" 
                              placeholder="Your Name" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-wider text-zinc-500 font-bold ml-1">Subject</label>
                            <input 
                              type="text" 
                              name="subject"
                              value={formState.subject}
                              onChange={handleChange}
                              className="w-full bg-black/40 border border-zinc-800 rounded-xl px-4 py-4 text-zinc-200 focus:outline-none focus:border-yellow-400/50 focus:bg-zinc-900/60 transition-all placeholder-zinc-700 hover:border-zinc-700" 
                              placeholder="Project Inquiry" 
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-zinc-500 font-bold ml-1">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-zinc-800 rounded-xl px-4 py-4 text-zinc-200 focus:outline-none focus:border-yellow-400/50 focus:bg-zinc-900/60 transition-all placeholder-zinc-700 hover:border-zinc-700" 
                          placeholder="your@email.com" 
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-zinc-500 font-bold ml-1">Message</label>
                        <textarea 
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-zinc-800 rounded-xl px-4 py-4 text-zinc-200 focus:outline-none focus:border-yellow-400/50 focus:bg-zinc-900/60 transition-all placeholder-zinc-700 hover:border-zinc-700 h-40 resize-none" 
                          placeholder="Tell us how we can help..."
                        ></textarea>
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-4 rounded-xl shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-all flex items-center justify-center gap-3 uppercase tracking-wider"
                    >
                        <span>Send Message</span>
                        <Send size={18} />
                    </motion.button>
                </form>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
