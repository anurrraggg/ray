"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingCart, User, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (pathname !== "/") {
      router.push("/");
      // Ideally we should wait for navigation to complete, but setTimeout is a simple workaround
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
             element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
         window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "Home", path: "/", type: "route" },
    { name: "Products", path: "/products", type: "route" },
    { name: "About Us", path: "/about", type: "route" },
    { name: "Learning", path: "/learning", type: "route" },
    { name: "Services", path: "/services", type: "route" },
    { name: "Contact", path: "/contact", type: "route" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-white/5 ${
        isScrolled || mobileMenuOpen
          ? "bg-black/90 backdrop-blur-xl py-4 shadow-lg shadow-black/50"
          : "bg-transparent py-6"
      }`}
    >
      {/* Border Beam Animation */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
        <div className="absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-border-beam opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-10">
        {/* Left - Logo with Shimmer */}
        <Link href="/" className="relative flex flex-col items-start group z-50"> 
          <div className="relative overflow-hidden">
            <motion.div
                className="text-white font-black text-2xl tracking-tight leading-none font-['Orbitron'] relative z-10 transition-colors duration-300 group-hover:text-amber-500"
                whileHover={{ textShadow: "0 0 15px rgba(245,158,11,0.5)" }}
            >
                RAYSYNC
            </motion.div>
            {/* Shimmer Effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12"
                initial={{ x: "-150%" }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </div>

          <motion.div
            className="w-full h-[1px] bg-white/30 my-1 group-hover:bg-amber-500 origin-left"
            initial={{ scaleX: 0.5 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />

          <div className="text-[10px] text-white/60 tracking-[0.35em] font-light transition-colors duration-300 group-hover:text-amber-500">
            INNOVATION
          </div>
        </Link>


        {/* Middle - Navigation Links (Desktop Refined) */}
        <ul className="hidden md:flex items-center gap-10 text-white font-medium">
          {navLinks.map((item) => {
             const isActive = pathname === item.path;
             return (
                <li key={item.name} className="relative group">
                {item.type === "scroll" ? (
                    <a
                    href={`#${item.path}`}
                    onClick={(e) => handleNavigation(e, item.path)}
                    className={`relative z-10 text-sm font-medium tracking-wide transition-colors duration-300 ${isActive ? "text-amber-500" : "text-gray-300 group-hover:text-white"}`}
                    >
                    {item.name}
                    </a>
                ) : (
                    <Link
                    href={item.path}
                    className={`relative z-10 text-sm font-medium tracking-wide transition-colors duration-300 ${isActive ? "text-amber-500" : "text-gray-300 group-hover:text-white"}`}
                    >
                    {item.name}
                    </Link>
                )}
                
                {/* Magnetic Glow Background (Intensified) */}
                <div className="absolute inset-0 -inset-x-4 -inset-y-2 bg-amber-500/0 group-hover:bg-amber-500/10 rounded-lg blur-md transition-colors duration-300 -z-0" />
                
                {/* Center-Out Underline */}
                <span className={`absolute left-1/2 -bottom-1 h-[2px] bg-amber-500 transition-all duration-300 -translate-x-1/2 rounded-full ${isActive ? "w-full shadow-[0_0_10px_rgba(245,158,11,0.5)]" : "w-0 group-hover:w-full"}`}></span>
                
                {/* Text Glow for Active/Hover */}
                <span className={`absolute inset-0 blur-lg bg-amber-500/20 rounded-full opacity-0 pointer-events-none transition-opacity duration-300 ${isActive ? "opacity-100" : "group-hover:opacity-100"}`}></span>
                </li>
             );
          })}
        </ul>

        {/* Right - Icons & Mobile Menu */}
        <div className="flex items-center gap-4 md:gap-6 text-white z-50">
          <motion.button 
            whileHover={{ scale: 1.1, color: "#F59E0B" }}
            className="flex items-center gap-2 transition-colors hidden sm:flex group"
          >
            <User size={20} className="group-hover:fill-amber-500/20" />
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.1, color: "#F59E0B" }}
            className="relative transition-colors group"
          >
            <ShoppingCart size={22} className="group-hover:fill-amber-500/20" />
            <span className="absolute -top-2 -right-2 bg-amber-500 text-black text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-[0_0_10px_rgba(245,158,11,0.5)]">
              2
            </span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-amber-500 transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                   <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                        <X size={28} />
                   </motion.div>
                ) : (
                    <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
                        <Menu size={28} />
                    </motion.div>
                )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Glass Panel Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-[100dvh] bg-black/95 backdrop-blur-3xl z-40 flex flex-col pt-28 px-8 pointer-events-auto md:hidden overflow-y-auto"
          >
            <motion.ul 
                className="flex flex-col gap-8"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                        opacity: 1, 
                        transition: { staggerChildren: 0.08 } 
                    }
                }}
            >
                {navLinks.map((item) => (
                    <motion.li 
                        key={item.name}
                        variants={{
                            hidden: { opacity: 0, x: -30 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        className="border-b border-white/5 pb-4 last:border-none"
                    >
                    {item.type === "scroll" ? (
                        <a
                        href={`#${item.path}`}
                        onClick={(e) => handleNavigation(e, item.path)}
                        className="text-3xl font-light hover:text-amber-500 transition-colors flex items-center justify-between group"
                        >
                        {item.name}
                        <ChevronRight className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-amber-500" />
                        </a>
                    ) : (
                        <Link
                        href={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-3xl font-light hover:text-amber-500 transition-colors flex items-center justify-between group ${pathname === item.path ? "text-amber-500 font-normal" : "text-white"}`}
                        >
                        {item.name}
                         <ChevronRight className={`opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-amber-500 ${pathname === item.path ? "opacity-100 translate-x-0" : ""}`} />
                        </Link>
                    )}
                    </motion.li>
                ))}
            </motion.ul>
            
            <motion.div 
                className="mt-auto mb-10 border-t border-white/10 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <p className="text-zinc-500 text-sm mb-6 uppercase tracking-widest">Connect with us</p>
                <div className="flex gap-8 text-zinc-300">
                    <a href="#" className="hover:text-amber-500 transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-amber-500 transition-colors">Twitter</a>
                    <a href="#" className="hover:text-amber-500 transition-colors">Instagram</a>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
