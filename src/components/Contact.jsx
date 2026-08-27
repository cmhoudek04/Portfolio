import "../App.css";
import { MdMail } from "react-icons/md";
import { motion, useReducedMotion } from "motion/react";

const { h1: MotionH1, div: MotionDiv } = motion;

export default function Contact() {
    const reduce = useReducedMotion();

    const fade = {
        hidden: { opacity: 0, y: reduce ? 0 : 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
    };

    return (
        <main style={{ position: 'relative', zIndex: 1 }}>
            <MotionDiv
                className="mx-auto w-full rounded-2xl bg-[#0a1c27]/60 px-6 py-8 backdrop-blur-sm ring-1 ring-white/10"
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
            >
            <MotionH1
                className="font-mono text-white pb-4"
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
            >
                Contact Me
            </MotionH1>
            <MotionDiv
                className="flex flex-col justify-center items-center max-w-6xl mx-auto p-4"
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.1 }}
            >
                <p className="font-mono text-2xl text-white pb-4">
                    If you would like to contact me, feel free to reach out to me!
                </p>
                <a
                    href="mailto:cmhoudek04@gmail.com"
                    target="_blank"
                    className="flex items-center px-3 py-2 bg-yellow-200 text-black rounded-xl shadow-lg shadow-yellow-200/20 transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
                >
                    <MdMail className="text-black text-2xl"></MdMail>
                    <span className="font-mono text-black text-2xl pl-2 pr-2 -translate-y-0.5">Email me</span>
                    <MdMail className="text-black text-2xl"></MdMail>
                </a>
            </MotionDiv>
            </MotionDiv>
        </main>
    )
}
