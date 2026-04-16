

const Projects = () => {
    return (
        <div id="Projects" className="mt-7">
            <div className="bg-white dark:bg-[#14141a] rounded-xl shadow-lg p-5 ">
                <div className="flex items-center gap-1 ">
                    <div className=" w-6 h-[2px] bg-slate-400"></div>
                    <p className="dark:text-yellow-300 text-[#098acc] underline">Projects</p>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7 ">

                    {/* Project 1 */}
                    <div className="dark:bg-[#0b0f1a] border border-slate-800 rounded-2xl p-6  bg-gradient-to-r from-[#3a0425] to-[#d387b6] dark:bg-gradient-to-r dark:from-[#314755] dark:to-[#26a0da] mt-7">

                        <h2 className="text-xl font-bold  dark:text-white text-yellow-200">
                            Jewellery
                        </h2>

                        <p className="text-slate-200 dark:text-gray-300 mt-2">
                            A modern jewellery store UI ,Redux Toolkit,
                            and responsive product layout.
                        </p>

                        <div className="flex flex-wrap gap-2 mt-3  ">
                            <span className="text-[10px] w-16 h-8 px-2 py-1 bg-gray-200 dark:bg-slate-400  rounded">
                                Javascript
                            </span>
                            <span className="text-[10px] w-16 h-8 px-2 py-1 bg-gray-200 dark:bg-slate-400 rounded">
                                React
                            </span>
                            <span className="text-[10px] w-16 h-8 px-2 py-1 bg-gray-200 dark:bg-slate-400  rounded">
                                Tailwind CSS
                            </span>
                            <span className="text-[10px] w-16 h-8 px-2 py-1 bg-gray-200 dark:bg-slate-400  rounded">
                                Redux Toolkit
                            </span>

                        </div>

                        <div className="flex gap-3 mt-4">
                            <a href="https://jdgems-jewellery.netlify.app/" className="px-4 py-2 bg-[#bfa14a] text-black rounded-lg text-sm">
                                View Priject
                            </a>
                            {/* <a href="https://github.com/jinalp2002/Jewellery" className="px-4 py-2 border bg-[#bfa14a] border-gray-400 dark:border-gray-600 rounded-lg text-sm">
                                Code
                            </a> */}
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="dark:bg-[#0b0f1a] border border-slate-800 rounded-2xl  bg-gradient-to-r from-[#3a0425] to-[#d387b6] dark:bg-gradient-to-r dark:from-[#314755] dark:to-[#26a0da] mt-7 ">

                        <h2 className="text-xl font-bold  dark:text-white text-yellow-200">
                            Country
                        </h2>

                        <p className="text-slate-200 dark:text-gray-300 mt-2">
                            A responsive React web application that fetches country data from an external API and displays details like flag, capital, population, and region.
                        </p>

                        <div className="flex flex-wrap gap-2 mt-3  ">
                            <span className="text-[10px] w-16 h-8 px-2 py-1 bg-gray-200 dark:bg-slate-400 rounded">
                                React
                            </span>
                            <span className="text-[10px] w-16 h-8 px-2 py-1 bg-gray-200 dark:bg-slate-400  rounded">
                                CSS
                            </span>
                            <span className="text-[10px] w-16 h-8 px-2 py-1 bg-gray-200 dark:bg-slate-400  rounded">
                                Javascript
                            </span>

                        </div>

                        <div className="flex gap-3 mt-4">
                            <a href="https://cool-puppy-8a40db.netlify.app/" className="px-4 py-2 bg-[#bfa14a] text-black rounded-lg text-sm">
                                View Project
                            </a>
                            {/* <a href="https://github.com/jinalp2002/Country" className="px-4 py-2 border bg-[#bfa14a] border-gray-400 dark:border-gray-600 rounded-lg text-sm">
                                Code
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects