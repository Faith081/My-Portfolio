import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Health Insurance API",

    description:
      "A secure backend application for managing health insurance plans, user registration, authentication, policies, claims, and payments. Built with Node.js, Express, and MongoDB using RESTful API principles.",

    features: [
      "User Registration & Login",
      "JWT Authentication",
      "Health Insurance Plans",
      "Policy Management",
      "Claims Processing",
      "Paystack Payment Integration",
      "Email Notifications",
      "RESTful API"
    ],

    technologies: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt",
      "Paystack",
      "Nodemailer"
    ],

    github: "https://github.com/Faith081"
  },

  {
    title: "Inventory Management System",

    description:
      "A backend system for managing products, stock levels, categories, and users. Designed to simplify inventory operations with clean APIs.",

    technologies: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],

    github: "https://github.com/Faith081"
  },

  {
    title: "Authentication API",

    description:
      "A secure authentication system featuring user registration, login, password hashing, JWT authentication, and protected routes.",

    technologies: [
      "Node.js",
      "Express.js",
      "JWT",
      "bcrypt"
    ],

    github: "https://github.com/Faith081"
  }
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-slate-950"
    >
      <div className="container mx-auto">

        <h2 className="text-5xl font-bold text-center mb-5">
          Featured Projects
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Some backend projects I've built while sharpening my JavaScript skills.
        </p>

        <div className="space-y-10">

          {projects.map((project, index) => (

            <motion.div

              key={index}

              whileHover={{
                scale: 1.02
              }}

              className="bg-slate-900 border border-slate-800 rounded-3xl p-10"

            >

              <h2 className="text-3xl font-bold mb-5 text-blue-500">

                {project.title}

              </h2>

              <p className="text-gray-300 leading-8 mb-8">

                {project.description}

              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                {project.technologies.map((tech, index) => (

                  <span
                    key={index}
                    className="bg-blue-600 px-4 py-2 rounded-full"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <a

                href={project.github}

                target="_blank"

                rel="noreferrer"

                className="inline-flex items-center gap-3 text-blue-400 hover:text-blue-300"

              >

                <FaGithub />

                View Repository

              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;