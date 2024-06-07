import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
// import Work from "./pages/Work"
import AboutMe from "./pages/AboutMe"

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };
  return (
    <>
    <div className={`flex flex-row h-fit  w-full  ${isNavbarVisible && (" overflow-hidden")} `}>
    {isNavbarVisible && (
      <div className="w-fit bg-opacity-75 h-screen  ">
        <Navbar/>

      </div>
    )}
      <div className="w-full">
      <Header toggleNavbar={toggleNavbar} />
      {/* <Work/> */}
      <AboutMe/>
      <Footer/>
      </div>
    </div>
    
    
    </>
  )
}

export default App
