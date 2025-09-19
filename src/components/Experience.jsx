import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { work } from "../consts";






const Experience = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (idx) => {
        setOpenIndex((curr) => (curr === idx ? null : idx));
    };

    return (
        <section className="text-white mx-auto md:flex-row flex-col w-full max-w-[1000px] flex overflow-hidden">
            {/* Heading */}
            <div className="mb-6 flex flex-col">
                <h2 className={styles.subHeadText}>Work History</h2>
                <h1 className={styles.headText}>Experienc</h1>
                <p className={`${styles.paraText} md:w-[80%] mx-5 md:mx-0`}>I have worked with some of the most innovative industry leaders to help build their top-notch products.</p>
            </div>


            {/* Work */}
            <div className="mb-6 flex flex-col w-full justify-start md:mx-0 mx-5 overflow-hidden">
                {/* work card */}
                {work.map((job, index) => (
                    <motion.div
                        key={index}
                        layout
                        className="flex flex-col  border-b border-lightBorder pb-4 mb-5"
                        >

                        <button
                            type="button"
                            onClick={() => toggle(index)}
                            aria-expanded={openIndex === index}
                            className="justify-between flex w-full text-left">
                            <div className="flex items-center">
                                <img src={job.logo} alt="icon" className="h-7 pr-4" />
                                <div className="flex flex-col">
                                    <h2>{job.designation}</h2>
                                    <p className={`${styles.expPara} `}>@{job.company} </p>

                                </div>
                            </div>
                            <p className={`${styles.expPara}`}>{job.date}</p>

                        </button>
                        <AnimatePresence initial={false}>
                            {openIndex === index && (
                                <motion.ul
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                                    style={{ overflow: "hidden" }}
                                    className={`${styles.pointPara} space-y-1`}>

                                    {job.description.map((point, i) => (
                                        <li className="flex  pl-2 pt-2">
                                            <span className="pl-1">•</span>
                                            <span className="pl-3  w-[90%] md:w-full ">{point}</span>
                                        </li>
                                    ))

                                    }

                                </motion.ul>
                            )}

                        </AnimatePresence>



                    </motion.div>
                ))

                }

            </div>
        </section >
    )
}

export default Experience;