import { Property, Section  } from "@/components";
import properties from "@/data/properties";

const FeaturedProperties = () => {
    return ( 
        <>
            <Section 
                title = 'Featured Properties' 
                description = 'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.' 
                btnText = 'View All Properties'
            >
                <div className="flex space-x-[20px] mt-[60px]">
                    { properties.map(prop => 
                        <Property property = {prop}/>
                    )}
                </div>
            </Section>
        </>
        
    );
}
 
export default FeaturedProperties;