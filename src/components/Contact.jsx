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

            <div className="flex w-full justify-between gap-8   ">
                <div className=" w-full justify-start flex flex-col sm:flex-row">
                    <form action="#" className="space-y-3 w-full">
                        <label className="flex flex-col">
                            <span className="">Your Name</span>
                            <input type="name" id="name" className="
                            border rounded-xl pl-3 mt-1 border-gray-500/80 py-2 bg-bgColor" required />

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
                <div className="relative w-full justify-center items-strat px-6 flex flex-col bg-[#1b1b1e]/30 rounded-2xl shadow-xl">
                    <div className="relative flex justify-start items-start mb-4">
                        <div className="rounded-full p-1 ring-2 ring-gray-800">
                            <div className="rounded-full p-1 ">
                                <img
                                    src="/assets/img/me1.jpg"
                                    alt="profile"
                                    className="h-28 w-28 rounded-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <p className="text-textGray">My inbox is always open. Whether to discuss about a project or just to say Hi. I would love to to hear from you</p>
                    <div className="mt-5 gap-8 flex flex-row">
                        <a href="" className="">
                            <svg width="36px" height="36px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.75 11C8.75 10.5858 8.41421 10.25 8 10.25C7.58579 10.25 7.25 10.5858 7.25 11H8.75ZM7.25 17C7.25 17.4142 7.58579 17.75 8 17.75C8.41421 17.75 8.75 17.4142 8.75 17H7.25ZM17.25 17C17.25 17.4142 17.5858 17.75 18 17.75C18.4142 17.75 18.75 17.4142 18.75 17H17.25ZM12 14H11.25H12ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C7.58579 7.25 7.25 7.58579 7.25 8H8.75ZM7.25 9C7.25 9.41421 7.58579 9.75 8 9.75C8.41421 9.75 8.75 9.41421 8.75 9H7.25ZM7.25 11V17H8.75V11H7.25ZM18.75 17V14H17.25V17H18.75ZM18.75 14C18.75 11.9289 17.0711 10.25 15 10.25V11.75C16.2426 11.75 17.25 12.7574 17.25 14H18.75ZM15 10.25C12.9289 10.25 11.25 11.9289 11.25 14H12.75C12.75 12.7574 13.7574 11.75 15 11.75V10.25ZM11.25 14V17H12.75V14H11.25ZM7.25 8V9H8.75V8H7.25Z" fill="#ffffff"></path> </g></svg>
                        </a>
                        <a href="" className="">
                            <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" stroke="#ffffff" stroke-width="2"></path> <circle cx="16.5" cy="7.5" r="1.5" fill="#ffffff"></circle> <circle cx="12" cy="12" r="3" stroke="#ffffff" stroke-width="2"></circle> </g></svg>    
                        </a>
                        <a href="" className="">
                            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="36px" height="36px" viewBox="0 0 14.906 32" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.874,11.167 L14.262,14.207 C14.062,15.208 13.100,15.992 12.072,15.992 L10.000,15.992 L10.000,30.000 C10.000,31.104 9.159,32.000 8.049,32.000 L5.030,32.000 C3.920,32.000 3.017,31.102 3.017,29.999 L3.017,15.992 L2.011,15.992 C0.901,15.992 -0.002,15.095 -0.002,13.991 L-0.002,10.990 C-0.002,9.887 0.901,8.989 2.011,8.989 L3.017,8.989 L3.017,6.003 C3.017,2.716 5.693,0.041 8.994,0.013 C9.015,0.012 9.033,0.001 9.055,0.001 L13.081,0.001 C13.636,0.001 14.000,0.448 14.000,1.000 L14.000,6.000 C14.000,6.553 13.636,7.004 13.081,7.004 L10.061,7.004 L10.060,8.989 L13.079,8.989 C13.645,8.989 14.167,9.228 14.509,9.644 C14.852,10.059 14.985,10.615 14.874,11.167 ZM9.092,10.990 C9.078,10.991 9.067,10.998 9.053,10.998 L9.053,10.998 C8.497,10.997 8.046,10.549 8.047,9.997 L8.047,9.990 C8.047,9.990 8.047,9.990 8.047,9.990 C8.047,9.990 8.047,9.990 8.047,9.990 L8.049,6.003 C8.049,5.450 8.499,5.003 9.055,5.003 L12.074,5.003 L12.074,2.002 L9.094,2.002 C9.077,2.002 9.063,2.011 9.045,2.011 C6.831,2.011 5.030,3.802 5.030,6.003 L5.030,10.005 C5.030,10.558 4.579,11.006 4.023,11.006 C3.996,11.006 3.973,10.992 3.946,10.990 L2.011,10.990 L2.011,13.991 L4.023,13.991 C4.579,13.991 5.030,14.439 5.030,14.992 C5.030,15.044 5.008,15.088 5.000,15.138 L5.000,30.000 L8.049,29.999 L8.049,15.002 C8.049,14.998 8.047,14.995 8.047,14.992 C8.047,14.439 8.497,13.991 9.053,13.991 L12.072,13.991 C12.145,13.991 12.275,13.886 12.288,13.816 L12.857,10.990 L9.092,10.990 Z"></path> </g></svg>    
                        </a>
                        <a href="" className="">
                           <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> </a>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default Contact;