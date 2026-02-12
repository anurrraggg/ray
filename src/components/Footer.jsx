import React from 'react';
import Link from 'next/link';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/raysync-innovation-llp', 
      label: 'LinkedIn' 
    }
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Learning", path: "/learning" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "IoT Solutions", path: "/services#iot" },
    { name: "Smart Infrastructure", path: "/services#infrastructure" },
    { name: "Industrial Monitoring", path: "/services#industrial" },
    { name: "STEM Innovation", path: "/learning" },
  ];

  return (
    <footer className="w-full bg-black text-zinc-400 pt-20 pb-10 border-t border-zinc-800 relative overflow-hidden font-sans">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-6">
            <Link href="/" className="relative flex flex-col items-start group w-fit">
                <div className="text-white font-black text-2xl tracking-tight leading-none transition-colors duration-300 font-['Orbitron']">
                    RAYSYNC <span className="text-amber-500">INNOVATION</span>
                </div>
                <div className="text-[10px] text-zinc-500 tracking-[0.2em] font-medium mt-2 uppercase">
                    Ideas. Innovation. Impact.
                </div>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                Specializing in intelligent IoT and AI-powered solutions for smart infrastructure, industrial monitoring, and STEM innovation.
            </p>
            <div className="flex gap-4 mt-2">
                {socialLinks.map((social) => (
                    <a 
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-zinc-800 text-zinc-400 hover:text-amber-500 hover:border-amber-500/50 transition-all duration-300 hover:bg-amber-500/10"
                        aria-label={social.label}
                    >
                        <social.icon size={18} />
                    </a>
                ))}
            </div>
        </div>

        {/* Quick Links */}
        <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-2 font-['Orbitron']">
                Company
            </h4>
            <ul className="space-y-3 text-sm">
                {quickLinks.map((link) => (
                    <li key={link.name}>
                        <Link 
                            href={link.path} 
                            className="text-zinc-500 hover:text-amber-500 transition-colors flex items-center gap-2 group w-fit"
                        >
                            <span className="w-0 group-hover:w-1.5 h-[1px] bg-amber-500 transition-all duration-300"></span>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        {/* Services */}
        <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-2 font-['Orbitron']">
                Solutions
            </h4>
            <ul className="space-y-3 text-sm">
                {services.map((service) => (
                    <li key={service.name}>
                        <Link 
                            href={service.path}
                            className="text-zinc-500 hover:text-amber-500 transition-colors block w-fit"
                        >
                            {service.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        {/* Contact info */}
        <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-2 font-['Orbitron']">
                Contact
            </h4>
            <ul className="space-y-4 text-sm text-zinc-500">
                <li className="flex items-start gap-3 group">
                    <MapPin className="w-5 h-5 text-amber-500/80 shrink-0 mt-0.5 group-hover:text-amber-500 transition-colors" />
                    <span className="group-hover:text-zinc-300 transition-colors">
                        104/431 P. Road,<br/>
                        Kanpur, Uttar Pradesh,<br/>
                        India
                    </span>
                </li>
                <li className="flex items-center gap-3 group">
                    <Mail className="w-5 h-5 text-amber-500/80 shrink-0 group-hover:text-amber-500 transition-colors" />
                    <a href="mailto:raysyncinnovation@gmail.com" className="hover:text-amber-500 transition-colors text-zinc-400">
                        raysyncinnovation@gmail.com
                    </a>
                </li>
                <li className="flex items-start gap-3 group">
                    <Phone className="w-5 h-5 text-amber-500/80 shrink-0 mt-0.5 group-hover:text-amber-500 transition-colors" />
                    <div className="flex flex-col gap-1">
                        <a href="tel:+919125910227" className="hover:text-amber-500 transition-colors text-zinc-400">
                            +91 91259 10227
                        </a>
                        <a href="tel:+917905655011" className="hover:text-amber-500 transition-colors text-zinc-400">
                            +91 79056 55011
                        </a>
                    </div>
                </li>
            </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-20 pt-8 border-t border-zinc-900 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-zinc-600">
        <p>
            &copy; {new Date().getFullYear()} RaySync Innovation LLP. All rights reserved.
        </p>
        <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
