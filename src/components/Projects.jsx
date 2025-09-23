import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../consts";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { button, li } from "framer-motion/client";



const Project = () => {
    const [activeCat, setActiveCat] = useState('All');
    const [visibleCount, setVisibleCount] = useState(4);
    const DEFAULT_COUNT = 4;

    //Categories
    const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

    const filtered = activeCat === "All"
        ? projects
        : projects.filter(p => p.category === activeCat);

    const visibleProjects = filtered.slice(0, visibleCount);

    const canShowMore = visibleCount < filtered.length;
    const canShowLess = filtered.length > DEFAULT_COUNT && visibleCount >= filtered.length;





    return (
        <section className="mx-auto max-w-[1000px] text-white mt-10 w-full flex flex-col">
            {/* Heading */}
            <div className="mb-6 flex flex-col ">
                <h2 className={styles.subHeadText}>My Work</h2>
                <h1 className={`${styles.headText} `}>Selected Projects</h1>
                <p className={`${styles.paraText} md:w-[80%] mx-5 md:mx-0`}>
                    Here's a selection showcasing my expertise and the achieved results.</p>
            </div>

            {/* Categories button */}
            <div className="flex gap-2 md:gap-4 font-clashDisplay justify-center md:justify-end cursor-pointer">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => {
                            setActiveCat(cat)
                            setVisibleCount(DEFAULT_COUNT);
                        }}
                        className={clsx(
                            "py-1 px-3 rounded-xl transition",
                            activeCat === cat ? "bg-[#191920]" : "hover:bg-[#191920]/60"
                        )}
                        aria-pressed={activeCat === cat}
                    >
                        {cat}

                    </button>
                ))}
            </div>

            {/* Grid */}
            <div
                layout
                className="grid py-12 grid-cols-1 mx-3 sm:mx-0 sm:grid-cols-2 gap-y-10 sm:gap-x-16 sm:gap-y-0 transition duration-300 ease-in-out">

                {visibleProjects.map((p) => (
                    <div
                        key={p.title}
                        
                        className={clsx(
                            " h-fit w-full cursor-pointer",
                            "sm:even:mt-14"
                        )}>

                        <Link href={p.link} className="block h-fit w-full">
                            {/* Img */}
                            <div className="aspect-[3/2] w-full overflow-hidden rounded-xl sm:rounded-[40px]">
                                <img src={p.img} alt={p.title}
                                    className="aspect-[3/2] w-full h-full object-cover transition duration-300
                             group-hover:scale-[1.015]"
                                    loading="lazy" />
                            </div>
                            {/* Details */}
                            <div className="mt-4 space-y-2">
                                <h5 className="text-lg font-medium font-outfit">{p.title}</h5>
                                <div className="flex justify-between items-end">
                                    <p className={`${styles.expPara} w-[70%]`}>{p.description}</p>

                                    {p.link && (
                                        <a 
                                        onClick={(e) => e.stopPropagation()}
                                        target="_blank"
                                        href={p.link} className="border border-1 p-3 text-gray-600 hover:text-[#9cdcfe] hover:bg-borderGray rounded-xl border-lightBorder transition duration-300 ease-in-out">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7"> <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path> </svg></a>

                                    )}

                                    {p.web && (
                                        <a 
                                        onClick={(e) => e.stopPropagation()}
                                        target="_blank"
                                        href={p.web} className="border border-1 p-3 rounded-xl border-lightBorder text-gray-600 hover:text-liveButton  hover:bg-borderGray transition duration-300 ease-in-out ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7"> <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path> </svg>
                                        </a>
                                    )}



                                </div>
                                <ul className=" flex  flex-row gap-2 font-extralight">
                                    {p.stack.map((stack, index) => (
                                        <li className=" mt-2 bg-[#191920] hover:text-red-500 hover:even:text-green-400 rounded-xl py-1 px-2">{stack}</li>
                                    ))}
                                </ul>

                            </div>



                        </Link>




                    </div>
                ))}


            </div>

            {/* Show more / less */}
            <div className="mt-2 mb-10 flex justify-center">
                {canShowMore && (
                    <button
                        onClick={() => setVisibleCount(filtered.length)}
                        className="px-4 py-2 rounded-xl border border-lightBorder hover:bg-borderGray transition"
                    >
                        Show all
                    </button>
                )}
                {canShowLess && (
                    <button
                        onClick={() => setVisibleCount(DEFAULT_COUNT)}
                        className="px-4 py-2 rounded-xl border border-lightBorder hover:bg-borderGray transition"
                    >
                        Show less
                    </button>
                )}
            </div>
        </section>

    )
}

export default Project;