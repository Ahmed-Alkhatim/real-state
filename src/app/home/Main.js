import { Btn, Card } from "@/components";

const Main = () => {
    return ( 
        <div className="main flex">

            {/* Text content */}
            <div className=" w-1/2 flex items-center" >
                <div className="space-y-[50px]">
                   
                    <div className="relative px-[80px] ">
                        <div className="absolute top-0 right-0 translate-x-1/2 ">
                            <img src="/text.png" alt="" />
                        </div>
                        <h1 className="mb-5">Discover Your Dream Property with Estatein</h1>
                        <p>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                    </div>

                    <div className="space-x-[8px] px-[80px]">
                        <Btn color = "secondary">Learn More</Btn>
                        <Btn color = "primary">Browse Properties</Btn>
                    </div>

                    <div className="grid grid-cols-3 space-x-[16px] px-[80px]">
                        {   [ 
                                { prop : 'Happy Customers', count : '200+' }, 
                                { prop : 'Properties For Clients', count : '10k+' }, 
                                { prop : 'Years of Experience', count : '16+' }

                            ].map((ele) => 
                            
                            <Card spacing = "px-[20px] py-[14px]">
                                <span className="text-[30px] text-semibold">{ele.count}</span>
                                <p>{ele.prop}</p>
                            </Card>
                        )}
                       
                    </div>
                </div>
            </div>

            {/* image */}
            <div className="w-1/2">
                <img src="/building.png" alt="" className="w-full" />
            </div>

        </div>
    );
}

export default Main;