import Logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";

 const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={Logo} alt="Logo" />
      </div>
      <div className="hidden md:flex items-center justify-center gap-8 text-lg">
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#technologies" className="hover:text-blue-500">Technologies</a>
        <a href="#experience" className="hover:text-blue-500">Experience</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-2xl">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;