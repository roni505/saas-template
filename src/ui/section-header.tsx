import { ReactNode } from "react";
import Balancer from "react-wrap-balancer";


export type SectionProps = {
    chip: ReactNode,
    title: ReactNode,
    description: ReactNode
}

const SectionHeader = ({
    chip,
    title,
    description
}: SectionProps ) => {
    return (
        <div className="px-5 sm:max-w-[550px] flex flex-col items-center justify-center">
            <span 
            className="px-4 py-1 w-24 bg-chip-bg text-text-color text-sm rounded-4xl text-center border border-chip-border mb-5"
            >{chip}
            </span>
            <h2
            className="text-3xl sm:text-5xl text-center font-bold mb-5 text-neutral-200"
            >
                {title}
            </h2>
            <p className="text-base text-neutral-400 mb-16 text-center">{description}</p>
        </div>
    )
}

export default SectionHeader;