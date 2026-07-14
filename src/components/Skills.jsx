import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT",
  "Git",
  "GitHub",
  "Postman",
  "HTML",
  "CSS"
];

function Skills() {
  return (
    <section className="py-32">

      <div className="container mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:border-blue-500 transition"
            >

              <h3 className="text-2xl font-semibold">
                {skill}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;