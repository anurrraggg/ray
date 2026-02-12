"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    // Only show splash screen on home page or initial load if desired.
    // current logic: show only on home page reload, or once per session?
    // For simplicity based on request, let's show it on initial load of the app layout.
    // If user navigates around, we don't want to show it again and again ideally.
    // checking if session storage has 'splashShown'
    
    // For this specific request "add splash screen", usually implies app launch.
    // Let's force it for a brief moment on mount.
    
    const hasShown = sessionStorage.getItem("splashShown");
    if (hasShown) {
         setLoading(false);
    } else {
        // Wait for animation to finish
        // setLoading(false);
    }
  }, []);

  const handleSplashFinish = () => {
    setLoading(false);
    sessionStorage.setItem("splashShown", "true");
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <SplashScreen onFinish={handleSplashFinish} />}
      </AnimatePresence>
      
      {!loading && (
        <>
             <Navbar />
             <main className="min-h-screen">
                {children}
             </main>
             <Footer />
        </>
      )}
    </>
  );
}
