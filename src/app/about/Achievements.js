import { Section } from "@/components";
import achievements from "@/data/achievements.json";
const Achievements = () => {
    return (  
        <>
            <Section
                title = "Our Achievements"
                description = "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
            >
                <div className="grid grid-cols-3 space-x-[30px] mt-[60px]">
                    {
                        achievements.map(achievement =>
                            <div className="card p-10 space-y-6">
                                <h3>{achievement.title}</h3>
                                <p>{achievement.description}</p>
                            </div>
                        )
                    }
                </div>
            </Section>
        </>
    );
}
 

export default Achievements;