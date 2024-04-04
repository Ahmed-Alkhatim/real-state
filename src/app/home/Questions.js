import { Btn, Section } from "@/components"
import questions from '@/data/questions.json'

const Questions = () => {
    return (  
        <div className="">
            <Section
                title = "Frequently Asked Questions"
                description = "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
                btnText = 'View All FAQ’s'
            >   
                <div className="flex space-x-[20px] mt-[60px]">
                    { questions.map( question =>
                        <Question question = {question}/>
                    )}
                </div> 
            </Section>
        </div>
    );
}

const Question = (props) => {
    const { question } = props
    return(
        <div className="card p-[50px] space-y-[30px]">
            <h4 className="">{question.question}</h4>
            <p className="">{question.answer}</p>
            <Btn color = "secondary">Read More</Btn>
        </div>
    )
}

 
export default Questions;