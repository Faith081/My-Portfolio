import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-blue-500 text-xl mb-3">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Faith Samuel
          </h1>

          <div className="text-3xl mt-4 text-blue-400 font-semibold">

            <TypeAnimation
              sequence={[
                "JavaScript Developer",
                2000,
                "Backend Developer",
                2000,
                "Node.js Developer",
                2000,
                "REST API Developer",
                2000,
              ]}
              repeat={Infinity}
            />

          </div>

          <p className="text-gray-400 mt-8 leading-8 text-lg">

            I build secure, scalable, and high-performance backend applications
            using JavaScript, Node.js, Express.js, and MongoDB. I help businesses
            create reliable REST APIs, authentication systems, and database-driven
            solutions.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-xl"
            >
              View Projects
            </a>

            <a
              href="/Faith_Samuel_CV.pdf"
              download
              className="border border-blue-500 px-7 py-4 rounded-xl hover:bg-blue-600 transition"
            >
              Download CV
            </a>

          </div>

        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center relative"
        >
          <div className="absolute w-[450px] h-[450px] bg-blue-600 rounded-full blur-3xl opacity-20"></div>

          <img
            src="/profile.jpg"
            alt="Faith Samuel"
            className="relative w-[420px] rounded-full border-4 border-blue-500 shadow-2xl shadow-blue-700"
          />
        </motion.div>



      </div>
    </section >
  );
}

export default Hero;