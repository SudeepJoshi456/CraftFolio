import { DiDjango } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";

const variants = (duration) => ({
    initial:{y:-10},
    animate:{y:[10,-10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat: Infinity,
            repeatType: "reverse",
    }}
});

const Tech = () => {
  return (
    <div className="border-b border-neutral-500 pb-10">
        <motion.h1 whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4 ">
            <motion.div variants={variants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-500 p-4">
                <FaPython className="text-8xl text-blue-400"/>
            </motion.div>
            <motion.div variants={variants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-500 p-4">
                <IoLogoJavascript className="text-8xl text-yellow-200"/>
            </motion.div>
            <motion.div variants={variants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-500 p-4">
                <DiDjango className="text-8xl text-green-900"/>
            </motion.div>
            <motion.div variants={variants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-500 p-4">
                <FaReact className="text-8xl text-cyan-300"/>
            </motion.div>
            <motion.div variants={variants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-500 p-4">
                <RiNextjsFill className="text-8xl text-slate-400"/>
            </motion.div>
            <motion.div variants={variants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-500 p-4">
                <IoLogoFirebase className="text-8xl text-yellow-600"/>
            </motion.div>
        </motion.div>
    </div>
  );
}

export default Tech;