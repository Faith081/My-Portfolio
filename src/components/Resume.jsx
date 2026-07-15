import { FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

function Resume() {
  return (
    <section className="py-28 bg-slate-900">

      <div className="container mx-auto">

        <motion.div

          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}

          className="max-w-4xl mx-auto bg-slate-950 rounded-3xl border border-slate-800 p-12 text-center"

        >

          <FaFilePdf className="text-red-500 text-6xl mx-auto mb-6" />

          <h2 className="text-4xl font-bold mb-5">
            My Resume
          </h2>

          <p className="text-gray-400 leading-8 mb-10">

            Want a complete overview of my education,
            technical skills, backend projects,
            and experience?

            Download my resume below.

          </p>

          <a

            href="/Faith_Samuel_CV.pdf"

            download

            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl inline-block"

          >

            Download CV

          </a>

        </motion.div>

      </div>

    </section>
  );
}

export default Resume;