import SectionHeader from "./section-header";
import Image from "next/image";
import Chip from "./chip";
import { ChipProp } from "./chip";
import Button from "./button";

const chipInput: ChipProp[] = [
    {
        src: "/statusIcon.svg",
        text: "Status",
    },
    {
        src: "/assigneeIcon.svg",
        text: "Assignee",
    },
    {
        src: "/founderIcon.svg",
        text: "Founder",
    },
    {
        src: "/labelsIcon.svg",
        text: "Labels",
    },
    {
        src: "/roadmapsIcon.svg",
        text: "Roadmap",
    },
    {
        src: "/projectIcon.svg",
        text: "Project",
    },
    {
        src: "/mediaIcon.svg",
        text: "Media",
    },
    {
        src: "/searchIcon.svg",
        text: "Search",
    },
    {
        src: "/progressIcon.svg",
        text: "Progress",
    },
]

const Features = () => {
    return (
        <div className="flex flex-col justify-center items-center max-w-7xl mx-auto w-full">
            <SectionHeader 
            chip="Features"
            title="Advanced Features for Peak Efficienty"
            description="Explore the features that elevate your business workflow."
            />
            <div className="w-full px-5 lg:px-0 flex flex-wrap items-center justify-center gap-7">
                {/* This is the 1st div */}
                <div className="w-full lg:max-w-[600px] border border-neutral-900 rounded-2xl p-5">
                    <div className="flex bg-[#0C0C0D] p-6 rounded-2xl text-text-color gap-3 flex-wrap justify-center">
                        {/* 1st card */}
                        <div className="flex flex-col bg-[#111112] rounded-2xl p-3 w-full shadow-[0px_-1px_0px_0px_rgba(35,37,40)] md:max-w-[248px]">
                            <div className="flex gap-3 ">
                                <span className="text-sm">Favorites</span>
                                <Image
                                src="/mdi_play.svg"
                                width={12}
                                height={12}
                                alt="Favorites icon"
                                ></Image>
                            </div>
                            <div className="flex gap-3 mt-5">
                                <Image
                                src="/appstore.svg"
                                width={12}
                                height={12}
                                alt="Build in public alt"
                                />
                                <span className="text-xs">Build in Public</span>
                            </div>
                            <div className="flex gap-3 mt-3">
                                <Image
                                src="/appstore.svg"
                                width={12}
                                height={12}
                                alt="Build in public alt"
                                />
                                <span className="text-xs">Youtube</span>
                            </div>
                        </div>
                        {/* 2nd card */}
                        <div className="flex flex-col bg-[#111112] rounded-2xl p-3 w-full shadow-[0px_-1px_0px_0px_rgba(35,37,40)] md:max-w-[248px]">
                            <div className="flex gap-3 ">
                                <span className="text-sm">Your teams</span>
                                <Image
                                src="/mdi_play.svg"
                                width={12}
                                height={12}
                                alt="Favorites icon"
                                ></Image>
                            </div>
                            <div className="flex gap-3 mt-5">
                                <Image
                                src="/personalIcon.svg"
                                width={14}
                                height={14}
                                alt="Build in public alt"
                                />
                                <span className="text-xs">Personal</span>
                            </div>
                            <div className="flex gap-3 mt-3">
                                <Image
                                src="/templatesIcon.svg"
                                width={14}
                                height={14}
                                alt="Build in public alt"
                                />
                                <span className="text-xs">Templates</span>
                            </div>
                        </div>
                        {/* 3rd card */}
                        <div className="flex flex-col bg-[#111112] rounded-2xl p-3 w-full shadow-[0px_-1px_0px_0px_rgba(35,37,40)] md:max-w-[248px]">
                            <div className="flex gap-3 ">
                                <span className="text-sm">Try</span>
                                <Image
                                src="/mdi_play.svg"
                                width={12}
                                height={12}
                                alt="Favorites icon"
                                ></Image>
                            </div>
                            <div className="flex gap-3 mt-5">
                                <Image
                                src="/invitePeopleIcon.svg"
                                width={14}
                                height={14}
                                alt="Build in public alt"
                                />
                                <span className="text-xs">Invite people</span>
                            </div>
                            <div className="flex gap-3 mt-3">
                                <Image
                                src="/cyclesIcon.svg"
                                width={14}
                                height={14}
                                alt="Build in public alt"
                                />
                                <span className="text-xs">Cycles</span>
                            </div>
                            <div className="flex gap-3 mt-3">
                                <Image
                                src="/linkGithub.svg"
                                width={14}
                                height={14}
                                alt="Build in public alt"
                                />
                                <span className="text-xs">Link Github</span>
                            </div>
                        </div>
                        {/* 4th card */}
                        <div className="flex flex-col bg-[#111112] rounded-2xl p-3 w-full shadow-[0px_-1px_0px_0px_rgba(35,37,40)] md:max-w-[248px]">
                            <div className="flex gap-3 ">
                                <span className="text-sm">Workspace</span>
                                <Image
                                src="/mdi_play.svg"
                                width={12}
                                height={12}
                                alt="Favorites icon"
                                ></Image>
                            </div>
                            <div className="flex gap-3 mt-5">
                                <Image
                                src="/viewsIcon.svg"
                                width={14}
                                height={14}
                                alt="Build in public alt"
                                />
                                <span className="text-xs">Views</span>
                            </div>
                            <div className="flex gap-3 mt-3">
                                <Image
                                src="/roadmapsIcon.svg"
                                width={14}
                                height={14}
                                alt="Build in public alt"
                                />
                                <span className="text-xs">Roadmaps</span>
                            </div>
                            <div className="flex gap-3 mt-3">
                                <Image
                                src="/teamsIcon.svg"
                                width={14}
                                height={14}
                                alt="Build in public alt"
                                />
                                <span className="text-xs">Teams</span>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center justify-center mt-4 flex-wrap">
                            {
                                chipInput.map((chip) => {
                                    return (
                                        <Chip 
                                        key={chip.text}
                                        src={chip.src}
                                        text={chip.text}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="text-sm flex justify-start flex-col gap-2 mt-5">
                        <h4>Powerful Task Management Tools</h4>
                        <p className="text-neutral-500">Powerful Task MaEasily sort tasks by priority and status.
                        Organize tasks.</p>
                    </div>
                </div>
                {/* This is the 2nd div */}
                <div className="w-full lg:max-w-[600px] border border-neutral-900 rounded-2xl p-5 text-xs" >
                    <div className="flex bg-[#0C0C0D] p-6 rounded-2xl text-text-color gap-8 flex-col justify-start w-full">
                        <div className="flex gap-2 bg-[#141415] px-5 py-6 rounded-xl w-full">
                            <Image 
                            src="/projectTimelineIcon.svg"
                            width={18}
                            height={18}
                            alt="Icon of Project Timeline"
                            />
                            <span className="text-xs">Project Timeline</span>
                        </div>
                        <div className="flex w-full text-xs justify-between px-3">
                            <span>JAN</span>
                            <span>FEB</span>
                            <span>MAR</span>
                            <span>APR</span>
                            <span>MAY</span>
                            <span>JUN</span>
                            <span>AUG</span>
                        </div>
                        <div className="flex flex-col gap-5 w-full">
                            {/* first row */}
                            <div className="flex gap-3">
                                <div className="bg-[#111112] flex shadow-[0px_-1px_0px_0px_rgba(35,37,40)] p-3 rounded-xl w-[21rem] sm:w-[35rem] lg:w-[31rem]">
                                    <div className="flex">
                                        <span className="mr-3 h-full w-[2px] bg-gradient-to-t from-[rgb(44,144,24)] to-[rgb(4,48,18)] mx-auto"></span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="mb-1">Planning & Analysis</span>
                                        <span>Jan 02 to Apr 04</span>
                                    </div>
                                </div>
                                <div className="bg-[#111112] w-full shadow-[0px_-1px_0px_0px_rgba(35,37,40)] p-3 rounded-xl"></div>
                            </div>
                            {/* 2nd row */}
                            <div className="flex gap-3">
                                <div className="bg-[#111112] flex flex-col shadow-[0px_-1px_0px_0px_rgba(35,37,40)] p-3 rounded-xl w-[21rem] sm:w-[35rem] lg:w-[31rem]">
                                </div>
                                <div className="bg-[#111112] w-full shadow-[0px_-1px_0px_0px_rgba(35,37,40)] p-3 rounded-xl flex">
                                    <div className="flex">
                                        <span className="mr-3 h-full w-[2px] bg-gradient-to-t from-[rgb(148,130,0)] to-[rgb(47,47,3)] mx-auto"></span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="mb-1">Design & Prototyping</span>
                                        <span>May 02 to Jun 30</span>
                                    </div>
                                </div>
                            </div>
                            {/* 3rd row */}
                            <div className="flex gap-3">
                                <div className="bg-[#111112] flex shadow-[0px_-1px_0px_0px_rgba(35,37,40)] p-3 rounded-xl w-2xl sm:w-[69rem] lg:w-5xl">
                                    <div className="flex">
                                        <span className="mr-3 h-full w-[2px] bg-gradient-to-t from-[rgb(122,0,252)] to-[rgb(46,2,79)] mx-auto"></span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="mb-1">Development Jan 02 to May 28</span>
                                        <span>Jan 02 to May 28</span>
                                    </div>
                                    </div>
                                <div className="bg-[#111112] w-full shadow-[0px_-1px_0px_0px_rgba(35,37,40)] p-3 rounded-xl flex flex-col">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-sm flex justify-start flex-col gap-2 mt-5">
                        <h4>Powerful Task Management Tools</h4>
                        <p className="text-neutral-500">Powerful Task MaEasily sort tasks by priority and status.
                        Organize tasks.</p>
                    </div>
                </div>
                {/* This is the 3rd div */}
                <div className="w-full lg:max-w-[832px] h-[514px] border border-neutral-900 rounded-2xl p-5 text-xs">
                    <div className="flex bg-[#0C0C0D] p-6 rounded-2xl text-text-color gap-8 flex-col justify-start w-full">
                        <div className="flex bg-[#141415] px-5 py-6 rounded-xl w-full justify-between">
                            <div className="flex gap-2">
                                <Image 
                                src="/projectTimelineIcon.svg"
                                width={18}
                                height={18}
                                alt="Icon of Project Timeline"
                                />
                                <span className="text-xs">Project Timeline</span>
                            </div>
                            <div className="flex gap-4 items-center justify-center">
                              <Image 
                                src="/taskTrackingIcon1.svg"
                                width={18}
                                height={18}
                                alt="Icon of Project Timeline"
                                />
                                <Image 
                                src="/taskTrackingIcon2.svg"
                                width={20}
                                height={20}
                                alt="Icon of Project Timeline"
                                />
                            </div>
                        </div>
                        <div className="flex gap-3 w-full">
                            {/* First col */}
                            <div className="flex flex-col w-full">
                                <span className="mb-8">
                                    Not started
                                </span>
                                <div className="bg-[#111112] shadow-[0px_-1px_0px_0px_rgba(35,37,40)] p-4 rounded-2xl flex flex-col gap-5 mb-5">
                                    <div className="flex flex-col">
                                        <span className="text-white">Create client proposal</span>
                                        <span className="mt-1">Due by March 03, 2024</span>
                                    </div>
                                    <span className="w-full h-px bg-[#1E1E1E] flex"></span>
                                    <div className="flex justify-between">
                                        <div className="flex gap-2">
                                            <Image 
                                            src="/taskTrackingIcon1.svg"
                                            width={20}
                                            height={20}
                                            alt="Image"
                                            />
                                            <Image 
                                            src="/taskTrackingIcon1.svg"
                                            width={20}
                                            height={20}
                                            alt="Image"
                                            />
                                        </div>
                                        <div className="flex">
                                            <Image 
                                            src="/taskTrackingIcon1.svg"
                                            width={20}
                                            height={20}
                                            alt="Image"
                                            />
                                            <Image 
                                            src="/taskTrackingIcon1.svg"
                                            width={20}
                                            height={20}
                                            alt="Image"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 bg-[#111112] shadow-[0px_-1px_0px_0px_rgba(35,37,40)] p-4 rounded-2xl">
                                    <span className="text-white">Create client proposal</span>
                                    <span>Due by March 03, 2024</span>
                                </div>
                            </div>
                            {/* Second col */}
                            <div className="flex flex-col w-full">
                                <span className="mb-8">
                                    Not started
                                </span>
                                <div className="bg-[#111112] shadow-[0px_-1px_0px_0px_rgba(35,37,40)] p-4 rounded-2xl flex flex-col gap-5 mb-5">
                                    <div className="flex flex-col">
                                        <span className="text-white">Create client proposal</span>
                                        <span className="mt-1">Due by March 03, 2024</span>
                                    </div>
                                    <span className="w-full h-px bg-[#1E1E1E] flex"></span>
                                    <div className="flex justify-between">
                                        <div className="flex gap-2">
                                            <Image 
                                            src="/taskTrackingIcon1.svg"
                                            width={20}
                                            height={20}
                                            alt="Image"
                                            />
                                            <Image 
                                            src="/taskTrackingIcon1.svg"
                                            width={20}
                                            height={20}
                                            alt="Image"
                                            />
                                        </div>
                                        <div className="flex">
                                            <Image 
                                            src="/taskTrackingIcon1.svg"
                                            width={20}
                                            height={20}
                                            alt="Image"
                                            />
                                            <Image 
                                            src="/taskTrackingIcon1.svg"
                                            width={20}
                                            height={20}
                                            alt="Image"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 bg-[#111112] shadow-[0px_-1px_0px_0px_rgba(35,37,40)] p-4 rounded-2xl">
                                    <span className="text-white">Create client proposal</span>
                                    <span>Due by March 03, 2024</span>
                                </div>
                            </div>
                            {/* Third col */}
                            <div className="flex flex-col w-full max-sm:hidden">
                                <span className="mb-8">
                                    Not started
                                </span>
                                <div className="bg-[#111112] shadow-[0px_-1px_0px_0px_rgba(35,37,40)] p-4 rounded-2xl flex flex-col gap-5 mb-5">
                                    <div className="flex flex-col">
                                        <span className="text-white">Create client proposal</span>
                                        <span className="mt-1">Due by March 03, 2024</span>
                                    </div>
                                    <span className="w-full h-px bg-[#1E1E1E] flex"></span>
                                    <div className="flex justify-between">
                                        <div className="flex gap-2">
                                            <Image 
                                            src="/taskTrackingIcon1.svg"
                                            width={20}
                                            height={20}
                                            alt="Image"
                                            />
                                            <Image 
                                            src="/taskTrackingIcon1.svg"
                                            width={20}
                                            height={20}
                                            alt="Image"
                                            />
                                        </div>
                                        <div className="flex">
                                            <Image 
                                            src="/taskTrackingIcon1.svg"
                                            width={20}
                                            height={20}
                                            alt="Image"
                                            />
                                            <Image 
                                            src="/taskTrackingIcon1.svg"
                                            width={20}
                                            height={20}
                                            alt="Image"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 bg-[#111112] shadow-[0px_-1px_0px_0px_rgba(35,37,40)] p-4 rounded-2xl">
                                    <span className="text-white">Create client proposal</span>
                                    <span>Due by March 03, 2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-sm flex justify-start flex-col gap-2 mt-5">
                        <h4>Powerful Task Management Tools</h4>
                        <p className="text-neutral-500">Powerful Task MaEasily sort tasks by priority and status.
                        Organize tasks.</p>
                    </div>
                </div>
                {/* This is the 4th div */}
                <div className="w-full lg:max-w-[364px] h-[514px] border border-neutral-900 p-5 rounded-2xl">
                    <div className="flex bg-[#0C0C0D] p-6 rounded-2xl text-text-color gap-8 flex-col h-[24rem] justify-center">
                        <Button varient="primary">Ask Stratify AI</Button>
                    </div>
                    <div className="text-sm flex justify-start flex-col gap-2 mt-5">
                        <h4>Powerful Task Management Tools</h4>
                        <p className="text-neutral-500">Powerful Task MaEasily sort tasks by priority</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;