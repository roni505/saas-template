import Balancer from "react-wrap-balancer";
import Button from "./button";

const FinalCTA = () => {
    return (
        <section
        className="w-full flex flex-col">
            <div className="max-w-5xl flex flex-col justify-center items-center mx-auto mt-52 mb-36">
                <h2
                className="text-6xl text-center font-medium leading">
                <Balancer>
                Ready to Revolutionize Your Workflow?
                </Balancer>
                </h2>
                <p className="max-w-[456px] text-xl text-center text-[#BEBEBE] font-light mt-6">
                Join thousands of forward-thinking companies already using Stratify to dominate their industries.
                </p>
                <Button
                varient="primary"
                className="mt-10"
                >
                    Try Stratify for Free
                </Button>
            </div>
            <span className=" h-[1px] bg-gradient-to-r from-transparent via-[#363636] to-transparent mx-auto w-full"></span>
            {/* <span className="opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-[#00FFA5] to-transparent h-[8px] w-2/3 mx-auto blur-sm "></span> */}
        </section>
    )
}

export default FinalCTA;