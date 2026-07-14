import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-slate-950"
    >
      <div className="container mx-auto">

        <h2 className="text-5xl font-bold text-center mb-5">
          Let's Work Together
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Interested in working together? I'd love to hear from you.
        </p>

        <div className="max-w-3xl mx-auto bg-slate-900 rounded-3xl p-10 border border-slate-800">

          <div className="space-y-8">

            <div className="flex items-center gap-5">
              <FaEnvelope className="text-blue-500 text-3xl" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-400">
                  fsamuel08166@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaGithub className="text-blue-500 text-3xl" />
              <div>
                <h3 className="font-bold">GitHub</h3>
                <a
                  href="https://github.com/Faith081"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-blue-400"
                >
                  github.com/Faith081
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaLinkedin className="text-blue-500 text-3xl" />
              <div>
                <h3 className="font-bold">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/faith-samuel-b35b3a36b"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-blue-400"
                >
                  linkedin.com/in/faith-samuel-b35b3a36b
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;