import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";


const Contact = () => {
    return (
        <section className="mx-auto max-w-[1200px] text-white mt-10 w-full flex flex-col">
            {/* Heading */}
            <div className="mb-6 flex flex-col">
                <h2 className={styles.subHeadText}>Connect With me</h2>
                <h1 className={styles.headText}>Let's work together</h1>

            </div>

            <div className="flex w-full justify-between gap-10   ">
                <div className=" w-full justify-start flex flex-col sm:flex-row">
                    <form action="#" className="space-y-3 w-full">
                        <label className="flex flex-col">
                            <span className="">Your Name</span>
                            <input type="name" id="name" className="
                            border rounded-xl pl-3 mt-1  border-gray-500/80 py-2 bg-bgColor" required />

                        </label>
                        <label className="flex flex-col">
                            <span className="">Email</span>
                            <input type="email" id="email" className="
                            border rounded-xl pl-3 mt-1 border-gray-500/80 py-2 bg-bgColor" required />

                        </label>
                        <label className="flex flex-col mb-3">
                            <span className="">Message</span>
                            <textarea type="msg" id="msg" className="
                            border rounded-xl pl-3 mt-1 border-gray-500/80 py-2 bg-bgColor" required />

                        </label>
                        <button className="group relative flex items-center cursor-pointer border border-white rounded-xl border-none bg-green-500/10 px-5 mt-6 w-[30%] py-2.5 text-white font-medium text-[17px] tracking-wide shadow-[inset_0_0_1.6em_-0.6em_rgba(0,0,0,0.3)] overflow-hidden">
                            Submit
                            <span
                                className="absolute right-1 flex h-9 w-9 border border-white items-center justify-center rounded-lg bg-white shadow-md transition-all duration-300 ease-in-out group-hover:w-[calc(100%-0.5rem)] group-active:scale-95"
                            >
                                <svg
                                    className="w-5 text-green-600 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 
        7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                </svg>
                            </span>
                        </button>


                    </form>
                </div>
                <div className="relative w-full justify-center items-strat px-12 flex flex-col  bg-[#1b1b1e]/30 rounded-2xl shadow-xl">
                    <div className="relative flex justify-start items-start mb-4">
                        <div className="rounded-full p-1 ring-2 ring-gray-800 ">
                            <div className="rounded-full p-1 ">
                                <img
                                    src="/assets/img/me1.jpg"
                                    alt="profile"
                                    className="h-20 w-20 rounded-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <p className="text-textGray">My inbox is always open! Whether you want to discuss a project or just say hi, I would love to to hear from you.</p>
                    <div className="mt-5 gap-5 flex flex-row group">
                        <a href="" className="">
                            <img src="/assets/social/linkedin.svg" alt="linkedin"  className="h-5 invert"/>
                        </a>
                        <a href="" className="">
                             <img src="/assets/social/github.svg" alt="linkedin"  className="h-5 invert "/>
                        </a>
                        <a href="" className="">
                            <img src="/assets/social/email.svg" alt="linkedin"  className="h-5 invert "/>
                        </a>
                        <a href="" className="">
                         <img src="/assets/social/insta.svg" alt="linkedin"  className="h-5  invert"/>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default Contact;