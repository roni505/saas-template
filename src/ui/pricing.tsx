'use client'

import { useState } from "react";
import Button from "./button";
import PlanIncludes from "./plan-includes";
import SectionHeader from "./section-header"
import TogglePrice from "./toggle-button";

const Pricing = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="flex flex-col justify-center items-center mx-auto">
            <SectionHeader 
            chip="Pricing"
            title="Choose the Perfect Plan for Your Business"
            description="Choose a plan that fits your business, whether you're just starting out or scaling to new heights."
            />
            <div className="flex flex-col gap-3 items-center">
                <TogglePrice 
                save="Save 20%"
                setToggle={setToggle}
                toggle={toggle}
                />
                {/* <div className="bg-gradient-to-r from-[rgb(19,19,19)] to-[rgb(0,28,18)] px-7 py-4 rounded-4xl border border-[#313131] flex text-sm items-center justify-center">
                    <div 
                    className="cursor-pointer flex items-center justify-center"
                    onClick={() => {setAnnually(!annually), setMonthly(!monthly)}}
                    >
                        <span className="relative w-5 h-5 rounded-full border border-[#CACACA] mr-2">
                            {
                                annually && (
                                    <span className="absolute w-2 h-2 rounded-full bg-[#CACACA] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                                )
                            }
                        </span>
                        <span className="text-base">Annually</span>
                    </div>
                    <div 
                    className="cursor-pointer flex ml-7 items-center justify-center"
                    onClick={() => {setMonthly(!monthly), setAnnually(!annually)}}
                    >
                        <span className="relative w-5 h-5 rounded-full border border-[#CACACA] mr-2">
                            {
                                monthly && (
                                    <span className="absolute w-2 h-2 rounded-full bg-[#CACACA] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                                )
                            }
                        </span>
                        <span className="mr-3 text-base">Monthly</span>
                        <span className="text-[#00FFA5] font-medium">Save 20%</span>
                    </div>
                </div>
                {
                    annually ? <span className="text-sm text-neutral-400">Billed in one annual payment.</span>
                    : <span className="text-sm text-neutral-400">Billed monthly.</span>
                } */}
                <div className="max-w-7xl flex gap-4 mt-12 flex-wrap px-5 lg:px-0 items-center justify-center">
                    {/* 1st Prizing card */}
                    <div className="px-7 py-8 bg-gradient-to-b from-[rgb(18,18,18)] to-[rgb(10,10,10)] border-t-1 border-r-1 border-l-1 border-[#282828] rounded-2xl flex flex-col w-full lg:w-[350px]">
                        <span className="text-2xl font-bold">Free</span>
                        <span className="text-sm text-neutral-500 mt-3">Perfect for small teams and startups</span>
                        <span className="text-3xl font-bold flex items-center gap-1 mb-8 mt-4">$0 <span className="text-sm font-semibold text-neutral-400">Forever</span> </span>
                        <Button
                        varient="secondary"
                        >
                            Sign Up Now
                        </Button>
                        <span className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#434343] to-transparent mt-4"></span>
                        <span className="text-base mt-8">Free Plan includes</span>
                        <div className="gap-2 flex flex-col mt-4">
                            <PlanIncludes 
                            text="Work with up to 3 teammates"
                            />
                            <PlanIncludes 
                            text="Core task management features"
                            />
                            <PlanIncludes 
                            text="Unlimited projects and tasks"
                            />
                            <PlanIncludes 
                            text="Board and list views"
                            />
                            <PlanIncludes 
                            text="Basic integrations"
                            />
                        </div>
                    </div>
                    {/* 2nd pricing card */}
                    <div className="px-7 py-8 bg-gradient-to-b from-[rgb(13,13,13)] to-[rgb(0,28,18)] border-t-1 border-r-1 border-l-1 border-[#282828] rounded-2xl flex flex-col w-full lg:w-[350px]">
                        <span className="text-2xl font-bold">Free</span>
                        <span className="text-sm text-neutral-500 mt-3">Perfect for small teams and startups</span>
                        <span className="text-3xl font-bold flex items-center gap-1 mb-8 mt-4">
                            {
                                toggle ? "$0" : "$50"
                            } 
                            <span className="text-sm font-semibold text-neutral-400">
                                Forever
                            </span> 
                        </span>
                        <Button
                        varient="primary"
                        >
                            Start Free Trail
                        </Button>
                        <span className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#434343] to-transparent mt-4"></span>
                        <span className="text-base mt-8">Free Plan includes</span>
                        <div className="gap-2 flex flex-col mt-4">
                            <PlanIncludes 
                            text="Work with up to 3 teammates"
                            />
                            <PlanIncludes 
                            text="Core task management features"
                            />
                            <PlanIncludes 
                            text="Unlimited projects and tasks"
                            />
                            <PlanIncludes 
                            text="Board and list views"
                            />
                            <PlanIncludes 
                            text="Basic integrations"
                            />
                        </div>
                    </div>
                    {/* 3rd pricing card */}
                    <div className="px-7 py-8 bg-gradient-to-b from-[rgb(18,18,18)] to-[rgb(10,10,10)] border-t-1 border-r-1 border-l-1 border-[#282828] rounded-2xl flex flex-col w-full lg:w-[350px]">
                        <span className="text-2xl font-bold">Free</span>
                        <span className="text-sm text-neutral-500 mt-3">Perfect for small teams and startups</span>
                        <span className="text-3xl font-bold flex items-center gap-1 mb-8 mt-4">
                            {
                                toggle ? "$0" : "$50"
                            } 
                            <span className="text-sm font-semibold text-neutral-400">
                                Forever
                            </span> 
                        </span>
                        <Button
                        varient="secondary"
                        >
                            Start Free Trail
                        </Button>
                        <span className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#434343] to-transparent mt-4"></span>
                        <span className="text-base mt-8">Free Plan includes</span>
                        <div className="gap-2 flex flex-col mt-4">
                            <PlanIncludes 
                            text="Work with up to 3 teammates"
                            />
                            <PlanIncludes 
                            text="Core task management features"
                            />
                            <PlanIncludes 
                            text="Unlimited projects and tasks"
                            />
                            <PlanIncludes 
                            text="Board and list views"
                            />
                            <PlanIncludes 
                            text="Basic integrations"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;