"use client"
import { useEffect, useState } from "react";
import Blabla from "@/components/BlaBla";
import Downloads from "@/components/Downloads";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Delay to start the fade-in effect
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="contents">
            <Navbar />

            <div className="relative min-h-screen pt-16">
                <div className="flex flex-col items-center justify-center min-h-screen p-4 gap-12">
                    <div className={`w-full h-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <Hero />
                    </div>

                    <div className={`w-full h-full flex items-center justify-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <Downloads />
                    </div>

                    <div className={`w-full h-full flex flex-col items-center justify-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <Blabla />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
