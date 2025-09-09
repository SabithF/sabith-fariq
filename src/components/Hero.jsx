import React from "react";
import { cn } from "./utils"
import { Spotlight } from "./other_components/Spotlight";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';




const Hero = () => {

    return (
        <section className="text-white min-h-min relative ">
            {/* grid and spotlight */}
            <div className="absolute z-0 inset-0 pointer-events-none  flex h-screen w-full overflow-hidden rounded-md bg-black/10 antialiased md:items-center md:justify-center opacity-55">
                <div
                    className={cn(
                        "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
                        "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
                    )}
                />

                <Spotlight
                    className="-top-40 left-0 md:top-36 md:left-60  "
                    fill="white"
                />
                <Spotlight
                    className="-top-40 left-0 md:top-40 md:right-60 "
                    fill="white"
                />
                {/* <img src="/assets/img/ray.png" alt="ray" className="h-full w-full" />          */}

            </div>

            <div className="relative flex z-10 items-center justify-center  flex-col h-screen">

                {/* Available for work  */}
                <div className="flex flex-center flex-row rounded-full
                 items-center gap-2 bg-[#b5ff6d]/10 px-4 py-2 mb-3">
                    <span className="h-[6px] w-[6px] flex relative ">
                        <span className="bg-liveButton absolute inline-flex h-full w-full
                        animate-ping rounded-full opacity-75"></span>
                        <span className="bg-liveButton relative inline-flex h-full w-full
                         rounded-full "></span>
                    </span>
                    <p className="text-xs">Available for work</p>
                </div>
                {/* Main text */}
                <div className="text-4xl w-[80%] md:text-6xl text-center font-clashDisplay mb-8 ">
                    Let’s turn <span className="font-semibold inline-flex items-center text-[#FFEE00]">Ideas
                        <DotLottieReact
                            src="https://lottie.host/ba033e4f-ddda-4eb2-b24b-cb931ff80821/UzhIQkk6gP.lottie"
                            loop
                            autoplay
                            className="md:w-24 -mx-8  w-24  "
                        />

                    </span> into
                    <br className="hidden md:block" />
                    <span className="font-semibold text-[#FFEE00]"> Reality</span>

                </div>

                <div className="text-xl  text-textGray bg-gradient-to-r from-white via-liveButton to-white 
  bg-[length:200%_auto] bg-clip-text text-transparent animate-shine mb-4">Hi, I'm Sabith Fariq</div>



                <div className="flex flex-row gap-2 pt-5 md:pt-5">
                    <a href="https://github.com/SabithF" className="text-[#f3f3f398] shadow-xl hover:text-white
                   transition duration-300 ease-in-out border border-1
                    border-[#f3f3f310] p-3 rounded-xl bg-[#1414149c] hover:bg-[#f3f3f310]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8"> <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path> </svg>

                    </a>
                    <a href="https://www.linkedin.com/in/sabith-fariq/" className="text-[#f3f3f398] shadow-xl hover:text-[#4A86C5]
                   transition duration-300 ease-in-out border border-1
                    border-[#f3f3f310] p-3 rounded-xl bg-[#1414149c] hover:bg-[#f3f3f310]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8"> <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path> </svg>
                    </a>
                    <a href="mailto:sabithfariq@gmail.com?subject=Let's%20work%20together&body=Hi%20Sabith,%0AI%20would%20like%20to%20discuss..." className="text-[#f3f3f398] shadow-xl hover:text-red-400
                   transition duration-300 ease-in-out border border-1
                    border-[#f3f3f310] p-3 rounded-xl bg-[#1414149c] hover:bg-[#f3f3f310]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2.1em" height="2.1em" viewBox="0 0 24 24"> <path fill="currentColor" d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64"></path> </svg>
                    </a>
                </div>
                <div className="pt-10">

                    <button
                        className="group relative dark:bg-neutral-800 bg-neutral-200 rounded-full p-px overflow-hidden"
                    >
                        <span className="absolute inset-0 rounded-full overflow-hidden">
                            <span className="inset-0 absolute pointer-events-none select-none">
                                <span
                                    className="block -translate-x-1/2 -translate-y-1/3 size-24 blur-xl"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, rgb(122, 105, 249), rgb(242, 99, 120), rgb(245, 131, 63))",
                                    }}
                                />
                            </span>
                        </span>

                        <span
                            className="inset-0 absolute pointer-events-none select-none"
                            style={{
                                animation: "border-glow-translate 10s ease-in-out infinite alternate",
                            }}
                        >
                            <span
                                className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full"
                                style={{
                                    animation: "border-glow-scale 10s ease-in-out infinite alternate",
                                    background:
                                        "linear-gradient(135deg, rgb(122, 105, 249), rgb(242, 99, 120), rgb(245, 131, 63))",
                                }}
                            />
                        </span>

                        <span className="flex items-center justify-center gap-1 relative z-[1] dark:bg-neutral-950/90 bg-neutral-50/90 rounded-full py-2 px-4 pl-2 w-full">
                            <span className="relative group-hover:scale-105 transition-transform group-hover:rotate-[360deg] duration-500">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="opacity-80 dark:opacity-100"
                                    style={{
                                        animation:
                                            "star-rotate 14s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate",
                                    }}
                                >
                                    <path
                                        d="M11.5268 2.29489C11.5706 2.20635 11.6383 2.13183 11.7223 2.07972C11.8062 2.02761 11.903 2 12.0018 2C12.1006 2 12.1974 2.02761 12.2813 2.07972C12.3653 2.13183 12.433 2.20635 12.4768 2.29489L14.7868 6.97389C14.939 7.28186 15.1636 7.5483 15.4414 7.75035C15.7192 7.95239 16.0419 8.08401 16.3818 8.13389L21.5478 8.88989C21.6457 8.90408 21.7376 8.94537 21.8133 9.00909C21.8889 9.07282 21.9452 9.15644 21.9758 9.2505C22.0064 9.34456 22.0101 9.4453 21.9864 9.54133C21.9627 9.63736 21.9126 9.72485 21.8418 9.79389L18.1058 13.4319C17.8594 13.672 17.6751 13.9684 17.5686 14.2955C17.4622 14.6227 17.4369 14.9708 17.4948 15.3099L18.3768 20.4499C18.3941 20.5477 18.3835 20.6485 18.3463 20.7406C18.3091 20.8327 18.2467 20.9125 18.1663 20.9709C18.086 21.0293 17.9908 21.0639 17.8917 21.0708C17.7926 21.0777 17.6935 21.0566 17.6058 21.0099L12.9878 18.5819C12.6835 18.4221 12.345 18.3386 12.0013 18.3386C11.6576 18.3386 11.3191 18.4221 11.0148 18.5819L6.3978 21.0099C6.31013 21.0563 6.2112 21.0772 6.11225 21.0701C6.0133 21.0631 5.91832 21.0285 5.83809 20.9701C5.75787 20.9118 5.69563 20.8321 5.65846 20.7401C5.62128 20.6482 5.61066 20.5476 5.6278 20.4499L6.5088 15.3109C6.567 14.9716 6.54178 14.6233 6.43534 14.2959C6.32889 13.9686 6.14441 13.672 5.8978 13.4319L2.1618 9.79489C2.09039 9.72593 2.03979 9.63829 2.01576 9.54197C1.99173 9.44565 1.99524 9.34451 2.02588 9.25008C2.05652 9.15566 2.11307 9.07174 2.18908 9.00788C2.26509 8.94402 2.3575 8.90279 2.4558 8.88889L7.6208 8.13389C7.96106 8.08439 8.28419 7.95295 8.56238 7.75088C8.84058 7.54881 9.0655 7.28216 9.2178 6.97389L11.5268 2.29489Z"
                                        fill="url(#paint0_linear_171_8212)"
                                        stroke="url(#paint1_linear_171_8212)"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_171_8212"
                                            x1="-0.5"
                                            y1="9"
                                            x2="15.5"
                                            y2="-1.5"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#7A69F9" />
                                            <stop offset="0.575" stopColor="#F26378" />
                                            <stop offset="1" stopColor="#F5833F" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_171_8212"
                                            x1="-0.5"
                                            y1="9"
                                            x2="15.5"
                                            y2="-1.5"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#7A69F9" />
                                            <stop offset="0.575" stopColor="#F26378" />
                                            <stop offset="1" stopColor="#F5833F" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <span
                                    className="rounded-full size-11 absolute opacity-0 dark:opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg"
                                    style={{
                                        animation: "star-shine 14s ease-in-out infinite alternate",
                                        background:
                                            "linear-gradient(135deg, rgb(59, 196, 242), rgb(122, 105, 249), rgb(242, 99, 120), rgb(245, 131, 63))",
                                    }}
                                />
                            </span>

                            <span className="bg-gradient-to-b ml-1.5 dark:from-white dark:to-white/50 from-neutral-950 to-neutral-950/50 bg-clip-text text-xs text-transparent group-hover:scale-105 transition transform-gpu">
                                Let's explore
                            </span>
                        </span>
                    </button>


                </div>


            </div>

            <div className="border-[#1a1a1dc2] bg-[#1a1a1d27] md:-mt-20 -mt-32  flex flex-col relative justify-center items-center overflow-hidden border-y">
                <div className="relative overflow-hidden w-full">

                    <div
                        className="flex z-10 w-max py-10 px-10 mx-10 flex-row gap-5 items-center justify-center will-change-transform"
                        style={{ animation: "marquee 35s linear infinite" }}
                    >

                        <div className="flex-row items-center flex gap-4">
                            <h2 className="text-[#2c2c35] md:text-[48px] text-3xl font-clashDisplay">Web Developement</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-[#2c2c35]" width="42" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
                        </div>
                        <div className="flex-row items-center flex gap-4">
                            <h2 className="text-[#2c2c35] md:text-[48px] text-3xl font-clashDisplay">Designing</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-[#3a3a4244]" width="42" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
                        </div>
                        <div className="flex-row items-center flex gap-4">
                            <h2 className="text-[#2c2c35] md:text-[48px] text-3xl font-clashDisplay">UI/UX Development</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-[#3a3a4244]" width="42" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
                        </div>
                        <div className="flex-row items-center flex gap-4">
                            <h2 className="text-[#2c2c35] md:text-[48px] text-3xl font-clashDisplay">Digital Marketing</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-[#3a3a4244]" width="42" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
                        </div>


                        <div className="flex-row items-center flex gap-4">
                            <h2 className="text-[#2c2c35] md:text-[48px] text-3xl font-clashDisplay">Web Developement</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-[#2c2c35]" width="42" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
                        </div>
                        <div className="flex-row items-center flex gap-4">
                            <h2 className="text-[#2c2c35] md:text-[48px] text-3xl font-clashDisplay">Designing</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-[#3a3a4244]" width="42" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
                        </div>
                        <div className="flex-row items-center flex gap-4">
                            <h2 className="text-[#2c2c35] md:text-[48px] text-3xl font-clashDisplay">UI/UX Development</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-[#3a3a4244]" width="42" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
                        </div>
                        <div className="flex-row items-center flex gap-4">
                            <h2 className="text-[#2c2c35] md:text-[48px] text-3xl font-clashDisplay">Digital Marketing</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-[#3a3a4244]" width="42" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
                        </div>
                    </div>


                    <div className="pointer-events-none absolute border-[#050C13] border-y-3 inset-y-0 left-0 w-12 md:w-32 z-50 bg-gradient-to-r from-[#050C13] via-[#050C13] to-transparent" />
                    <div className="pointer-events-none absolute border-[#050C13] border-y-3  inset-y-0 right-0 w-12 md:w-32 z-50 bg-gradient-to-l  from-[#050C13] via-[#050C13] to-transparent" />
                </div>


            </div>



        </section>
    )
}

export default Hero