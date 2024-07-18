import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
      <div className="border-b border-neutral-500 pb-4">
          <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className="my-20 text-center text-4xl">Professional Experience</motion.h1>
          <div>
              {EXPERIENCES.map((experience, index) => (
                  <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                      <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className="w-full lg:w-1/4">
                          <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                      </motion.div>
                      <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
                          <h5 className="mb-2 font-semibold">
                              {experience.role} - {" "}
                              <span className="text-sm text-slate-300">{experience.company}</span>
                          </h5>
                          <p className=" text-slate-400">
                              {experience.description}
                          </p>
                          <p className="m-2">
                          {experience.technologies.map((tech, index) => (
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

export default Experience;