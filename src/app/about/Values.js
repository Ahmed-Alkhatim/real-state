const Values = () => {
    return (  
        <div className="section-container grid grid-cols-3 mt-[100px]">
            <div className="flex items-center pr-[90px]">
                <div >
                    <img src="/stars.png" />
                    <div className="flex justify-between items-end">
                        <div className="space-y-3">
                            <h2>Our Values</h2>
                            <p>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card border-2 outline outline-[#191919] outline-[8px] col-span-2 p-[60px]">
                <div className="grid grid-cols-2 border-b border-gray-2 pb-[30px]">
                    <div className="pr-[30px]">
                        <div className="flex items-center space-x-2 mb-4">
                            <img src="/value1.png" alt="" />
                            <h4>Trust</h4>
                        </div>
                        <p>Trust is the cornerstone of every successful real estate transaction.</p>
                    </div>
                    <div className="pl-[30px] border-l border-gray-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <img src="/value2.png" alt="" />
                            <h4>Excellence</h4>
                        </div>
                        <p>We set the bar high for ourselves. From the properties we list to the services we provide.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-[30px]">
                    <div className="pr-[30px]">
                        <div className="flex items-center space-x-2 mb-4">
                            <img src="/value3.png" alt="" />
                            <h4>Client-Centric</h4>
                        </div>
                        <p>We are dedicated to providing you with the highest level of service, professionalism, and support.</p>
                    </div>
                    <div className="pl-[30px] border-l border-gray-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <img src="/value4.png" alt="" />
                            <h4>Our Commitment</h4>
                        </div>
                        <p>Your dreams and needs are at the center of our universe. We listen, understand.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Values;