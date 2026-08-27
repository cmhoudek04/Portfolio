import "../App.css";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";

const { h1: MotionH1, div: MotionDiv } = motion;

export default function Home() {
  const reduce = useReducedMotion();

  const fade = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" },
    }),
  };

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      {/* Subtle panel behind the welcome text so it stays readable over the particles */}
      <div className="mx-auto max-w-4xl rounded-2xl bg-[#0a1c27]/60 px-6 py-8 backdrop-blur-sm ring-1 ring-white/10 sm:px-10 sm:py-10">
        {/* General text at top of page */}
        <MotionH1
          className="font-mono text-white pb-4"
          variants={fade}
          custom={0}
          initial="hidden"
          animate="show"
        >
          Welcome
        </MotionH1>

        <MotionDiv
          className="max-w-6xl mx-auto p-4"
          variants={fade}
          custom={1}
          initial="hidden"
          animate="show"
        >
          <p className="font-mono text-2xl text-white">
            My name is <span className="text-yellow-200">Conner Houdek</span>. I am a junior in software engineering at Iowa State University who is <span className="text-yellow-200">passionate</span> about <span className="text-yellow-200">software</span> and <span className="text-yellow-200">problem solving</span>.
            I am experienced with several <span className="text-yellow-200">languages</span>, <span className="text-yellow-200">frameworks</span>, and <span className="text-yellow-200">tools </span>
            alongside a growing list of <span className="text-yellow-200">completed</span> and <span className="text-yellow-200">varied</span> projects. I am seeking opportunities to utilize skills
            with <span className="text-yellow-200">web development</span>, <span className="text-yellow-200">embedded systems</span>, and <span className="text-yellow-200">app development</span>.
          </p>
        </MotionDiv>

        {/* Container which stores icon-button links to github and linkedin */}
        <MotionDiv
          className="mt-6 flex justify-center gap-6"
          variants={fade}
          custom={2}
          initial="hidden"
          animate="show"
        >
          <a
            href="https://github.com/cmhoudek04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-yellow-200 transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <FaGithub className="text-yellow-200 text-5xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/conner-houdek-930b2a32a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-yellow-200 transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <FaLinkedin className="text-yellow-200 text-5xl" />
          </a>
        </MotionDiv>

        {/* Container with button to download resume */}
        <MotionDiv
          className="mt-6 flex justify-center"
          variants={fade}
          custom={3}
          initial="hidden"
          animate="show"
        >
          <a
            href={`${import.meta.env.BASE_URL}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download="Resume_Conner_Houdek.pdf"
            className="flex items-center px-4 py-3 bg-yellow-200 text-black rounded shadow-lg shadow-yellow-200/20 transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <FaDownload className="text-black text-xl mr-4" /> <span className="text-xl font-mono text-black">Download Resume</span>
          </a>
        </MotionDiv>
      </div>
    </main>
  )
}
