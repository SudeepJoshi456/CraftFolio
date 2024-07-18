import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-18">
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{delay:0.5}}className="my-10 text-center text-4xl">Get in Touch :)</motion.h1>
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className="mb-10 text-center">
            <p>{CONTACT.address}</p>
            <p>{CONTACT.phoneNo}</p>
            <a href={CONTACT.email} className="border-b">{CONTACT.email}</a>
        </motion.div>
    </div>
  )
}

export default Contact