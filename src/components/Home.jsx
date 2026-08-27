import "../App.css";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Home() {

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
        {/* General text at top of page */}
        <h1 className="font-mono text-white pb-4">Welcome</h1>
        <div className="max-w-6xl mx-auto p-4">
            <p className="font-mono text-2xl text-white">
              My name is <span className="text-yellow-200">Conner Houdek</span>. I am a junior in software engineering at Iowa State University who is <span className="text-yellow-200">passionate</span> about <span className="text-yellow-200">software</span> and <span className="text-yellow-200">problem solving</span>. 
              I am experienced with several <span className="text-yellow-200">languages</span>, <span className="text-yellow-200">frameworks</span>, and <span className="text-yellow-200">tools </span> 
              alongside a growing list of <span className="text-yellow-200">completed</span> and <span className="text-yellow-200">varied</span> projects. I am seeking opportunities to utilize skills 
              with <span className="text-yellow-200">web development</span>, <span className="text-yellow-200">embedded systems</span>, and <span className="text-yellow-200">app development</span>.</p>
        </div>

        {/* Container which stores icon-button links to github and linkedin */}
        <div className="mt-6 flex justify-center gap-6">
            <a
              href="https://github.com/cmhoudek04"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform">
                <FaGithub className="text-yellow-200 text-5xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/conner-houdek-930b2a32a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform">
                <FaLinkedin className="text-yellow-200 text-5xl" />
              </a>
        </div>

        {/* Container with button to download resume */}
        <div className="mt-6 flex justify-center">
            <a
              href={`${import.meta.env.BASE_URL}/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              download="Resume_Conner_Houdek.pdf"
              className="flex items-center px-4 py-3 bg-yellow-200 text-black rounded hover:scale-110 transition-transform">
                <FaDownload className="text-black text-xl mr-4" /> <span className="text-xl text-mono text-black">Download Resume</span>
              </a>
        </div>
    </main>
  )
}