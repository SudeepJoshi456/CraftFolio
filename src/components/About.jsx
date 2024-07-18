import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b pb-4 border-neutral-500">
        <h2 className="my-16 text-center text-4xl">About 
        <span className=" text-slate-50"> Me</span> </h2>
        <div className="flex flex-wrap">
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}} className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img src={aboutImg} alt="about" className="rounded-2xl" />
                </div>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:0.75}} className="w-full lg:w-1/2">
                <div className="flex flex-col justify-center lg:justify-start">
                    <p className="items-center mt-10 max-w-xl lg:ml-8">{ABOUT_TEXT}</p>
                    <div className="flex mt-5 items-center justify-center gap-6 text-3xl">
                        <a href="https://www.linkedin.com/in/sudeepjoshi456/"><FaLinkedin /></a>
                        <a href="https://github.com/SudeepJoshi456"><FaGithub /></a>
                        <a href="https://leetcode.com/u/joshisudipsj01/"><SiLeetcode /></a>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About