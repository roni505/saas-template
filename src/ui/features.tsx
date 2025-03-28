import SectionHeader from "./section-header";
import Image from "next/image";

const Features = () => {
    return (
        <div className="flex flex-col justify-center items-center max-w-7xl mx-auto">
            <SectionHeader 
            chip="Features"
            title="Advanced Features for Peak Efficienty"
            description="Explore the features that elevate your business workflow."
            />
            <div className="w-full px-5 lg:px-0 flex flex-wrap items-center justify-center gap-7">
                <div className="w-full lg:max-w-[600px] border border-neutral-900 rounded-2xl p-5 text-sm">
                    <div className="flex bg-[#0C0C0D] p-6 rounded-2xl text-text-color gap-3 flex-wrap">
                        {/* 1st card */}
                        <div className="flex flex-col bg-[#111112] rounded-2xl p-3 w-full shadow-[0px_-1px_0px_0px_rgba(35,37,40)] md:max-w-[248px]">
                            <div className="flex gap-3 ">
                                <span>Favorites</span>
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
                                <span>Build in Public</span>
                            </div>
                            <div className="flex gap-3 mt-3">
                                <Image
                                src="/appstore.svg"
                                width={12}
                                height={12}
                                alt="Build in public alt"
                                />
                                <span>Youtube</span>
                            </div>
                        </div>
                        {/* 2nd card */}
                        <div className="flex flex-col bg-[#111112] rounded-2xl p-3 w-full shadow-[0px_-1px_0px_0px_rgba(35,37,40)] md:max-w-[248px]">
                            <div className="flex gap-3 ">
                                <span>Your teams</span>
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
                                width={16}
                                height={16}
                                alt="Build in public alt"
                                />
                                <span>Personal</span>
                            </div>
                            <div className="flex gap-3 mt-3">
                                <Image
                                src="/templatesIcon.svg"
                                width={16}
                                height={16}
                                alt="Build in public alt"
                                />
                                <span>Templates</span>
                            </div>
                        </div>
                        {/* 3rd card */}
                        <div className="flex flex-col bg-[#111112] rounded-2xl p-3 w-full shadow-[0px_-1px_0px_0px_rgba(35,37,40)] md:max-w-[248px]">
                            <div className="flex gap-3 ">
                                <span>Try</span>
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
                                width={16}
                                height={16}
                                alt="Build in public alt"
                                />
                                <span>Invite people</span>
                            </div>
                            <div className="flex gap-3 mt-3">
                                <Image
                                src="/cyclesIcon.svg"
                                width={16}
                                height={16}
                                alt="Build in public alt"
                                />
                                <span>Cycles</span>
                            </div>
                            <div className="flex gap-3 mt-3">
                                <Image
                                src="/linkGithub.svg"
                                width={16}
                                height={16}
                                alt="Build in public alt"
                                />
                                <span>Link Github</span>
                            </div>
                        </div>
                        {/* 4th card */}
                        <div className="flex flex-col bg-[#111112] rounded-2xl p-3 w-full shadow-[0px_-1px_0px_0px_rgba(35,37,40)] md:max-w-[248px]">
                            <div className="flex gap-3 ">
                                <span>Workspace</span>
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
                                width={16}
                                height={16}
                                alt="Build in public alt"
                                />
                                <span>Views</span>
                            </div>
                            <div className="flex gap-3 mt-3">
                                <Image
                                src="/roadmapsIcon.svg"
                                width={16}
                                height={16}
                                alt="Build in public alt"
                                />
                                <span>Roadmaps</span>
                            </div>
                            <div className="flex gap-3 mt-3">
                                <Image
                                src="/teamsIcon.svg"
                                width={16}
                                height={16}
                                alt="Build in public alt"
                                />
                                <span>Teams</span>
                            </div>
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
                <div>
                    The chips will appear here...
                </div>
            </div>
        </div>
    )
}

export default Features;