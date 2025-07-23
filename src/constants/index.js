import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a passionate and motivated junior full stack developer and recent IT graduate with a growing skill set in both front-end and back-end technologies. I have experience building projects using React, Next.js, Node.js, MySQL, and MongoDB, and I’m continuously expanding my knowledge to become a better developer. My goal is to contribute to real-world projects, collaborate with other developers, and create solutions that provide real value to users.`;

export const ABOUT_TEXT = `I am a dedicated and curious junior full stack developer with a strong passion for building clean, user-friendly, and efficient web applications. As a recent Information Technology graduate, I've gained hands-on experience through academic projects and personal work using technologies like React, Next.js, Node.js, MySQL, and MongoDB. My journey into web development started from a curiosity about how websites work and quickly turned into a full-blown passion for creating real-world solutions. I'm always eager to learn new tools, take on challenges, and grow as a developer. I enjoy working in collaborative environments and believe in writing code that's both functional and maintainable. Outside of tech, I enjoy staying active, learning new things, and exploring open-source communities where I can contribute and grow.`;

export const EXPERIENCES = [
  {
    year: "2025",
    role: "Full Stack Developer",
    company: "Colegio de San Juan de Letran Calamba - FMGSD",
    description: `As part of my on-the-job training, I contributed to the development of the EHS Self-Paced Learning System, an internal platform designed to support environmental health and safety education. My role involved assisting with system interface design, organizing digital content, and collaborating with the team to improve user experience for both administrators and clients.`,
    technologies: ["HTML", "PHP", "Tailwindcss", "MySQL"],
  }
];

export const PROJECTS = [
  {
    title: "りんな API PROJECT 2.0",
    image: project1,
    description:
      "This project utilizes an internal Rinna API provided by our school, designed to offer AI-powered text processing capabilities such as automatic tagging, summarization, and contextual analysis. Our goal was to create a simple and functional web-based tool that allows users to input raw text and receive intelligent feedback using the API.",
    technologies: ["HTML", "CSS", "Python", "Rinna API"],
  },
  {
    title: "Geosphere",
    image: project2,
    description:
      "GeoSphere is a mobile learning application designed to enhance the understanding of geology, specifically Plate Tectonics, for Grade 10 students. The app uses gamification, interactive content, and augmented reality (AR) to make learning more engaging, visual, and self-paced.",
    technologies: ["React Native", "Firebase", "AR.js", "JavaScript"],
  },
  {
    title: "EHS Self-Paced Learning System",
    image: project3,
    description:
      "The EHS Self-Paced Learning System is a desktop-based application designed to support the Environmental Health and Safety (EHS) program by providing a structured platform for client training and assessment. The system allows administrators to create and manage learning materials, monitor participant progress, and gather feedback through interactive surveys.",
    technologies: ["HTML", "MySQL","PHP", "Tailwindcss", "Javascript"],
  }
];

export const CONTACT = {
  address: "Calamba City, Laguna, PH 4027",
  phoneNo: "+63 976 209 8664",
  email: "oliveros.sebastiencarl@gmail.com",
};
