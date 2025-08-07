import { useRef } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/SebastienOliverosProfile.jpg";
import { motion, useInView } from "framer-motion";

const container = (direction = -100) => ({
  hidden: { x: direction, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
});

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const mobileButtonRef = useRef(null);

  const titleInView = useInView(titleRef, { threshold: 0.5 });
  const subtitleInView = useInView(subtitleRef, { threshold: 0.5 });
  const paraInView = useInView(paraRef, { threshold: 0.5 });
  const buttonInView = useInView(buttonRef, { threshold: 0.5 });
  const imageInView = useInView(imageRef, { threshold: 0.5 });
  const mobileButtonInView = useInView(mobileButtonRef, { threshold: 0.5 });

  return (
    <div className="pb-24 lg:pb-20 lg:mb-35 px-6 lg:px-20">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:pl-48">

            <motion.h1
              ref={titleRef}
              variants={container(-100)}
              initial="hidden"
              animate={titleInView ? "visible" : "hidden"}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Sebastien Oliveros
            </motion.h1>

            <motion.span
              ref={subtitleRef}
              variants={container(-100)}
              initial="hidden"
              animate={subtitleInView ? "visible" : "hidden"}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-300 bg-clip-text text-transparent text-4xl tracking-tight"
            >
              Junior Web Developer
            </motion.span>

            <motion.p
              ref={paraRef}
              variants={container(-100)}
              initial="hidden"
              animate={paraInView ? "visible" : "hidden"}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              ref={buttonRef}
              variants={container(-100)}
              initial="hidden"
              animate={buttonInView ? "visible" : "hidden"}
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
              ref={imageRef}
              initial={{ x: 100, opacity: 0 }}
              animate={imageInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={profilePic}
              alt="Sebastien Oliveros"
              className="w-[300px] sm:w-[400px] lg:w-[600px] h-auto rounded-2xl object-cover filter brightness-75"
            />

            <motion.div
              ref={mobileButtonRef}
              variants={container(100)}
              initial="hidden"
              animate={mobileButtonInView ? "visible" : "hidden"}
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