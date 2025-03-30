'use client'

import { Dispatch, SetStateAction, useState } from "react";

export type TogglePrizeInput = {
    save: string,
    setToggle: Dispatch<SetStateAction<boolean>>
    toggle: boolean
}

const TogglePrice = ({
    save,
    setToggle,
    toggle
}: TogglePrizeInput) => {
    const [annually, setAnnually] = useState(false);
    const [monthly, setMonthly] = useState(true);
    return (
        <>
        <div className="bg-gradient-to-r from-[rgb(19,19,19)] to-[rgb(0,28,18)] px-7 py-4 rounded-4xl border border-[#313131] flex text-sm items-center justify-center">
            <div 
            className="cursor-pointer flex items-center justify-center"
            onClick={() => {setAnnually(!annually), setMonthly(!monthly), setToggle(!toggle)}}
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
            onClick={() => {setMonthly(!monthly), setAnnually(!annually), setToggle(!toggle)}}
            >
                <span className="relative w-5 h-5 rounded-full border border-[#CACACA] mr-2">
                    {
                        monthly && (
                            <span className="absolute w-2 h-2 rounded-full bg-[#CACACA] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                        )
                    }
                </span>
                <span className="mr-3 text-base">Monthly</span>
                <span className="text-[#00FFA5] font-medium">{save}</span>
            </div>
        </div>
        {
            annually ? <span className="text-sm text-neutral-400">Billed in one annual payment.</span>
            : <span className="text-sm text-neutral-400">Billed monthly.</span>
        }
        </>
    )
}

export default TogglePrice;