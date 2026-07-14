import { motion } from "framer-motion";

const journey = [
  {
    year: "2024",
    title: "Graduated",
    description:
      "Graduated with a Bachelor's degree in Computer Science from Taraba State University."
  },

  {
    year: "2024",
    title: "Started Backend Development",
    description:
      "Focused on JavaScript, Node.js and Express.js while learning backend architecture and REST APIs."
  },

  {
    year: "2025",
    title: "Built Backend Projects",
    description:
      "Developed projects including an Authentication API, Health Insurance API and Inventory Management System."
  },

  {
    year: "Present",
    title: "Freelance Journey",
    description:
      "Currently building my portfolio and preparing to work with businesses that need reliable backend solutions."
  }

];

function Journey() {
  return (
    <section
      id="journey"
      className="py-28 bg-slate-900"
    >

      <div className="container mx-auto">

        <h2 className="text-5xl font-bold text-center mb-5">
          My Journey
        </h2>

        <p className="text-center text-gray-400 mb-20">
          A quick look at my growth as a backend developer.
        </p>

        <div className="relative border-l-2 border-blue-500 ml-5">

          {journey.map((item, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, x: -50 }}

              whileInView={{ opacity: 1, x: 0 }}

              viewport={{ once: true }}

              transition={{ duration: 0.5 }}

              className="mb-16 ml-10 relative"

            >

              <div className="absolute -left-[51px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-900"></div>

              <span className="text-blue-400 font-bold">
                {item.year}
              </span>

              <h3 className="text-2xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3 leading-8">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Journey;