import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

export const metadata = {
  title: "RaySync Innovation",
  description: "Intelligent IoT and AI-powered solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white overflow-x-hidden">
        <ClientLayout>
            {children}
        </ClientLayout>
      </body>
    </html>
  );
}
