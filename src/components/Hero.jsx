import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile_pic.jpeg";
import { motion } from "framer-motion"

const container = (delay) => ({
    hide:{x:-100, opacity:0},
    vis:{x:0, opacity:1, transition:{duration:0.5, delay:delay}}
});
const Hero = () =>{
    return (
        <div className="border-b border-neutral-500 pb-4 lg:mb-5">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h2 variants={container(0.25)} initial="hide" animate="vis"  className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">Sudeep Joshi</motion.h2>
                        <motion.span variants={container(0.5)} initial="hide" animate="vis" className="pb-5 bg-gradient-to-r from-pink-300 via-slate-700
                         to-blue-400 bg-clip-text text-3xl tracking-tight text-transparent">Aspiring Software Engineer <br></br>CS Major at Alabama A&M University</motion.span>
                        <motion.p variants={container(1)} initial="hide" animate="vis" className="my-2 max-w-xl py-5 text-lg font-light tracking-tight">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>

                <div className="w-fit lg:w-1/2 lg:p-10">
                    <div className="flex justify-center align-items">
                        <motion.img initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1.5}} className="rounded-2xl" height={700} width={500} src={profilePic} alt="profile-pic" />
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Hero;