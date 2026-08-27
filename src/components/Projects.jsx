import "../App.css";
import { motion, useReducedMotion } from "motion/react";

const { h1: MotionH1, div: MotionDiv } = motion;

const projects = [
    {
        name: "Tripmates",
        description: "An itinerary planner app developed with Android studio, Spring Boot, and Java.",
        demo: "https://www.youtube.com/watch?v=Q8cpGkN5yD8&list=PL6BdlkdKLEB-RhBjBTGRFWf87xXYjf9tq&index=18",
        github: "https://github.com/MadHyyper/Tripmates",
    },
    {
        name: "Taco Truck",
        description: "A group project where we wrote C scripts to embedded hardware to make an autonomous motor vehicle deliver prop tacos to points on a map.",
        github: "https://github.com/MadHyyper/Taco-Truck-Project",
    },
    {
        name: "Real Simple File System",
        description: "A simple UNIX file system implemented in C.",
        github: "https://github.com/MadHyyper/Real-Simple-File-System",
    },
    {
        name: "This Website!",
        description: "Portfolio website created with React and JavaScript using tsparticles.",
        github: "https://github.com/MadHyyper/Portfolio",
    },
    {
        name: "Memory Game",
        description: "A console game written with C using a PS4 controller for input.",
        github: "https://github.com/MadHyyper/Memory-Game",
    },
    {
        name: "Color Splash",
        description: "Rudimentary platformer video game developed in Godot with GDScript.",
        github: "https://github.com/MadHyyper/color-splash",
    },
];

const card = {
    hidden: { opacity: 0, y: 24 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
    }),
};

export default function Projects() {
    const reduce = useReducedMotion();

    return (
        <main style={{ position: 'relative', zIndex: 1 }}>
            <MotionDiv
                className="mx-auto w-full rounded-2xl bg-[#0a1c27]/60 px-6 py-8 backdrop-blur-sm ring-1 ring-white/10"
                initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
            <MotionH1
                className="font-mono text-white pb-4"
                initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                Projects
            </MotionH1>

            <div className="grid grid-cols-4 gap-4">
                {projects.map((project, i) => (
                    <MotionDiv
                        key={project.name}
                        variants={reduce ? undefined : card}
                        initial={reduce ? undefined : "hidden"}
                        whileInView={reduce ? undefined : "show"}
                        viewport={{ once: true, margin: "-60px" }}
                        custom={i}
                        whileHover={{ y: reduce ? 0 : -6, scale: reduce ? 1 : 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 22 }}
                        className="flex flex-col items-center px-6 py-3 bg-yellow-200 rounded-xl"
                    >
                        <h2 className="font-mono text-black text-4xl pb-2">{project.name}</h2>
                        <p className="font-mono text-black text-xl pb-2">
                            {project.description}
                        </p>
                        <div className="mt-auto flex flex-col items-center gap-2">
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex mb-2 items-center px-3 py-2 bg-black text-black rounded-xl hover:scale-110 transition-transform"
                                >
                                    <span className="text-yellow-200 text-2xl">Demo</span>
                                </a>
                            )}
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-3 py-2 bg-black text-black rounded-xl hover:scale-110 transition-transform"
                            >
                                <span className="text-yellow-200 text-2xl">Github</span>
                            </a>
                        </div>
                    </MotionDiv>
                ))}
            </div>
            </MotionDiv>
        </main>
    )
}
