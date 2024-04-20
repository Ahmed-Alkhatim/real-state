import { Section } from "@/components";
import team from "@/data/team.json";

const Team = () => {
    return (  
        <Section
            title = "Meet the Estatein Team"
            description = "At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
        >
            <div className="grid grid-cols-4 space-x-[20px] mt-[60px]">
                { team.map( member =>
                    <Member member = {member} />
                )}
            </div>
        </Section>
    );
}


const Member = ({member}) => {

    return(
        <div className="relative card p-6 text-center space-y-[50px]">
            <div className="h-[180px]">
                <img src={member.image} alt="" className="h-full w-full"/>
                <img src="/twitterc.png" alt="" className="absolute b-0 -translate-y-1/2 right-1/2 translate-x-1/2"/>
            </div>
            <div className="space-y-3">
                <h5>{member.name}</h5>
                <p>{member.job}</p>
                <div className="relative p-0 m-0">
                    <input className="text-medium h-[46px] w-full bg-gray-1 border border-gray-2 rounded-full p-[10px] indent-2" placeholder="Say Hello 👋"/>
                    <img src="/tele.png" alt="" className="absolute right-3 top-0 translate-y-[5px] " />
                </div>
            </div>
        </div>
    )
}
 
export default Team;