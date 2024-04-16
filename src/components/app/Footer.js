const Footer = () => {

    const navItems = {
        'Home' : ['Hero Section', 'Features', 'Properties', 'Testimonials', 'FAQ’s'],
        "About Us" : ['Our Story', "Our Works", "Our Works", "How It Works", "Our Team", "Our Clients"],
        "Properties" : ["Portfolio", "Categories"],
        "Services" : ["Valuation Mastery", "Strategic Marketing", "Strategic Marketing", "Negotiation Wizardry", "Closing Success", "Property Management"],
        "Contact Us" : ["Contact Form", "Our Offices"]
    }

    return(
        <>
            <div className="section-container flex justify-between py-[100px] ">
                <div className="space-y-[24px]">
                    <img src="/Logo.png" alt=""/>
                    <div className="inline-block relative">
                        <input type="email" placeholder="Enter Your Email" className="border border-gray-2 bg-black rounded-[8px] w-[305px] h-[52px] px-[46px]" />
                        <img src="/email.png" alt="" className="absolute left-5 top-1/2 -translate-y-1/2"/>
                        <img src="/send.png" alt="" className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"/>
                    </div>
                </div>
                { Object.keys(navItems).map( navItem =>
                    <div>
                        <h5 className="text-[14px] text-secondary mb-[24px]">{navItem}</h5>
                        <ul className="space-y-[16px]">
                            { navItems[navItem].map(link => 
                                <li key={link} className="text-[14px]">{link}</li>) 
                            }
                        </ul>
                    </div>
                )}
            </div>
            <div className="section-container flex-center py-[16px] bg-gray-1">
                <div className="space-x-[20px]">
                    <span>@2023 Estatein. All Rights Reserved.</span>
                    <span>Terms & Conditions</span>
                </div>
                <div className="flex space-x-[8px]">
                    <img src="/facebook.png" alt="" className="cursor-pointer" />
                    <img src="/linkedin.png" alt="" className="cursor-pointer" />
                    <img src="/twitter.png" alt=""  className="cursor-pointer"/>
                    <img src="/youtube.png" alt=""  className="cursor-pointer"/>
                </div>
            </div>
        </>
    )
}

export default Footer
