import React from "react";
import { styles } from "../styles";
import { grid1, grid2, grid3, grid4 } from "../consts";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const About = () => {
    return (
        <section className="max-w-[1000px] justify-center flex my-20 mx-auto  ">
            {/* grid container */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2   md:gap-6 gap-5  mx-2
             text-white min-h-full"> */}

            <div className="columns-1 md:columns-2 gap-6 mx-2 text-white">



                {/* Card 1 */}
                {/*  md:col-start-1 md:row-start-1 */}
                <div className="border border-white/10 break-inside-avoid mb-6
                backdrop-blur-md shadow-lg   relative overflow-clip     
                bg-[radial-gradient(circle_at_center,rgba(25,35,45,0.85)_0%,rgba(5,12,19,0.6)_100%)]  
                rounded-2xl card bg-opacity-5 ">

                    <div className="absolute inset-0 rounded-2xl pointer-events-none
                  before:content-[''] before:absolute before:inset-0 before:rounded-2xl
                  before:border-r before:border-b before:border-cyan-400/40" />

                    <div className="md:p-10 p-9">
                        <h1 className={`${styles.gridHead}`}>😎{grid1.title}</h1>
                        <h1 className="text-liveButton font-semibold mt-2 font-outfit">
                            {grid1.title2},</h1>
                        <p className={`${styles.griContent}  w-[90%]`}>

                            {grid1.content}</p>

                    </div>

                    <div className="relative aspect-[21/9]">
                        <img src="/assets/img/developer.png" alt="Developer"
                            className="absolute  h-auto w-auto max-h-[500px] -translate-y-32  group
                       object-contain z-10 " />
                        {/* second image */}

                        <img src="/assets/img/grid-1.png" alt="grid-1-image2"
                            className=" bottom-0 translate-y-15 md:translate-y-20 group hover:translate-y-10  
                                transition-transform duration-200
                       absolute inset-0 object-contain z-20 mix-blend-screen opacity-80"/>

                    </div>


                    {/* second image + with fadeout  */}
                    {/* <div className="relative h-[260px] overflow-hidden opacity-80"
                            style={{
                                maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
                            }}
                        >
                            <img src="/assets/img/grid-1.png" alt="grid-1-image2"
                                className=" bottom-0 translate-y-20 hover:translate-y-10  
                                transition-transform duration-200
                       absolute inset-0 object-contain z-0 mix-blend-screen opacity-80"/>
                        </div> */}

                    {/* <img src="/assets/img/developer.png" alt="Developer"
                        className="h-[600px] w-[600px] relative -top-56 object-contain hover:scale-105 transition-all duration-200  " />
                     */}
                </div>

                {/* Card 3 -Education - md:col-start-1 md:row-start-2 */}
                <div className="border break-inside-avoid mb-6 border-white/10 rounded-2xl backdrop-blur-md 
                shadow-lg overflow-hidden bg-opacity-5 bg-[radial-gradient(circle_at_center,rgba(25,35,45,0.85)_0%,rgba(5,12,19,0.6)_100%)] card ">
                    {/* border */}
                    <div class="absolute inset-0 rounded-2xl pointer-events-none
                        before:absolute before:inset-0 before:rounded-2xl
                        before:border-r before:border-b before:border-cyan-400/40">
                    </div>

                    {/* Grid content */}
                    <div className="relative flex flex-col">
                        <div className="flex items-center justify-center translate-y-4 ">
                            <img src="/assets/img/education-uni.png" alt="education" className="h-auto max-h-40" />
                        </div>
                        <div className="md:px-10 pt-5 px-9 md:pb-12 pb-6">
                            <h1 className={`${styles.gridHead} flex items-center gap-3 flex-row`}>
                                <img src="/assets/img/education.png" alt="education-icon" className="invert h-auto max-h-5 " />
                                {grid3.title}</h1>
                            <p className={`${styles.griContent}  w-[100%] `}>{grid3.content}</p>
                        </div>


                    </div>

                </div>

                {/* Card 2 - Dev- md:col-start-2 md:row-start-1 */}
                <div className="   border border-white/10 
                backdrop-blur-md shadow-lg overflow-hidden break-inside-avoid mb-6
                bg-[radial-gradient(circle_at_center,rgba(25,35,45,0.85)_0%,rgba(5,12,19,0.6)_100%)]  rounded-2xl card bg-opacity-5">
                    {/* border */}
                    <div class="absolute inset-0 rounded-2xl pointer-events-none
              before:absolute before:inset-0 before:rounded-2xl
              before:border-l before:border-b before:border-cyan-400/40">
                    </div>


                    {/* grid content */}
                    <div className="relative flex flex-col">
                        <div className=" flex justify-end">

                            <img src="/assets/img/code-snippet-e.png" alt="code-snippet" className="h-auto w-auto max-h-40 md:max-h-48 object-contain" />
                        </div>
                        <div className="md:px-10 px-9 md:pb-12 pb-6">
                            <h1 className={`${styles.gridHead} flex items-center gap-3 flex-row`}>
                                <img src="/assets/img/dev.png" alt="icon" className="w-auto h-auto max-h-5 items-center flex" />{grid2.title}</h1>
                            <p className={`${styles.griContent} w-[80%] `}>{grid2.content}</p>


                        </div>

                    </div>
                </div>




                {/* card 4 - Tech- md:col-start-2 md:row-start-2*/}
                <div className="border  break-inside-avoid mb-6
                 border-white/10 rounded-2xl backdrop-blur-md shadow-lg overflow-hidden
                bg-opacity-5 bg-[radial-gradient(circle_at_center,rgba(25,35,45,0.85)_0%,rgba(5,12,19,0.6)_100%)] card">

                    {/* Backgroundlmi */}
                    <div class="absolute inset-0 rounded-2xl pointer-events-none
                        before:absolute before:inset-0 before:rounded-2xl
                        before:border-l before:border-b before:border-cyan-400/40">
                    </div>

                    {/* grid content */}
                    <div className="pt-10 flex flex-col text-right items-end justify-end">

                        <div className="flex flex-col md:items-end md:px-10 px-9 md:pb-3 pb-6">
                            <h1 className={`${styles.gridHead} flex items-center gap-3 flex-row`}>
                                <img src="/assets/img/tech.png" alt="icon" className="w-auto h-auto max-h-5 invert items-center flex" />{grid4.title}</h1>
                            <p className={`${styles.griContent} w-[80%]`}>{grid4
                                .content}</p>


                        </div>

                        <div className="flex flex-col items-center">
                            <div className="absolute -mt-3 flex flex-row">
                                <img src="/assets/img/js.png" alt="react" className="h-16 shadow-lg translate-y-5 animate-pulse"/>
                                <img src="/assets/img/react.png" alt="react" className="h-16 shadow-lg animate-pulse"/>
                                <img src="/assets/img/node.png" alt="react" className="h-16 shadow-lg translate-y-5 animate-pulse"/>
                            </div>

                            <DotLottieReact
                                src="https://lottie.host/2fec270b-b67d-4ac6-80e5-505edb1a4083/N0CaVA8Lyl.lottie"
                                loop
                                autoplay
                                className="mix-blend-screen"
                            />
                        </div>



                    </div>
                    <div className="flex items-center ">
                        {/* <img src="/assets/img/education-uni.png" alt="education" /> */}
                    </div>

                </div>






            </div>
        </section>
    )
}

export default About