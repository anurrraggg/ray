import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    {
      _id: 1,
      name: "RaySync Core",
      category: "Industrial IoT",
      description: "Our flagship AI processor, engineered for high-performance computing tasks and scalable machine learning infrastructure.",
      price: 85000,
      images: ["/images/p1.png"] 
    },
    {
      _id: 2,
      name: "RayGuard",
      category: "Safety",
      description: "Military-grade infrastructure protection. Deploy zero-trust architecture with autonomous threat neutralization.",
      price: 42000,
      images: ["/images/p2.png"]
    },
    {
      _id: 3,
      name: "RaySpeed",
      category: "Industrial IoT",
      description: "Global network acceleration grid. Eliminate latency and optimize data transfer protocols for mission-critical operations.",
      price: 25000,
      images: ["/images/p3.png"]
    },
     {
      _id: 4,
      name: "Smart Sensor L1",
      category: "Sensors",
      description: "Advanced environmental monitoring sensor with real-time data transmission.",
      price: 12500,
      images: ["/images/p4.png"]
    },
     {
      _id: 5,
      name: "DIY Robot Kit",
      category: "DIY Kits",
      description: "Complete robotics kit for STEM learning and prototyping.",
      price: 8999,
      images: ["/images/p5.png"]
    }
  ];

  return NextResponse.json({ products });
}
