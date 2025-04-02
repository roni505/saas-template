'use client'

import { ReactNode } from "react";
import { motion } from "motion/react";

export type ButtonProps = {
    className?: string,
    children: ReactNode,
    varient: "secondary" | "primary"
    animation?: boolean
}

const btnStyles = {
    primary: "bg-gradient-to-t from-[rgb(53,53,53)] to-[rgb(31,31,31)] px-5 py-3 rounded-[0.75rem] shadow-[0px_-2px_0px_0px_rgba(98,98,98)]",
    secondary: "bg-[#1A1A1A] px-5 py-3 rounded-[0.75rem] hover:bg-neutral-700 duration-300 ease-in-out"
}

const Button = ({
    className,
    children,
    varient,
    animation
}: ButtonProps ) => {
    const animate = animation && varient !== "secondary";
    return (
        <motion.button 
        initial={animate ? { opacity: 0} : undefined}
        animate={animate ? { opacity: 1} : undefined}

        className={`${className} ${btnStyles[varient]} cursor-pointer`}
        >
            {children}
        </motion.button>
    )
}

export default Button;