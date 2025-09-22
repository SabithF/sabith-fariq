import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";


const Footer = () => {
    return (
        <section className="mx-auto max-w-[1200px] text-white mt-10  flex flex-col">

            {/* avaialble */}
            <div className="bg-[#1b1b1e]/30 flex flex-col items-center justify-center py-20 rounded-3xl">
                <div className="">
                     {/* Available for work  */}
                <div className="flex justify-center flex-center flex-row rounded-full
                 items-center gap-   bg-[#b5ff6d]/10 px-4 py-2 mb-3">
                    <span className="h-[6px] w-[6px] flex relative ">
                        <span className="bg-liveButton absolute inline-flex h-full w-full
                        animate-ping rounded-full opacity-75"></span>
                        <span className="bg-liveButton relative inline-flex h-full w-full
                         rounded-full "></span>
                    </span>
                    <p className="text-xs ml-2">Available for work</p>
                </div>

                
                </div>

                <h2 className={`${styles.headText}text shadow-xl   w-[50%]  flex flex-col items-center justify-center`}>Let's turn your Ideas into <span className="text-liveButton">experience</span></h2>
                <img src="/assets/social/github2.svg" alt="github" className="invert h-8 mt-5 cursor-pointer ring-1 rounded-full ring-gray-500/40 p-1 animate-pulse" />
           
                
                
            </div>

            <div className="py-5 px-4 flex  justify-center ">
                
                <p className="text-md text-gray-400/40">© 2025 Sabith Fariq. All rights reserved.</p>
                
            </div>
        </section>
    )
}

export default Footer;