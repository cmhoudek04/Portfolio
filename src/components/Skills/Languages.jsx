import "../../App.css";
import { SiC, SiCplusplus, SiPython, SiJavascript, SiPhp, SiAssemblyscript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Csharp from "../../assets/Csharp.svg";
import { motion, useReducedMotion } from "motion/react";

const { div: MotionDiv } = motion;

const items = [
    { name: "C", icon: <SiC className="text-5xl pb-2 text-black sm:text-7xl sm:pb-4" /> },
    { name: "C++", icon: <SiCplusplus className="text-5xl pb-2 text-black sm:text-7xl sm:pb-4" /> },
    { name: "C#", icon: <img src={Csharp} alt="C#" className="h-16 pb-1 text-black sm:h-20 sm:pb-2" /> },
    { name: "Java", icon: <FaJava className="text-5xl pb-2 text-black sm:text-7xl sm:pb-4" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-5xl pb-2 text-black sm:text-7xl sm:pb-4" /> },
    { name: "PHP", icon: <SiPhp className="text-5xl pb-2 text-black sm:text-7xl sm:pb-4" /> },
    { name: "Python", icon: <SiPython className="text-5xl pb-2 text-black sm:text-7xl sm:pb-4" /> },
    { name: "ARM Assembly", icon: <SiAssemblyscript className="text-5xl pb-2 text-black sm:text-7xl sm:pb-4" /> },
];

const card = {
    hidden: { opacity: 0, scale: 0.92 },
    show: (i) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.05, duration: 0.35, ease: "easeOut" },
    }),
};

export default function Languages() {
    const reduce = useReducedMotion();

    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
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
                    <p className="font-mono text-black text-xl sm:text-4xl">{item.name}</p>
                </MotionDiv>
            ))}
        </div>
    )
}
