import Btn from "../ui/Btn";

const Property = (props) => {

    const { property } = props

    return ( 
        <div className="border border-gray-2 p-[30px] space-y-[18px] rounded-[12px]">

            <div className="space-y-3">
                <div className="h-[255px]">
                    <img src={property.image} alt="" className="w-full h-full"/>
                </div>
                <h4>{ property.title}</h4>
                <p>
                    { property.subtitle}
                    <a>Learn more</a>
                </p>
            </div>

            <div className="flex flex-wrap space-x-1  text-medium">
                <div className="flex items-center space-x-1 mt-1 rounded-full bg-gray-1 border-[2px] border-gray-2 px-[14px] py-[8px] h-[34px] leading-[17px]">
                    <img className = 'inline-block mr-2' alt = '' src="/icons/bed.png"/>
                    <span>{property.bed_rooms}-Bedroom</span>
                </div>
                <div className="flex items-center space-x-1 mt-1 rounded-full bg-gray-1 border-[2px] border-gray-2 px-[14px] py-[8px] h-[34px] leading-[17px]">
                    <img className = 'inline-block mr-2' alt = '' src="/icons/bath.png"/>
                    <span>{property.bath_rooms}-Bathroom</span>
                </div>
                <div className="flex items-center space-x-1 mt-1 rounded-full bg-gray-1 border-[2px] border-gray-2 px-[14px] py-[8px] h-[34px] leading-[17px]">
                    <img className = 'inline-block mr-2' alt = '' src="/icons/villa.png"/>
                    <span>{property.type}</span>
                </div>
            </div>

            <div className="flex justify-between">
                <div>
                    <p>Price</p>
                    <h4>{property.price}</h4>
                </div>
                <Btn color = 'primary' >View Property Details</Btn>
            </div>
        </div>
    );
}
 
export default Property;