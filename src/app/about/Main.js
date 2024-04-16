import { Section, Statistics } from "@/components";

const Main = () => {
    return ( 
        <div className="section-container grid grid-cols-2 space-x-[60px] mt-[70px]">
            <div className="space-y-[50px]">
                <div>
                    <img src="/stars.png" />
                    <div className="flex justify-between items-end">
                        <div className="w-3/4">
                            <h2>Our Journey </h2>
                            <p>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>
                        </div>
                    </div>
                </div>
                <Statistics />
            </div>
            <div className="">
                <img src="/home.png" className="w-full h-full" />
            </div>
        </div> 
    );
}
 
export default Main;