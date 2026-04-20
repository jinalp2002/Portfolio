
import Themetoggle from "./Themetoggle";

type Theme = "light" | "dark"

type props = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const Navbar = ({ theme, setTheme }: props) => {


    return (
        <div className="sticky top-0 z-20 h-9 md:h-28 bg-primary dark:bg-[#052f4a]  dark:text-white text-black flex items-center justify-between px-4">


            <div className="flex gap-4 text-xs sm:text-2xl md:text-3xl justify-between items-between pt-2 ml-auto">
                <a href="#" className="hover:underline cursor-pointer">Home</a>
                <a href="#About" className="hover:underline cursor-pointer">About</a>
                <a href="#Skills" className="hover:underline cursor-pointer">Skills</a>
                <a href="#Projects" className="hover:underline cursor-pointer">Projects</a>

            </div>
            <div className="flex  ml-2 sm:ml-auto">
                <Themetoggle theme={theme} setTheme={setTheme} />
                <a href="#Contact" className="text-xs md:text-xl items-center ml-3 sm:ml-6 h-6 md:h-14  w-24 md:w-36 dark:bg-[#0487d9] bg-[#01a8ae] rounded-full mt-2 flex justify-center">Connect me</a>
            </div>

        </div>
    )
}

export default Navbar