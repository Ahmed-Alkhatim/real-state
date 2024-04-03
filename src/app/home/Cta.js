import { Btn } from "@/components";

const Cta = () => {
    return (  
        <div className="container h-[260px] px-[80px] py-[60px] mt-[60px] bg-cta bg-cover bg-center ">
            <div className="flex items-center justify-between h-full">
                <div className="w-2/3">
                    <h2>Start Your Real Estate Journey Today</h2>
                    <p>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                </div>
                <Btn color = "primary">Explore Properties</Btn>
            </div>
        </div>
    );
} 
 
export default Cta
