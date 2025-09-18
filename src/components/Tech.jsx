import React from "react";
import TechTicker from "./other_components/TechTicker";
import TechScoll from "./other_components/TechScroll";

const tech = [
    { name: "React", logo: "/logos/react.svg", href: "https://react.dev" },
    { name: "Tailwind", logo: "/logos/tailwind.svg", href: "https://tailwindcss.com" },
    { name: "Node.js", logo: "/logos/node.svg" },
    { name: "MongoDB", logo: "/logos/mongodb.svg" },
    { name: "Framer Motion", logo: "/logos/framer.svg" },
    { name: "Vite", logo: "/logos/vite.svg" },
    { name: "Vite2", logo: "/logos/vite.svg" },
    { name: "Vite3", logo: "/logos/vite.svg" },
    { name: "Vite4", logo: "/logos/vite.svg" },
    { name: "Vite4", logo: "/logos/vite.svg" },
    { name: "Vite4", logo: "/logos/vite.svg" },
];


const Tech = () => {

    return (

        <section className="px-3 py-8">
            <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>

            {/* left to right? set direction="right" */}
            <TechScoll items={tech} speed={22} direction="left" />
        </section>
    )
}

export default Tech