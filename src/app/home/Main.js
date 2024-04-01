import { Btn, Card } from "@/components";

const Main = () => {
    return ( 
        <div className="main flex">

            {/* Text content */}
            <div className="w-1/2">
                <div>
                    <h1></h1>
                    <p></p>
                </div>
                <div>
                    <Btn color = "primary">name</Btn>
                    <Btn color = "secondary">name</Btn>
                </div>
                <div className="space-y-10">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                        </Card>
                        <Card spacing = "px-[20px] py-[14px]">
                            <span className="text-[30px] text-semibold">16+</span>
                            <p>Years of Experience</p>
                        </Card>
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