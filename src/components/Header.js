'use client'
import { useState } from "react";
import { Btn, CloseBtn } from "@/components"


const Header = () => {
    return(
        <>
            <AdsHeader />
            <Navigators />
        </>
    )
}


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



const Navigators = () => {
    return(
        <div className="container flex items-center justify-between py-5">
            <div><img src="/Logo.png"/></div>
            <div>
                <ul className="space-x-10">
                    <li className="inline-block">Home</li>
                    <li className="inline-block">About Us</li>
                    <li className="inline-block">Properties</li>
                    <li className="inline-block">Services</li>
                </ul>
            </div> 
            <div>
                <Btn color = "secondary">Contact Us</Btn>
            </div>
        </div>
    )
}


export default Header
