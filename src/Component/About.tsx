import assets from "../assets/assets"
import cv from "../../public/Jinal_Resume.pdf"
import { motion } from "framer-motion";


const About = () => {
    return (
        <div id="About" className="mt-6 dark:text-slate-200 pl-2 font-serif">
            <div className="flex items-center gap-1">
                <div className=" w-6 h-[2px] bg-slate-400"></div>
                <motion.p
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 15
                    }}
                    className="dark:text-yellow-300 text-[#098acc] underline text-lg  md:text-2xl">About me</motion.p>
            </div>
            <div className="space-y-4 mt-5 text-sm md:text-xl">
                <motion.p initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}>
                    Hello! I’m a front-end developer eager to bring designs to life using HTML, CSS, JavaScript, and modern frameworks like React.
                </motion.p>

                <motion.p initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}>
                    As a fresher in the tech world, I’m enthusiastic about building clean, user-friendly interfaces and continuously improving my skills to stay in tune with the evolving front-end ecosystem.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}>
                    <p className="font-semibold">🎓 What I Bring:</p>
                    <ul className="list-disc ml-5">
                        <li>Strong foundation in web development principles</li>
                        <li>Familiarity with version control (Git)</li>
                    </ul>
                </motion.div>

                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}>
                    <p className="font-semibold">🎓 Currently Learning:</p>
                    <ul className="list-disc ml-5">
                        <li>HTML, CSS, JavaScript, React.JS</li>
                        <li>Web performance optimization</li>
                        <li>UI/UX design principles</li>
                    </ul>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}>
                    I’m looking for opportunities to grow as a developer, collaborate with forward-thinking teams, and contribute to impactful digital projects.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="font-medium">
                    Let’s connect
                </motion.p>
            </div>
            <div className="flex justify-center gap-6 mt-5 ml-7 ">
                <a href={cv} className="flex bg-[#01a8ae] rounded-full w-36  md:w-52 pl-2 text-xs md:text-2xl pt-1 text-white cursor-pointer dark:bg-[#0487d9]  justify-center">Download CV
                    <img src={assets.arrow_icon} alt="" className="h-5 md:h-7 w-5 md:w-7 ml-2" />
                </a>

            </div>

        </div>
    )
}

export default About