import Image from "next/image";

export type PlanIncludeInput = {
    text: string
}

const PlanIncludes = ({
    text
}: PlanIncludeInput) => {
    return (
        <div className="text-base flex gap-2 text-neutral-400">
            <Image 
            src="/tickIcon.svg"
            width={20}
            height={20}
            alt="Tick icon"
            />
            <span>{text}</span>
        </div>
    )
}

export default PlanIncludes;