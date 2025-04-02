'use client'

import { cn } from "@/lib/utils";
import { IconAccessibleFilled, IconHours24, IconPlus, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Card = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
        <AnimatePresence>
            { isOpen && 
                <motion.div 
                initial={{
                    opacity: 0,
                    scale: 0.98,
                    filter: "blur(10px)"
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)"
                }}
                exit={{
                    opacity: 0,
                    scale: 0.98,
                    filter: 'blur(10px)'
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
                className={cn(
                    "w-72 min-h-[26rem] h-[32rem] rounded-xl bg-white",
                    "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
                    "p-4 flex flex-col"
                )}>
                    <h2 className="text-[14px] font-bold">UI components</h2>
                    <p className="text-neutral-500 text-[12px] mt-4">Build landing pages in seconds with unique designs</p>
                    <div className="flex items-center justify-center">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center gap-1 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] text-[14px] mt-4 px-2 py-1 rounded-lg cursor-pointer">
                            <IconAccessibleFilled 
                            size={22}
                            stroke={2}
                            />
                            Previous
                            <IconX 
                            size={14}
                            className="text-neutral-500"
                            />
                        </button>
                    </div>
                    <div className="relative flex-1 mt-4 rounded-lg bg-gray-100 border border-dashed border-neutral-200">
                        <motion.div 
                        initial={{
                            opacity: 0,
                            scale: 0.98,
                            filter: 'blur(10px)'
                        }}
                        whileHover={{
                            opacity: 1,
                            scale: 1.05,
                            filter: 'blur(0px)'
                            
                        }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut'
                        }}
                        className="absolute bg-white inset-0 h-full w-full divide-y divide-neutral-200 text-sm">
                            <div className="p-4 flex gap-4 items-center">
                                <div className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] h-8 w-8 flex items-center justify-center rounded-sm flex-shrink-0">
                                    <IconHours24 
                                    className="text-neutral-500 h-5 w-5"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[12px] ">24 hours delivary</p>
                                    <p className="text-[12px] text-neutral-500 mt-1">Get customed designs in 2r hrs</p>
                                </div>
                            </div>
                            <div className="p-4 flex gap-4 items-center">
                                <div className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] h-8 w-8 flex items-center justify-center rounded-sm flex-shrink-0">
                                    <IconHours24 
                                    className="text-neutral-500 h-5 w-5"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[12px] ">24 hours delivary</p>
                                    <p className="text-[12px] text-neutral-500 mt-1">Get customed designs in 2r hrs</p>
                                </div>
                            </div>
                            <div className="p-4 flex gap-4 items-center">
                                <div className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] h-8 w-8 flex items-center justify-center rounded-sm flex-shrink-0">
                                    <IconHours24 
                                    className="text-neutral-500 h-5 w-5"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[12px] ">24 hours delivary</p>
                                    <p className="text-[12px] text-neutral-500 mt-1">Get customed designs in 2r hrs</p>
                                </div>
                            </div>
                            <div className="p-4 flex gap-4 items-center">
                                <div className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] h-8 w-8 flex items-center justify-center rounded-sm flex-shrink-0">
                                    <IconHours24 
                                    className="text-neutral-500 h-5 w-5"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[12px] ">24 hours delivary</p>
                                    <p className="text-[12px] text-neutral-500 mt-1">Get customed designs in 2r hrs</p>
                                </div>
                            </div>
                            <div className="p-4 flex gap-4 items-center justify-center">
                                <div className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] h-8 w-8 flex items-center justify-center rounded-sm flex-shrink-0">
                                    <IconPlus 
                                    className="text-neutral-500 h-5 w-5"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[12px] ">Create Project</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
            </motion.div>
            }
            </AnimatePresence>
        </>
    )
}

export default Card;