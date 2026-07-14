import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">
      <div className="container mx-auto px-6">

        <div className="text-center">

          <h3 className="text-2xl font-bold text-white">
            Faith Samuel
          </h3>

          <p className="text-gray-400 mt-3">
            JavaScript Backend Developer
          </p>

          <p className="text-gray-500 mt-5 max-w-xl mx-auto leading-7">
            Passionate about building secure, scalable, and efficient backend
            applications using JavaScript, Node.js, Express.js, and MongoDB.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mt-8">

            <a
              href="https://github.com/Faith081"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500 transition duration-300 text-2xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/faith-samuel-b35b3a36b"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500 transition duration-300 text-2xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:fsamuel08166@gmail.com"
              className="text-gray-400 hover:text-blue-500 transition duration-300 text-2xl"
            >
              <FaEnvelope />
            </a>

          </div>

          {/* Copyright */}
          <div className="mt-10 border-t border-slate-800 pt-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Faith Samuel. All rights reserved.
            </p>

            <p className="text-gray-600 text-sm mt-2">
              Built with React, Tailwind CSS & JavaScript.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;