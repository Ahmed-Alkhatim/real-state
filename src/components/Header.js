'use client'
import { useState } from "react";
import { Btn } from "@/components"
import AdsHeader from "./AdsHeader"
const Header = () => {


    return(
        <>
            <AdsHeader />
            <Navigators />
        </>
    )
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
