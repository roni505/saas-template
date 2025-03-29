import Image from "next/image";
import { ReactNode } from "react";

export type ChipProp = {
    src: string
    text: ReactNode
}

const Chip = ({
    src,
    text
}: ChipProp) => {
    return (
        <div className="flex gap-2 py-2 px-3 bg-[#141415] rounded-3xl text-xs shadow-[0px_-1px_0px_0px_rgba(35,37,40)]">
            <Image 
            src={src}
            width={16}
            height={16}
            alt="Its the icon for its perticular chip"
            />
            <span>{text}</span>
        </div>
    )
}

export default Chip;