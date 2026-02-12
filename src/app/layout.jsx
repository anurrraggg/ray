import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
    title: "RaySync Innovation",
    description: "Intelligent IoT and AI-powered solutions.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased bg-black text-white overflow-x-hidden">
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
