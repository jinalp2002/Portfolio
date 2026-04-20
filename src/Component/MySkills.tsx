import { motion } from "framer-motion";

const MySkills = () => {
    return (
        <div>
            <motion.div className="flex items-center gap-1 mt-7 font-serif">
                <div className=" w-6 h-[2px] bg-slate-400"></div>
                <p className="dark:text-yellow-300 text-[#098acc] underline text-lg  md:text-2xl">My Skills</p>
            </motion.div>
            <div id="Skills" className=" min-h-screen dark:bg-black mt-7 ">

                <div className="grid gap-6 
                grid-cols-1
                sm:grid-cols-2
                 justify-center items-center">

                    {/* md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5 */}

                    {/* Card 1*/}
                    <motion.div initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }} className="dark:bg-[#0b0f1a] border border-slate-800 rounded-2xl p-6 hover:scale-105 transition bg-gradient-to-r from-blue-500 to-cyan-400 dark:bg-gradient-to-r dark:from-[#3a398d] dark:to-[#0d171d]">
                        <h2 className="dark:text-white text-xl font-semibold">HTML</h2>
                        <p className="dark:text-slate-400 text-sm mt-2">
                            Semantic markup, accessibility, SEO-friendly structure
                        </p>

                        <div className="mt-4 dark:text-slate-400 text-sm flex justify-between">
                            <span>Proficiency</span>
                            <span>95%</span>
                        </div>

                        <div className="w-full h-1 bg-slate-800 rounded mt-2">
                            <div className="w-[95%] h-full bg-gradient-to-r from-[#9d209a] to-[#7385e1] dark:from-blue-500 dark:to-cyan-400 "></div>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#0b0f1a] border border-slate-800 rounded-2xl p-6 hover:scale-105 transition bg-gradient-to-r from-blue-500 to-cyan-400 dark:bg-gradient-to-r dark:from-[#3a398d] dark:to-[#0d171d]">
                        <h2 className="dark:text-white text-xl font-semibold">CSS</h2>
                        <p className="dark:text-slate-400 text-sm mt-2">
                            Flexbox, Grid, animations, custom properties & more
                        </p>

                        <div className="mt-4 dark:text-slate-400 text-sm flex justify-between">
                            <span>Proficiency</span>
                            <span>85%</span>
                        </div>

                        <div className="w-full h-1 bg-slate-800 rounded mt-2">
                            <div className="w-[85%] h-full bg-gradient-to-r from-[#9d209a] to-[#7385e1] dark:from-blue-500 dark:to-cyan-400 "></div>
                        </div>
                    </motion.div>

                    {/*  Card 3*/}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="dark:bg-[#0b0f1a] border border-slate-800 rounded-2xl p-6 hover:scale-105 transition bg-gradient-to-r from-blue-500 to-cyan-400 dark:bg-gradient-to-r dark:from-[#3a398d] dark:to-[#0d171d]">
                        <h2 className="dark:text-white text-xl font-semibold">Tailwind CSS</h2>
                        <p className="dark:text-slate-400 text-sm mt-2">
                            Utility-first styling, rapid UI development, custom themes
                        </p>

                        <div className="mt-4 dark:text-slate-400 text-sm flex justify-between">
                            <span>Proficiency</span>
                            <span>85%</span>
                        </div>

                        <div className="w-full h-1 bg-slate-800 rounded mt-2">
                            <div className="w-[85%] h-full bg-gradient-to-r from-[#9d209a] to-[#7385e1] dark:from-blue-500 dark:to-cyan-400 "></div>
                        </div>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="dark:dark:bg-[#0b0f1a] border border-slate-800 rounded-2xl p-6 hover:scale-105 transition bg-gradient-to-r from-blue-500 to-cyan-400 dark:bg-gradient-to-r dark:from-[#3a398d] dark:to-[#0d171d]">
                        <h2 className="dark:text-white text-xl font-semibold">JavaScript</h2>
                        <p className="dark:text-slate-400 text-sm mt-2">
                            ES6+, DOM manipulation, APIs, async/await patterns
                        </p>

                        <div className="mt-4 dark:text-slate-400 text-sm flex justify-between">
                            <span>Proficiency</span>
                            <span>70%</span>
                        </div>

                        <div className="w-full h-1 bg-slate-800 rounded mt-2">
                            <div className="w-[70%] h-full bg-gradient-to-r from-[#9d209a] to-[#7385e1] dark:from-blue-500 dark:to-cyan-400 "></div>
                        </div>
                    </motion.div>

                    {/* Card 5 */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="dark:bg-[#0b0f1a] border border-slate-800 rounded-2xl p-6 hover:scale-105 transition bg-gradient-to-r from-blue-500 to-cyan-400 dark:bg-gradient-to-r dark:from-[#3a398d] dark:to-[#0d171d]">
                        <h2 className="dark:text-white text-xl font-semibold">React.js</h2>
                        <p className="dark:text-slate-400 text-sm mt-2">
                            Component-based architecture, hooks (useState, useEffect), state management, reusable UI, virtual DOM, API integration
                        </p>

                        <div className="mt-4 dark:text-slate-400 text-sm flex justify-between">
                            <span>Proficiency</span>
                            <span>70%</span>
                        </div>

                        <div className="w-full h-1 bg-slate-800 rounded mt-2">
                            <div className="w-[70%] h-full bg-gradient-to-r from-[#9d209a] to-[#7385e1] dark:from-blue-500 dark:to-cyan-400 "></div>
                        </div>
                    </motion.div>



                </div>
            </div>
        </div>
    )
}

export default MySkills