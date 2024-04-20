import Card from "../ui/Card";

const Statistics = () => {
    return (  
        <div className="grid grid-cols-3 space-x-[6px]">
            {   [ 
                    { prop : 'Happy Customers', count : '200+' }, 
                    { prop : 'Properties For Clients', count : '10k+' }, 
                    { prop : 'Years of Experience', count : '16+' }

                ].map((ele) => 
                
                <Card spacing = "px-[20px] py-[14px]">
                    <span className="text-[24px] text-semibold">{ele.count}</span>
                    <p className="text-medium">{ele.prop}</p>
                </Card>
            )}
            
        </div>
    );
}
 
export default Statistics;