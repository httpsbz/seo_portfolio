import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/SebastienOliverosProfile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  initial: { x: -100, opacity: 0 },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35 px-6 lg:px-20">
      <div className="flex flex-wrap">

        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:pl-48">

            <motion.h1
              {...container(0)}
              viewport={{ once: false, amount: 0.5 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Sebastien Oliveros
            </motion.h1>

            <motion.span
              {...container(0.5)}
              viewport={{ once: false, amount: 0.5 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-300 bg-clip-text text-transparent text-4xl tracking-tight"
            >
              Aspiring Software Developer
            </motion.span>

            <motion.p
              {...container(1)}
              viewport={{ once: false, amount: 0.5 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              {...container(1.2)}
              viewport={{ once: false, amount: 0.5 }}
              className="mt-4 hidden lg:flex gap-4"
            >
              <a
                href="/Oliveros_CV.pdf"
                download="Oliveros_CV.pdf"
                className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
              >
                Download CV
              </a>
              <a
                href="mailto:oliveros.sebastiencarl@gmail.com"
                className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
              >
                Let's Connect
              </a>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex flex-col items-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              viewport={{ once: false, amount: 0.5 }}
              src={profilePic}
              alt="Sebastien Oliveros"
              className="w-[300px] sm:w-[400px] lg:w-[600px] h-auto rounded-2xl object-cover filter brightness-75"
            />

            <motion.div
              {...container(1.5)}
              viewport={{ once: false, amount: 0.5 }}
              className="mt-6 flex flex-col gap-4 lg:hidden"
            >
              <a
                href="/Oliveros_CV.pdf"
                download="Oliveros_CV.pdf"
                className="border border-white text-white px-6 py-2 rounded text-center hover:bg-white hover:text-black transition"
              >
                Download CV
              </a>
              <a
                href="mailto:oliveros.sebastiencarl@gmail.com"
                className="border border-white text-white px-6 py-2 rounded text-center hover:bg-white hover:text-black transition"
              >
                Let's Connect
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;