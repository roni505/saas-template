'use client'

import Button from "./button";
import Image from "next/image";
import favicon from "../app/favicon.ico";
import { motion } from "motion/react";
import AnimatedText from "./animated-text";

const Hero = () => {
    return (
        <section
        className="w-full">
            <div className="max-w-5xl flex flex-col justify-center items-center mx-auto mt-52 md:px-5">
                <motion.div 
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
                className="flex gap-2 items-center mb-4">
                    <span 
                    className="px-2 py-1 text-[10px] bg-gradient-to-t from-[rgb(53,53,53)] to-[rgb(31,31,31)]  rounded-lg">
                        New
                    </span>
                    <div className="text-[14px] text-[#BEBEBE]">
                        50% Off for the First 100 Users!
                    </div>
                </motion.div>
                <AnimatedText 
                text="All-in-one platform to streamline your business workflow."
                className="text-4xl sm:text-5xl lg:text-6xl text-center font-medium leading"
                />
                <AnimatedText 
                text="Leverage AI and machine learning for effortless project management and collaboration."
                className="max-w-[490px] text-base sm:text-xl text-center text-[#BEBEBE] mt-6"
                />
                <Button
                varient="primary"
                className="mt-10"
                animation={true}
                >
                    Try Stratify for Free
                </Button>
                <div>
                    <Image
                    src={favicon}
                    width={1024}
                    height={800}
                    alt="Dashboard"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero;