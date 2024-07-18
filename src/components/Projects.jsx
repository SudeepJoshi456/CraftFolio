import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-500 pb-4">
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1}} className="my-10 lg:my-20 text-center text-4xl">Projects</motion.h1>
        <div>
            {PROJECTS.map((project, index) => (
                <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className="w-full lg:w-1/4">
                        <img className="rounded-2xl mb-6" height={200} width={200} src={project.image} alt={project.title}/>
                    </motion.div>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
                        <h5 className="mb-2 font-semibold">
                            <span className="text-sm text-slate-300">{project.title}</span>
                        </h5>
                        <p className=" text-slate-400">
                            {project.description}
                        </p>
                        <p className="m-2">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="m-2 border bg-purple-200 rounded-lg text-slate-900 hover:font-bold hover:bg-purple-500">{tech}</span>
                        ))}
                        </p>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects;