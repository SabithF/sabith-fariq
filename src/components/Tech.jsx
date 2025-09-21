import React from "react";
import TechTicker from "./other_components/TechTicker";
import TechScoll from "./other_components/TechScroll";

const tech = [
    { name: "Illustrator", logo: "/assets/img/stack/ai.png" },
    { name: "Figma", logo: "/assets/img/stack/Figma.png" },
    { name: "Photoshop", logo: "/assets/img/stack/ps.png" },
    { name: "Adobe XD", logo: "/assets/img/stack/xd.png" },
    { name: "Analytics", logo: "/assets/img/stack/analytics.png" },
    { name: "Atom", logo: "/assets/img/stack/atom.png" },
    { name: "HTML", logo: "/assets/img/stack/html5.png" },
    { name: "CSS", logo: "/assets/img/stack/css3.png" },
    { name: "React", logo: "/assets/img/stack/React.png" },
    { name: "NodeJs", logo: "/assets/img/stack/nodejs.png" },
    { name: "JavaScript", logo: "/assets/img/stack/JavaScript.png" },
    { name: "TypeScript", logo: "/assets/img/stack/TypeScript.png" },
    { name: "MongoDB", logo: "/assets/img/stack/mongodb.png" },
    { name: "MySQL", logo: "/assets/img/stack/MySQL.png" },
    { name: "Tailwind", logo: "/assets/img/stack/tailwindcss.png" },
    { name: "Framer Motion", logo: "/assets/img/stack/framer.png" },
    { name: "ThreeJs", logo: "/assets/img/stack/Three.js.png" },
    { name: "NextJs", logo: "/assets/img/stack/nextjs2.png" },
    { name: "Flutter", logo: "/assets/img/stack/flutter.png" },
    { name: "Haskell", logo: "/assets/img/stack/haskell.png" },
    { name: "Electron", logo: "/assets/img/stack/electron.png" },
    { name: "NPM", logo: "/assets/img/stack/NPM.png" },
    { name: "Vite", logo: "/assets/img/stack/vitejs.png" },
    { name: "Postman", logo: "/assets/img/stack/postman.png" },
    { name: "Google", logo: "/assets/img/stack/Google.png" },
    { name: "Cloud", logo: "/assets/img/stack/gcloud.png" },
    { name: "Powershell", logo: "/assets/img/stack/Powershell.png" },
    { name: "VS Code", logo: "/assets/img/stack/vscode.png" },
    { name: "Wordpress", logo: "/assets/img/stack/WordPress.png" },
];


const Tech = () => {

    return (

        <section className="my-10 py-8 ">

            {/* left to right? set direction="right" */}
            <div className="border-y border-[#1a1a1dc2] py-4">
                <TechScoll items={tech} speed={22} direction="left" />
            </div>
        </section>
    )
}

export default Tech