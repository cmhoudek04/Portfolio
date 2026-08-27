import "../App.css";
import Languages from "./Skills/Languages.jsx";
import Frameworks from "./Skills/Frameworks.jsx";
import Tools from "./Skills/Tools.jsx";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const { h1: MotionH1, div: MotionDiv, h2: MotionH2, button: MotionButton } = motion;

export default function Skills() {
    const [index, setIndex] = useState(0);
    const reduce = useReducedMotion();
    const views = [
        { label: "Languages", component: <Languages />},
        { label: "Frameworks", component: <Frameworks />},
        { label: "Tools", component: <Tools />}
    ];

    const next = () => {
        setIndex((i) => (i + 1) % views.length);
    }

    const prev = () => {
        setIndex((i) => (i === 0 ? views.length - 1 : i - 1));
    }

    const btnVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.1 },
        tap: { scale: 0.92 }
    };

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
                Skills
            </MotionH1>

            <MotionDiv
                initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
                className="grid grid-cols-[1fr_auto_1fr] items-center w-[400px] mx-auto"
            >
                {/* Header */}
                <MotionButton
                    variants={btnVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="!bg-yellow-200 justify-self-start"
                    onClick={prev}
                    aria-label="Previous skills category"
                >
                    <FaChevronLeft className="text-black text-xl" />
                </MotionButton>

                <AnimatePresence mode="wait">
                    <MotionH2
                        key={views[index].label}
                        className="font-mono text-center text-yellow-200 pb-1 text-4xl"
                        initial={{ opacity: 0, y: reduce ? 0 : -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: reduce ? 0 : 10 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        {views[index].label}
                    </MotionH2>
                </AnimatePresence>

                <MotionButton
                    variants={btnVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="!bg-yellow-200 justify-self-end"
                    onClick={next}
                    aria-label="Next skills category"
                >
                    <FaChevronRight className="text-black text-xl" />
                </MotionButton>
            </MotionDiv>

            <div className="mt-6 flex justify-center gap-6 overflow-x-clip">
                {/* Content */}
                <AnimatePresence mode="wait">
                    <MotionDiv
                        key={views[index].label}
                        initial={{ opacity: 0, x: reduce ? 0 : -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: reduce ? 0 : 24 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        {views[index].component}
                    </MotionDiv>
                </AnimatePresence>
            </div>
            </MotionDiv>
        </main>
    )
}
