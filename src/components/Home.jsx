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
      <div className="mx-auto max-w-4xl rounded-2xl bg-[#0a1c27]/60 px-4 py-6 backdrop-blur-sm ring-1 ring-white/10 sm:px-10 sm:py-10">
        {/* General text at top of page */}
        <MotionH1
          className="font-mono text-white pb-4 text-3xl sm:text-5xl"
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
          <p className="font-mono text-lg text-white sm:text-2xl">
            My name is Conner Houdek, a Senior Software Engineering student at Iowa State University, graduating in May 2027. I am passionate about 
            building software and solving complex problems, with experience across a variety of programming languages, frameworks, and development tools. 
            Through a diverse range of projects, I've developed practical skills in web development, embedded systems, and application development. 
            I'm seeking software engineering opportunities where I can contribute to meaningful projects, apply my technical skills, and continue to grow as an engineer.
          </p>
        </MotionDiv>

        {/* Container which stores icon-button links to github and linkedin */}
        <MotionDiv
          className="mt-6 flex justify-center gap-4 sm:gap-6"
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
            <FaGithub className="text-yellow-200 text-3xl sm:text-5xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/conner-houdek-930b2a32a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-yellow-200 transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <FaLinkedin className="text-yellow-200 text-3xl sm:text-5xl" />
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
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Resume_Conner_Houdek.pdf"
            className="flex items-center px-3 py-2 bg-yellow-200 text-black rounded shadow-lg shadow-yellow-200/20 transition-transform duration-300 hover:scale-110 hover:-translate-y-1 sm:px-4 sm:py-3"
          >
            <FaDownload className="text-black text-sm mr-3 sm:text-xl" /> <span className="text-sm font-mono text-black sm:text-xl">Download Resume</span>
          </a>
        </MotionDiv>
      </div>
    </main>
  )
}
