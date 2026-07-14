import { motion } from "framer-motion";

const stats = [
  {
    number: "5+",
    title: "Backend Projects",
    description: "Personal and learning projects built with JavaScript."
  },
  {
    number: "10+",
    title: "Technologies",
    description: "Modern tools and technologies used in development."
  },
  {
    number: "100%",
    title: "Commitment",
    description: "Dedicated to writing clean and maintainable code."
  },
  {
    number: "24/7",
    title: "Learning",
    description: "Continuously improving my backend development skills."
  }
];

function Stats() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="container mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          At A Glance
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03
              }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center transition"
            >

              <h1 className="text-5xl font-bold text-blue-500 mb-4">
                {stat.number}
              </h1>

              <h3 className="text-xl font-semibold mb-3">
                {stat.title}
              </h3>

              <p className="text-gray-400">
                {stat.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;