import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import emailjs from '@emailjs/browser';
import Alert from "./other_components/Alert";
import { links } from "../consts";


const Contact = () => {
    const formRef = useRef();
    const [alertBox, setAlert] = useState(null)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Loading
    const [loading, setLoading] = useState(false);

    // handleChange
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // email js
        emailjs.send(
            'service_74u2zia',
            'template_pggx4lc',
            {
                from_name: form.name,
                to_name: 'Sabith Fariq',
                from_email: form.email,
                to_email: 'sabithfariq@gmail.com',
                message: form.message,
            },
            'j2Jq4Aba-VrOu772f'
        )
            .then(() => {
                setLoading(false);
                setAlert(true)
                setForm({
                    name: '',
                    email: '',
                    message: '',
                });

            }, (error) => {
                setLoading(false);
                console.log(error);
                alert('Something went wrong.');
            }
            )
    }




    return (
        <>

            {alertBox && (
                <div className="fixed top-4 right-4 z-[1000] space-y-3 pointer-events-none">
                    <Alert onClose={() => setAlert(null)} />
                </div>
            )

            }

            <section className="mx-auto max-w-[1200px] text-white mt-10 w-full flex flex-col">
                {/* Heading */}
                <div className="mb-6 flex flex-col">
                    <h2 className={styles.subHeadText}>Connect With me</h2>
                    <h1 className={styles.headText}>Let's work together</h1>

                </div>

                <div className="flex w-full justify-between gap-10  flex-col sm:flex-row overflow-hidden">
                    <div className=" w-full justify-start flex flex-col sm:flex-row">
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            action="#" className="space-y-3 w-full">
                                
                            <label className="flex flex-col mx-3 sm:mx-0">
                                <span className="">Your Name</span>

                                <input type="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    name="name"
                                    id="name" className="
                            border rounded-xl pl-3 mt-1  border-gray-500/80 py-2 bg-bgColor" required />

                            </label>
                            <label className="flex flex-col mx-3 sm:mx-0">
                                <span className="">Email</span>
                                <input
                                    value={form.email}
                                    onChange={handleChange}
                                    name="email"
                                    type="email" id="email" className="
                            border rounded-xl pl-3 mt-1 border-gray-500/80 py-2 bg-bgColor" required />

                            </label>
                            <label className="flex flex-col mb-3 mx-3 sm:mx-0">
                                <span className="">Message</span>
                                <textarea
                                    value={form.message}
                                    onChange={handleChange}
                                    name="message"
                                    type="msg" id="msg" className="
                            border rounded-xl pl-3 mt-1 border-gray-500/80 py-2 bg-bgColor" required />

                            </label>
                            <button
                                type="submit"
                                className="group relative mx-3 sm:mx-0 flex items-center cursor-pointer border border-white rounded-xl border-none bg-green-500/10 
                                px-5 mt-6 w-[50%] md:w-[30%] py-2.5 text-white font-medium text-[17px] tracking-wide 
                                shadow-[inset_0_0_1.6em_-0.6em_rgba(0,0,0,0.3)] overflow-hidden">
                                {loading ? 'Submitting...' : 'Submit'}
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

                    <div className="relative w-full justify-center items-strat py-12 px-8 md:px-12 flex flex-col  bg-[#1b1b1e]/30 rounded-2xl shadow-xl">
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
                            <a href={links.linkedin} className="">
                                <img src="/assets/social/linkedin.svg" alt="linkedin" className="h-5 invert" />
                            </a>
                            <a href={links.github} className="">
                                <img src="/assets/social/github.svg" alt="github" className="h-5 invert " />
                            </a>
                            <a href={links.email} className="">
                                <img src="/assets/social/email.svg" alt="email" className="h-5 invert " />
                            </a>
                            <a href={links.insta} className="">
                                <img src="/assets/social/insta.svg" alt="insta" className="h-5 " />
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )

}

export default Contact;