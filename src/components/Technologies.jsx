import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const Technologies = () => {
  const icons = [
    { Icon: RiReactjsLine, color: "text-cyan-400", duration: 2.5 },
    { Icon: TbBrandNextjs, color: "", duration: 3 },
    { Icon: SiMongodb, color: "text-green-500", duration: 5 },
    { Icon: DiRedis, color: "text-red-700", duration: 2 },
    { Icon: FaNodeJs, color: "text-green-500", duration: 6 },
    { Icon: BiLogoPostgresql, color: "text-sky-700", duration: 4 },
  ];

  return (
    <div className="pb-24">
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {icons.map(({ Icon, color, duration }, index) => (
          <motion.div
            key={index}
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 + index * 0.3, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <motion.div
              animate={{
                y: [0, -10],
              }}
              transition={{
                duration: duration,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <Icon className={`text-7xl ${color}`} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;