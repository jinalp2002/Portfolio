import { useEffect } from 'react';
import assets from '../assets/assets'


type Theme = "light" | "dark"

type props = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}
const Themetoggle = ({ theme, setTheme }: props) => {

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
        localStorage.setItem('theme', theme)
    }, [theme])


    return (
        <div>
            <button className='flex justify-between items-center pt-2 ml-auto'>
                {theme === "dark" ? (

                    <img
                        onClick={() => setTheme("light")}
                        src={assets.sun_icon}
                        className='size-6 md:size-12 p-1.5 border border-gray-500 rounded-full'
                        alt="" />
                ) : (
                    <img
                        onClick={() => setTheme("dark")}
                        src={assets.moon_icon}
                        className='size-6 md:size-12 p-1.5 border border-gray-500 rounded-full'
                        alt="" />
                )}
            </button>


        </div>
    )
}

export default Themetoggle