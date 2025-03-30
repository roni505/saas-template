import { ReactNode } from "react";
import Image from "next/image";

export type ReviewCardProps = {
    review: ReactNode,
    src: string,
    name: string,
    work: ReactNode
}

const ReviewCard = ({
    review,
    src,
    name,
    work
}: ReviewCardProps ) => {
    return (
        <div className="p-5 sm:p-8 rounded-2xl bg-gradient-to-t from-[rgb(10,10,10)] to-[rgb(21,21,21)] border-t-1 border-r-1 border-l-1 border-[#282828] max-sm:w-full md:w-[410px]">
            <p className="text-sm sm:text-base text-neutral-300 h-20">
                {review}
            </p>
            <div className="flex mt-7">
                <Image
                src={src}
                width={44}
                height={44}
                alt="Customers' images"
                />
                <span className="bg-neutral-700 h-11 w-px ml-5 mr-5"></span>
                <div className="flex flex-col">
                    <span className="text-base text-neutral-400">{name}</span>
                    <span className="text-sm text-neutral-500 mt-1">{work}</span>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard;