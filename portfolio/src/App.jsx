import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
// import Work from "./pages/Work"
import AboutMe from "./pages/AboutMe"

function App() {

  return (
    <>
    <div className="flex flex-row  w-full ">
    <Navbar/>
      <div className="w-full">
      <Header/>
      {/* <Work/> */}
      <AboutMe/>
      <Footer/>
      </div>
    </div>
    
    
    </>
  )
}

export default App
