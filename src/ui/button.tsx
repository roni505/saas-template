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
    primary: "px-5 py-3 rounded-2xl shadow-[0px_-2px_0px_0px_rgba(98,98,98)] bg-gradient-to-b from-[rgb(40,40,40)] to-[rgb(20,20,20)] hover:from-[rgb(30,30,30)] hover:to-[rgb(15,15,15)] transition duration-300 hover:text-neutral-400",
    secondary: "bg-[#1A1A1A] px-5 py-3 rounded-2xl hover:bg-neutral-700 duration-300 ease-in-out hover:text-neutral-200"
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
        animate={animate ? { opacity: 1, transition:{
            delay: 0.6,
            ease: "easeInOut"
        }} : undefined}

        className={`${className} ${btnStyles[varient]} cursor-pointer`}
        >
            {children}
        </motion.button>
    )
}

export default Button;