import SectionHeader from "./section-header";
import Image from "next/image";
import Chip from "./chip";
import { ChipProp } from "./chip";

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
        <div className="flex flex-col justify-center items-center max-w-7xl mx-auto">
            <SectionHeader 
            chip="Features"
            title="Advanced Features for Peak Efficienty"
            description="Explore the features that elevate your business workflow."
            />
            <div className="w-full px-5 lg:px-0 flex flex-wrap items-center justify-center gap-7">
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
                <div className="w-full lg:max-w-[600px] h-[573px] border border-neutral-900 rounded-2xl">
                    First Div
                </div>
                <div className="w-full lg:max-w-[832px] h-[514px] border border-neutral-900 rounded-2xl">
                    Third Div
                </div>
                <div className="w-full lg:max-w-[364px] h-[514px] border border-neutral-900 rounded-2xl">
                    Fourth Div
                </div>
            </div>
        </div>
    )
}

export default Features;