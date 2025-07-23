import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const slideDown = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const slideRight = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const slideLeft = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const slideUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 px-6 lg:px-20">
      <motion.h2
        variants={slideDown}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="my-10 text-center text-4xl text-white"
      >
        Get in Touch
      </motion.h2>

      <div className="text-center tracking-tighter text-white">
        <motion.p
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>

        <motion.p
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>

        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <a
            href={`mailto:${CONTACT.email}`}
            className="border-b inline-block mt-4"
          >
            {CONTACT.email}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
