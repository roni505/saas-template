import { motion, useInView } from "motion/react"
import { useRef } from "react"

export type AnimatedTextProps = {
    text: string,
    className?: string
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

const AnimatedText = ({
    text,
    className
}: AnimatedTextProps) => {
    const ref = useRef(null);
    const isInview = useInView(ref, { amount: 0.5, once: true });
    return (
        <div className="flex">
            {/* for screen reader only */}
            <span className="sr-only">{text}</span>
            <motion.span 
            ref={ref}
            initial="hidden"
            animate={isInview ? "visible" : "hidden"}
            transition={{
                staggerChildren: 0.01
            }}
            aria-hidden
            className={`${className}`}
            >
                { 
                    text.split('').map((char) => (
                        <motion.span
                        key={Math.random()}
                        variants={defaultAnimation}
                        >
                            {char}
                        </motion.span>
                    ))
                }
            </motion.span>
        </div>
    )
}

export default AnimatedText;