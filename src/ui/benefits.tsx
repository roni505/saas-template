import SectionHeader from "./section-header";
import Image from "next/image";

const Benefits = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full mx-auto max-w-7xl">
            <SectionHeader 
            chip="Benefits"
            title="Why Businesses Choose Stratify"
            description="Unlock the full potential of your business with unparalleled efficiency and productivity."
            />
            <div className="flex flex-wrap items-center justify-center px-20 md:p-0 w-full max-w-6xl">
                {/* First card */}
                <div className="relative flex flex-col justify-center items-center px-28 py-9 w-full max-w-96">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#434343] to-transparent"></div>
                <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#434343] to-transparent"></div>
                    <Image
                    src="/24/7supportIcon.svg"
                    width={50}
                    height={50}
                    alt=""
                    />
                    <span className="text-center text-base font-semibold mt-5">24/7 AI Support</span>
                    <span className="text-center text-sm  text-[#BEBEBE] mt-4 w-[150px]">Stratify’s AI is available 24/7, always ready to assist you.</span>
                    <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#434343] to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#434343] to-transparent"></div>
                </div>
                {/* Second card */}
                <div className="relative flex flex-col justify-center items-center px-28 py-9 w-full max-w-96">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#434343] to-transparent"></div>
                <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#434343] to-transparent"></div>
                    <Image
                    src="/24/7supportIcon.svg"
                    width={50}
                    height={50}
                    alt=""
                    />
                    <span className="text-center text-base font-semibold mt-5">24/7 AI Support</span>
                    <span className="text-center text-sm  text-[#BEBEBE] mt-4 w-[150px]">Stratify’s AI is available 24/7, always ready to assist you.</span>
                    <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#434343] to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#434343] to-transparent"></div>
                </div>
                {/* Third card */}
                <div className="relative flex flex-col justify-center items-center px-28 py-9 w-full max-w-96">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#434343] to-transparent"></div>
                <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#434343] to-transparent"></div>
                    <Image
                    src="/24/7supportIcon.svg"
                    width={50}
                    height={50}
                    alt=""
                    />
                    <span className="text-center text-base font-semibold mt-5">24/7 AI Support</span>
                    <span className="text-center text-sm  text-[#BEBEBE] mt-4 w-[150px]">Stratify’s AI is available 24/7, always ready to assist you.</span>
                    <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#434343] to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#434343] to-transparent"></div>
                </div>
            </div>
        </div>
    )
}

export default Benefits;