import "../../App.css";
import { SiDocker, SiSpringboot, SiHtml5, SiCss3, SiNodedotjs, SiMysql, SiMongodb, SiGit, SiTailwindcss } from "react-icons/si";
import { FaMicrochip } from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";

const { div: MotionDiv } = motion;

const items = [
    { name: "Docker", icon: <SiDocker className="text-7xl pb-4 text-black" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-7xl pb-4 text-black" /> },
    { name: "HTML", icon: <SiHtml5 className="text-7xl pb-4 text-black" /> },
    { name: "CSS", icon: <SiCss3 className="text-7xl pb-4 text-black" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-7xl pb-4 text-black" /> },
    { name: "NodeJS", icon: <SiNodedotjs className="text-7xl pb-4 text-black" /> },
    { name: "MySql", icon: <SiMysql className="text-7xl pb-4 text-black" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-7xl pb-4 text-black" /> },
    { name: "Git", icon: <SiGit className="text-7xl pb-4 text-black" /> },
    { name: "FPGA Design", icon: <FaMicrochip className="text-7xl pb-4 text-black" /> },
];

const card = {
    hidden: { opacity: 0, scale: 0.92 },
    show: (i) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.04, duration: 0.35, ease: "easeOut" },
    }),
};

export default function Tools() {
    const reduce = useReducedMotion();

    return (
        <div className="grid grid-cols-4 gap-4">
            {items.map((item, i) => (
                <MotionDiv
                    key={item.name}
                    custom={i}
                    variants={reduce ? undefined : card}
                    initial={reduce ? undefined : "hidden"}
                    animate={reduce ? undefined : "show"}
                    whileHover={{ y: reduce ? 0 : -6, scale: reduce ? 1 : 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex flex-col justify-center items-center px-6 py-3 bg-yellow-200 rounded-xl shadow-sm"
                >
                    {item.icon}
                    <p className="font-mono text-black text-4xl">{item.name}</p>
                </MotionDiv>
            ))}
        </div>
    )
}
