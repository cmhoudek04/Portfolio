import "../../App.css";
import { SiReact, SiLaravel, SiDotnet, SiAndroidstudio } from "react-icons/si";
import { motion, useReducedMotion } from "motion/react";

const { div: MotionDiv } = motion;

const items = [
    { name: "React", icon: <SiReact className="text-7xl pb-4 text-black" /> },
    { name: "Laravel", icon: <SiLaravel className="text-7xl pb-4 text-black" /> },
    { name: ".NET", icon: <SiDotnet className="text-7xl pb-4 text-black translate-x-1" /> },
    { name: "Android Studio", icon: <SiAndroidstudio className="text-7xl pb-4 text-black" /> },
];

const card = {
    hidden: { opacity: 0, scale: 0.92 },
    show: (i) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.06, duration: 0.35, ease: "easeOut" },
    }),
};

export default function Frameworks() {
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
                    <p className="font-mono text-black text-4xl -translate-x-0.5">{item.name}</p>
                </MotionDiv>
            ))}
        </div>
    )
}
