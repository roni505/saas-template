import Balancer from "react-wrap-balancer";
import Button from "./button";
import Image from "next/image";
import favicon from "../app/favicon.ico";

const Hero = () => {
    return (
        <section
        className="w-full">
            <div className="max-w-5xl flex flex-col justify-center items-center mx-auto mt-52">
                <div 
                className="flex gap-2 items-center mb-4">
                    <span 
                    className="px-2 py-1 text-[10px] bg-gradient-to-t from-[rgb(53,53,53)] to-[rgb(31,31,31)]  rounded-lg">
                        New
                    </span>
                    <div className="text-[14px] text-[#BEBEBE]">
                        50% Off for the First 100 Users!
                    </div>
                </div>
                <h2
                className="text-6xl text-center font-medium leading">
                <Balancer>
                All-in-one platform to streamline your business workflow.
                </Balancer>
                </h2>
                <p className="max-w-[490px] text-xl text-center text-[#BEBEBE] mt-6">
                Leverage AI and machine learning for effortless project management and collaboration.
                </p>
                <Button
                varient="primary"
                className="mt-10"
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