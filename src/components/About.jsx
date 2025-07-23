import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="pb-16">
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="my-20 text-center text-4xl font-semibold"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center justify-between px-4 gap-8 lg:gap-32">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center lg:justify-end w-full lg:w-1/2"
        >
          <div className="relative w-[400px] sm:w-[450px] md:w-[500px] h-[400px] sm:h-[450px] md:h-[500px] rounded-xl shadow-lg overflow-hidden">
            <img
              src={aboutImg}
              alt="about"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-8"
        >
          <p className="max-w-xl pt-0 pb-2 text-neutral-200 text-lg leading-relaxed">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
