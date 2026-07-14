import {
  FaServer,
  FaDatabase,
  FaLock,
  FaBug,
  FaCloud,
  FaCode
} from "react-icons/fa";

import { motion } from "framer-motion";

const services = [

  {
    icon: <FaServer size={40} />,
    title: "Backend Development",
    description:
      "Building scalable backend applications using Node.js and Express."
  },

  {
    icon: <FaDatabase size={40} />,
    title: "Database Design",
    description:
      "Designing efficient MongoDB databases for modern web applications."
  },

  {
    icon: <FaLock size={40} />,
    title: "Authentication",
    description:
      "Secure login systems using JWT, bcrypt and role-based authorization."
  },

  {
    icon: <FaCloud size={40} />,
    title: "REST APIs",
    description:
      "Developing clean, secure and well-documented RESTful APIs."
  },

  {
    icon: <FaBug size={40} />,
    title: "Bug Fixing",
    description:
      "Debugging backend applications and improving application performance."
  },

  {
    icon: <FaCode size={40} />,
    title: "API Integration",
    description:
      "Integrating third-party APIs such as payment gateways and email services."
  }

];

function Services() {
  return (
    <section
      id="services"
      className="py-28 bg-slate-900"
    >

      <div className="container mx-auto">

        <h2 className="text-5xl font-bold text-center mb-5">
          Services
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Here's how I can help businesses build reliable backend solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <motion.div

              key={index}

              whileHover={{
                y: -10,
                scale: 1.03
              }}

              transition={{
                duration: 0.3
              }}

              className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-blue-500"

            >

              <div className="text-blue-500 mb-6">

                {service.icon}

              </div>

              <h3 className="text-2xl font-bold mb-4">

                {service.title}

              </h3>

              <p className="text-gray-400 leading-7">

                {service.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;