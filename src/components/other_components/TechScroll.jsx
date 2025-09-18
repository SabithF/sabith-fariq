import React from "react";
import { motion } from "framer-motion";


export default function TechScoll({
    items = [],
    speed = 20,
    direction = "left",
    itemClassName = "",
}) {
    if (!Array.isArray(items) || items.length === 0) {
        return <p>Something is loading for you...</p>
    };

    // dupliting items list 
    const row = [...items, ...items];

    const animateFrom = direction === "left" ? "0%" : "-50%";
    const animateTo = direction === "left" ? "-50%" : "0%"


    return (
        <div className="relative w-full overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#050C13] via-[#050C13] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 rotate-180 bg-gradient-to-r from-[#050C13] via-[#050C13] to-transparent z-10" />

            <motion.div
                className="flex w-[200%] py-5 border-y border-[#1a1a1dc2]"
                style={{willChange: "transform"}}
                animate={{x: [animateFrom, animateTo]}}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}>

                    {/* first halg */}
                    <div className="flex min-w-[50%] flex-none items-center gap-5 ">
                        {items.map((item, i) => (
                            <StackItem key={`a-${i}`} item={item} itemClassName={itemClassName}/>
                        ))}
                    </div>
                    {/* second half */}
                    <div className="flex min-w-[50%] flex-none items-center gap-5 pl-5">
                        {items.map((item, i) => (
                            <StackItem key={`b-${i}`} item={item} itemClassName={itemClassName}/>
                        ))}
                    </div>
                
            </motion.div>

        </div>
    )

}


function StackItem({item, itemClassName = ""}){
    const content = (
        <div className={`flex items-center gap-2 rounded-full  bg-[#191920] px-4 py-2
        backdrop-blur-sm ${itemClassName}`}>

            <img src={item.logo} alt={item.name} className="h-7 w-7 object-contain" loading="lazy"/>
            <span className="text-sm md:text-base text-white/80
            ">{item.name}</span>
        </div>

    )

    return (
        <div className="shrink-0">{content}</div>
    )
}