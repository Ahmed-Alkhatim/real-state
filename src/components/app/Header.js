'use client'
import { useState } from "react";
import { Btn, CloseBtn } from "@/components"
import Link from 'next/link'
import { usePathname } from "next/navigation";

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
            <div className="relative bg-ads bg-cover bg-center h-[49px] ">
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
    const pathname = usePathname()
    return(
        <div className="container flex items-center justify-between py-[14px]  border-t-[2px] border-b-[2px] border-gray-2">
            <div><img src="/Logo.png"/></div>
            <div>
                <ul className="space-x-10">
                    <Link href='home'><li className={"inline-block py-[12px] px-[20px] rounded-[8px]" + ( pathname == '/home' ? ' bg-black border border-gray-2' : '')}>Home</li></Link>
                    <Link href = "about"><li className={"inline-block py-[12px] px-[20px] rounded-[8px]" + ( pathname == '/about' ? ' bg-black border border-gray-2' : '')}>About Us</li></Link>
                    <Link href = "properties"><li className={"inline-block py-[12px] px-[20px] rounded-[8px]"+ ( pathname == '/properties' ? ' bg-black border border-gray-2' : '')}>Properties</li></Link>
                    <Link href = "services"><li className={"inline-block py-[12px] px-[20px] rounded-[8px]"+ ( pathname == '/services' ? ' bg-black border border-gray-2' : '')}>Services</li></Link>
                </ul>
            </div> 
            <div>
                <Btn color = "secondary">Contact Us</Btn>
            </div>
        </div>
    )
}


export default Header
