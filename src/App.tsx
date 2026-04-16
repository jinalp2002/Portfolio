import { useState } from "react";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./Component/Footer";




export default function App() {
  type Theme = "light" | "dark";

  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem('theme') as Theme) || 'light'
  );


  return (
    <>
      <ToastContainer />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Footer />

    </>
  )
}
