import assets from "../assets/assets"
import About from "./About"
import Contact from "./Contact"
import MySkills from "./MySkills"
import Projects from "./Projects"


const Hero = () => {
    return (

        < div className="min-h-screen dark:bg-[#001927]" >
            <div className="dark:bg-[#001927] pl-2">
                <h1 className="text-3xl md:text-6xl sm:text-4xl font-serif bg-gradient-to-r from-[#9d209a] to-[#0c1e73] bg-clip-text text-transparent pt-4 font-bold dark:from-[#ffe186] dark:to-[#80640e] ">Frontend Developer</h1>
                <h2 className="text-[8px] md:text-lg sm:text-xs dark:text-slate-200 text-black font-serif pt-3">Crafting pixel-perfect, animated web experiences <br />
                    with modern tools and creative vision.</h2>
                {/* <h2 className="text-sm font-serif dark:from-[#ffc61b] dark:to-[#560280] bg-gradient-to-r bg-clip-text text-transparent from-[#34c7f9] to-[#0c3948] "></h2> */}


            </div>
            <div className="flex gap-6 mt-5 ml-7 ">
                <a href="#Projects" className="flex bg-[#01a8ae] rounded-full w-36 md:w-44 pl-2 text-xs md:text-xl pt-1 text-white cursor-pointer dark:bg-[#0487d9] ml-2 md:h-20 ">View my Projects
                    <img src={assets.arrow_icon} alt="" className="h-5 w-5 ml-2" />
                </a>
                <a href="#About" className="bg-[#01a8ae] rounded-full w-20 pl-2 text-xs pt-1 text-white cursor-pointer dark:bg-[#0487d9]">About me</a>
            </div>

            <div className="w-full h-[1px] bg-slate-400 mt-7"></div>
            <About />
            <div className="w-full h-[1px] bg-slate-400 mt-7"></div>
            <MySkills />
            <div className="w-full h-[1px] bg-slate-400 mt-7"></div>
            <Projects />
            <div className="w-full h-[1px] bg-slate-400 mt-7"></div>
            <Contact />


        </ div>
    )
}

export default Hero