import React from 'react'
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import About from "./components/About"
import Tech from "./components/Tech"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className = "overflow-x-hidden text-neutral-400 antialiased selection:bg-gray-950 selection:text-cyan-400">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full 
        items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      <div className="container mx-6 px-8">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App