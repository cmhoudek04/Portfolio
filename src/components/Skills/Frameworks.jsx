import "../../App.css";
import { SiReact, SiLaravel, SiDotnet, SiAndroidstudio } from "react-icons/si";
import { motion, useReducedMotion } from "motion/react";

const { div: MotionDiv } = motion;

const items = [
    { name: "React", icon: <SiReact className="text-2xl pb-2 text-black sm:text-7xl sm:pb-4" /> },
    { name: "Laravel", icon: <SiLaravel className="text-2xl pb-2 text-black sm:text-7xl sm:pb-4" /> },
    { name: ".NET", icon: <SiDotnet className="text-2xl pb-2 text-black translate-x-1 sm:text-7xl sm:pb-4" /> },
    { name: "Android Studio", icon: <SiAndroidstudio className="text-2xl pb-2 text-black sm:text-7xl sm:pb-4" /> },
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
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
            {items.map((item, i) => (
                <MotionDiv
                    key={item.name}
                    custom={i}
                    variants={reduce ? undefined : card}
                    initial={reduce ? undefined : "hidden"}
                    animate={reduce ? undefined : "show"}
                    whileHover={{ y: reduce ? 0 : -6, scale: reduce ? 1 : 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex flex-col justify-center items-center px-2 py-2 bg-yellow-200 rounded-xl shadow-sm sm:px-6 sm:py-3"
                >
                    {item.icon}
                    <p className="font-mono text-black text-sm -translate-x-0.5 sm:text-4xl">{item.name}</p>
                </MotionDiv>
            ))}
        </div>
    )
}
