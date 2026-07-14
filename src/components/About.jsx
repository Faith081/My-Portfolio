import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="container mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/profile.jpg"
              alt="Faith Samuel"
              className="rounded-3xl shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-blue-400">
              JavaScript Backend Developer
            </h3>

            <p className="text-gray-300 leading-8 mb-5">
              I'm Faith Samuel, a backend developer focused on building secure,
              scalable, and maintainable web applications using JavaScript.
            </p>

            <p className="text-gray-300 leading-8 mb-5">
              My expertise includes developing RESTful APIs, implementing
              authentication and authorization, integrating databases, and
              creating server-side solutions with Node.js, Express.js, and
              MongoDB.
            </p>

            <p className="text-gray-300 leading-8">
              I'm currently building my freelancing career by delivering clean,
              reliable backend solutions that help businesses grow.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;