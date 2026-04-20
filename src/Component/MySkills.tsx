

const MySkills = () => {
    return (
        <div>
            <div className="flex items-center gap-1 mt-7">
                <div className=" w-6 h-[2px] bg-slate-400"></div>
                <p className="dark:text-yellow-300 text-[#098acc] underline">My Skills</p>
            </div>
            <div id="Skills" className=" min-h-screen dark:bg-black mt-7 ">

                <div className="grid gap-6 
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-3
                ">

                    {/* Card 1*/}
                    <div className="dark:bg-[#0b0f1a] border border-slate-800 rounded-2xl p-6 hover:scale-105 transition bg-gradient-to-r from-blue-500 to-cyan-400 dark:bg-gradient-to-r dark:from-[#3a398d] dark:to-[#0d171d]">
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
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#0b0f1a] border border-slate-800 rounded-2xl p-6 hover:scale-105 transition bg-gradient-to-r from-blue-500 to-cyan-400 dark:bg-gradient-to-r dark:from-[#3a398d] dark:to-[#0d171d]">
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
                    </div>

                    {/*  Card 3*/}
                    <div className="dark:bg-[#0b0f1a] border border-slate-800 rounded-2xl p-6 hover:scale-105 transition bg-gradient-to-r from-blue-500 to-cyan-400 dark:bg-gradient-to-r dark:from-[#3a398d] dark:to-[#0d171d]">
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
                    </div>

                    {/* Card 4 */}
                    <div className="dark:dark:bg-[#0b0f1a] border border-slate-800 rounded-2xl p-6 hover:scale-105 transition bg-gradient-to-r from-blue-500 to-cyan-400 dark:bg-gradient-to-r dark:from-[#3a398d] dark:to-[#0d171d]">
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
                    </div>

                    {/* Card 5 */}
                    <div className="dark:bg-[#0b0f1a] border border-slate-800 rounded-2xl p-6 hover:scale-105 transition bg-gradient-to-r from-blue-500 to-cyan-400 dark:bg-gradient-to-r dark:from-[#3a398d] dark:to-[#0d171d]">
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
                    </div>



                </div>
            </div>
        </div>
    )
}

export default MySkills