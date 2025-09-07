import React from "react";

const About = () => {
    return (
        <section className="max-w-7xl justify-center flex my-20 mx-auto ">
            {/* grid container */}
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-6 gap-6  text-white">
                {/* Card 1 */}
                <div className="border border-white/10 backdrop-blur-md shadow-lg  md:col-span-2 relative md:row-span-3 h-[460px] w-[490px]
                bg-[radial-gradient(circle_at_center,rgba(25,35,45,0.85)_0%,rgba(5,12,19,0.6)_100%)]  rounded-2xl card bg-opacity-5 ">  
                    <div className="p-10">
                    <h1>WHO AM I</h1>
                    <p>Hi, I am Sabith Fariq,<br />
                    a Full Stack Developer who loves turning ideas into clean, 
                    interactive web experiences. From UI to backend,
                     I enjoy building smart smart, user-friendly solutions</p>
                     </div>
                    <img src="/assets/img/developer.png" alt="Developer" 
                    className="h-[600px] w-[600px] relative -top-56 object-contain   "/>  
                    
                         </div>
                <div className="border md:col-span-2 md:row-span-3 card">2</div>
                <div className="border md:col-span-2 md:row-span-2 -mb-3 card">3</div>
                <div className="border md:col-span-2 md:row-span-1 card -mt-3">4</div>
                
            
            </div>
        </section> 
    )
}

export default About