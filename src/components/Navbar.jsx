import logo from "../assets/sudeepLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-6 w-10" src={logo} alt="nav-logo" />
        </div>
        <div className="flex m-8 items-center justify-center gap-6 text-3xl">
            <a href="https://www.linkedin.com/in/sudeepjoshi456/"><FaLinkedin /></a>
            <a href="https://github.com/SudeepJoshi456"><FaGithub /></a>
            <a href="https://leetcode.com/u/joshisudipsj01/"><SiLeetcode /></a>
        </div>
    </nav>
  )
}

export default Navbar