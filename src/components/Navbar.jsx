import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-6 lg:px-24">
      <div className="text-3xl lg:text-4xl font-bold text-white animate-pulse transition duration-300 hover:scale-110 hover:opacity-80 cursor-pointer">
        <span className="typewriter-text">Seo</span>
      </div>

      <div className="flex items-center justify-center gap-6 text-xl lg:text-2xl text-white">
        {/* LinkedIn */}
        <div className="group relative flex flex-col items-center">
          <a
            href="https://www.linkedin.com/in/sebastiencarl/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110 hover:opacity-60"
          >
            <FaLinkedin />
          </a>
          <span className="absolute top-8 text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
            LinkedIn
          </span>
        </div>

        {/* GitHub */}
        <div className="group relative flex flex-col items-center">
          <a
            href="https://github.com/httpsbz"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110 hover:opacity-60"
          >
            <FaGithub />
          </a>
          <span className="absolute top-8 text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
            GitHub
          </span>
        </div>

        {/* Twitter */}
        <div className="group relative flex flex-col items-center">
          <a
            href="https://twitter.com/sojikansai"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110 hover:opacity-60"
          >
            <FaSquareXTwitter />
          </a>
          <span className="absolute top-8 text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
            Twitter
          </span>
        </div>

        {/* Instagram */}
        <div className="group relative flex flex-col items-center">
          <a
            href="https://www.instagram.com/seo.q_"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110 hover:opacity-60"
          >
            <FaInstagram />
          </a>
          <span className="absolute top-8 text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
            Instagram
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;