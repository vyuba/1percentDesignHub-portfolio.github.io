import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Work from "./pages/Work"
import AboutMe from "./pages/AboutMe"
import Home from "./pages/Home"

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };
  return (
    <>
    <BrowserRouter>
    <div className={`flex flex-row h-fit  w-full  ${isNavbarVisible && (" overflow-hidden")} `}>
    {isNavbarVisible && (
      <div className="w-fit bg-opacity-75 h-screen transition-all fixed ">
        <Navbar/>
        <div className="w-full flex items-center relative bottom-20 left-10">
          <button className="font-Utara font-bold text-lg capitalize bg-black text-white px-5 py-2 ">click to download cv</button>
        </div>
      </div>
    )}
      <div className={`w-full h-full ${isNavbarVisible && (" ml-[300px]")}`}>
      <Header toggleNavbar={toggleNavbar} isNavbarVisible={isNavbarVisible} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Work" element={<Work/>}  />
        <Route path="/Aboutme" element={<AboutMe/>}  />
      </Routes>
      <Footer/>
      </div>
    </div>
      </BrowserRouter>
    </>
  )
}

export default App
