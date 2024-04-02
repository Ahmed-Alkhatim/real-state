import { Card } from "@/components";

const Features = () => {
    return ( 
        <div className="grid grid-cols-4 p-[10px] space-x-[10px] border border-gray-2">
            <Card spacing = "py-[30px] px-[16px]">
                <div className="flex flex-col items-center space-y-[16px]">
                    <img src="/dream.png" alt="" />
                    <p className="text-[#fff]">Find Your Dream Home</p>
                </div>
            </Card>
            <Card spacing = "py-[30px] px-[16px]">
                <div className="flex flex-col items-center space-y-[16px]">
                    <img src="/property.png" alt="" />
                    <p className="text-[#fff]">Unlock Property Value</p>
                </div>
            </Card>
            <Card spacing = "py-[30px] px-[16px]">
                <div className="flex flex-col items-center space-y-[16px]">
                    <img src="management.png" alt="" />
                    <p className="text-[#fff]">Effortless Property Management</p>
                </div>
            </Card>
            <Card spacing = "py-[30px] px-[16px]">
                <div className="flex flex-col items-center space-y-[16px]">
                    <img src="/investment.png" alt="" />
                    <p className="text-[#fff]">Smart Investments, Informed Decisions</p>
                </div>
            </Card>
        </div>
    );
}
 
export default Features;