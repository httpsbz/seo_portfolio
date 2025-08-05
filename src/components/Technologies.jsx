import { useState } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs, FaHtml5, FaCss3Alt, FaPhp } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const Technologies = () => {
  const [hoveredTech, setHoveredTech] = useState("");

  const categories = [
    {
      title: "Frontend",
      items: [
        { Icon: FaHtml5, name: "HTML5", color: "text-orange-600", duration: 2 },
        { Icon: FaCss3Alt, name: "CSS3", color: "text-blue-500", duration: 2 },
        { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500", duration: 2.5 },
        { Icon: RiReactjsLine, name: "React", color: "text-cyan-400", duration: 2.5 },
        { Icon: TbBrandNextjs, name: "Next.js", color: "", duration: 3 },
      ],
    },
    {
      title: "Backend",
      items: [
        { Icon: FaPhp, name: "PHP", color: "text-indigo-600", duration: 3 },
        { Icon: FaNodeJs, name: "Node.js", color: "text-green-500", duration: 6 },
        { Icon: DiRedis, name: "Redis", color: "text-red-700", duration: 2 },
      ],
    },
    {
      title: "Database",
      items: [
        { Icon: SiMongodb, name: "MongoDB", color: "text-green-500", duration: 5 },
        { Icon: BiLogoPostgresql, name: "PostgreSQL", color: "text-sky-700", duration: 4 },
      ],
    },
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

      {categories.map((category, catIndex) => (
        <div key={catIndex} className="mb-12">
          <h3 className="mb-6 text-center text-2xl font-semibold">{category.title}</h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {category.items.map(({ Icon, name, color, duration }, index) => (
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
                className="relative"
                onMouseEnter={() => setHoveredTech(name)}
                onMouseLeave={() => setHoveredTech("")}
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
      ))}

      <div className="mt-8 text-center text-2xl h-8">
        <motion.span
          key={hoveredTech}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {hoveredTech}
        </motion.span>
      </div>
    </div>
  );
};

export default Technologies;
