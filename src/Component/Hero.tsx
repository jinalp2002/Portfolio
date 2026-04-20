import assets from "../assets/assets"
import About from "./About"
import Contact from "./Contact"
import MySkills from "./MySkills"
import Projects from "./Projects"
import { motion } from "framer-motion";


const Hero = () => {
    return (

        <div

            className="min-h-screen dark:bg-[#001927] font-serif" >
            <div className="dark:bg-[#001927] pl-2">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}   // start state
                    animate={{ opacity: 1, y: 0 }}    // end state
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="text-3xl md:text-6xl sm:text-4xl font-serif bg-gradient-to-r from-[#9d209a] to-[#0c1e73] bg-clip-text text-transparent pt-4 font-bold dark:from-[#ffe186] dark:to-[#80640e] ">Frontend Developer</motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[8px] md:text-lg sm:text-xs dark:text-slate-200 text-black font-serif pt-3">Crafting pixel-perfect, animated web experiences <br />
                    with modern tools and creative vision.</motion.h2>
                {/* <h2 className="text-sm font-serif dark:from-[#ffc61b] dark:to-[#560280] bg-gradient-to-r bg-clip-text text-transparent from-[#34c7f9] to-[#0c3948] "></h2> */}


            </div>
            <div className="flex gap-6 mt-5 ml-7 ">
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#Projects" className="flex bg-[#01a8ae] rounded-full w-36 md:w-52 pl-2 text-xs md:text-xl pt-1 md:pt-3 text-white cursor-pointer dark:bg-[#0487d9] ml-2 md:h-20 ">View my Projects
                    <img src={assets.arrow_icon} alt="" className="h-5 md:h-8 w-5 md:w-8 ml-2" />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    href="#About" className="bg-[#01a8ae] rounded-full w-20 md:w-36 pl-2 text-xs md:text-xl pt-1 md:pt-3 text-white cursor-pointer dark:bg-[#0487d9]">About me</motion.a>
            </div>

            <div className="w-full h-[1px] bg-slate-400 mt-7"></div>
            <About />
            <div className="w-full h-[1px] bg-slate-400 mt-7"></div>
            <MySkills />
            <div className="w-full h-[1px] bg-slate-400 mt-7"></div>
            <Projects />
            <div className="w-full h-[1px] bg-slate-400 mt-7"></div>
            <Contact />


        </div>
    )
}

export default Hero