'use client'
import { useState } from "react";
import { Btn, CloseBtn } from "@/components"

const Header = () => {
    const [isDisplayed, setIsDisplayed] = useState(true);
    return(
        <div className="container">
           { isDisplayed && <div className="relative bg-ads bg-cover bg-center h-[68px] border-b border-gray-3 ">
                <div className = "absolute top-1/2 -translate-y-1/2 right-[60px]">
                    <CloseBtn onClose={() => { setIsDisplayed(false) }}/>
                </div>
                <div className = " text-medium text-center line leading-[68px] text-[#FFF]">
                    ✨Discover Your Dream Property with Estatein
                </div>
               
            </div>}
            
            <div><Btn>Contact Us</Btn></div>
        </div>
    )
}

export default Header

 {/* <div className="nav-list">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Properties</li>
                        <li>Services</li>
                    </ul>
                </div> */}