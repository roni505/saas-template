'use client'

import { motion, useInView } from "motion/react";
import { ReactNode, useRef } from "react";

export type SectionProps = {
    chip: string,
    title: string,
    description: string
}

export const defaultAnimation = ({
    hidden: {
        opacity: 0,
        filter: "blur(10px)"
    },
    visible: {
        opacity: 1,
        filter: "blur(0px)"
    }
})

const SectionHeader = ({
    chip,
    title,
    description
}: SectionProps ) => {
    const ref = useRef(null);
    const isInview = useInView(ref, { amount: 0.5, once: true });
    return (
        <div className="px-5 sm:max-w-[550px] flex flex-col items-center justify-center">
            <motion.span 
            ref={ref}
            initial="hidden"
            animate={isInview ? "visible" : "hidden"}
            transition={{
                staggerChildren: 0.01
            }}
            className="px-4 py-1 w-24 bg-chip-bg text-text-color text-sm rounded-4xl text-center border border-chip-border mb-5"
            >
                {chip.split("").map((char) => <motion.span key={Math.random()} variants={defaultAnimation}>{char}</motion.span>)}
            </motion.span>
            <motion.h2
            ref={ref}
            initial="hidden"
            animate={isInview ? "visible" : "hidden"}
            transition={{
                staggerChildren: 0.01
            }}
            className="text-3xl sm:text-5xl text-center font-bold mb-5 text-neutral-200"
            >
                {title.split("").map((char) => <motion.span key={Math.random()} variants={defaultAnimation}>{char}</motion.span>)}
            </motion.h2>
            <motion.p 
            className="text-base text-neutral-400 mb-16 text-center"
            ref={ref}
            initial="hidden"
            animate={isInview ? "visible" : "hidden"}
            transition={{
                staggerChildren: 0.01
            }}
            >
                {description.split("").map((char) => <motion.span key={Math.random()} variants={defaultAnimation}>{char}</motion.span>)}
            </motion.p>
        </div>
    )
}

export default SectionHeader;