'use client'
import { useState } from "react";
import { CloseBtn } from "@/components"
const AdsHeader = () => {

    const [isDisplayed, setIsDisplayed] = useState(true);

    return ( 
        <>
        { isDisplayed && 
            <div className="relative bg-ads bg-cover bg-center h-[49px] border-b border-gray-3 ">
                <div className = "absolute top-1/2 -translate-y-1/2 right-[60px]">
                    <CloseBtn onClose={() => { setIsDisplayed(false) }}/>
                </div>
                <div className = " text-medium text-center line leading-[49px] text-[#FFF]">
                    ✨Discover Your Dream Property with Estatein
                </div>
            </div>}
        </> 
    );
}


export default AdsHeader