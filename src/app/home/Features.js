import { Card } from "@/components";

const Features = () => {

    const features = [
        { title : 'Find Your Dream Home', img : '/dream.png' },
        { title : 'Unlock Property Value', img : '/property.png' },
        { title : 'Effortless Property Management', img : '/management.png' },
        { title : 'Smart Investments, Informed Decisions', img : '/investment.png' },
    ]

    return ( 
        <div className="grid grid-cols-4 p-[10px] space-x-[10px] border border-gray-2">
            { features.map((feature) =>
                <Card spacing = "py-[30px] px-[16px]">
                    <div className="flex flex-col items-center space-y-[16px]">
                        <img src={feature.img} alt="" />
                        <p className="text-[#fff]">{feature.title}</p>
                    </div>
                </Card>)
            }
        </div>
    );
}
 
export default Features;