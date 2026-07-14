import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="container mx-auto flex items-center justify-between py-5">

        <h1 className="text-2xl font-bold text-blue-500">
          Faith Samuel
        </h1>

        <nav className="hidden md:flex gap-8 text-gray-300">

          <a href="#home" className="hover:text-blue-500 transition">
            Home
          </a>

          <a href="#about" className="hover:text-blue-500 transition">
            About
          </a>

          <a href="#projects" className="hover:text-blue-500 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-500 transition">
            Contact
          </a>

        </nav>

        <div className="flex gap-5 text-xl">

          <a
            href="https://github.com/Faith081"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/faith-samuel-b35b3a36b"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </header>
  );
}

export default Navbar;