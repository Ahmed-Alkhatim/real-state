import { Property, Section  } from "@/components";

const FeaturedProperties = () => {
    const properties = [
        { 
            id : '', title : 'Seaside Serenity Villa', image : '/image1.png', 
            subtitle : 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...', 
            bed_rooms : '4', bath_rooms : '3', type : 'Villa', price : '$550,000' 
        },
        { 
            id : '', title : 'Metropolitan Haven', image : '/image2.png', 
            subtitle : 'A chic and fully-furnished 2-bedroom apartment with panoramic city views... ', 
            bed_rooms : '2', bath_rooms : '1', type : 'Villa', price : '$550,000' 
        },
        { 
            id : '', title : 'Rustic Retreat Cottage', image : '/image3.png', 
            subtitle : 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...', 
            bed_rooms : '4', bath_rooms : '3', type : 'Villa', price : '$550,000' 
        },
    ]
    return ( 
        <>
            <Section 
                title = 'Featured Properties' 
                description = 'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.' 
                btnText = 'View All Properties'
            >
                <div className="grid grid-cols-3 space-x-[20px] mt-[60px]">
                    { properties.map(prop => 
                        <Property property = {prop}/>
                    )}
                </div>
            </Section>
        </>
        
    );
}
 
export default FeaturedProperties;