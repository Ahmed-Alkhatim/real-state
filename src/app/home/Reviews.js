import { Section } from "@/components";
import reviews from "@/data/reviews";

const Reviews = () => {
    return (  
        <>
            <Section 
                title  = 'What Our Clients Say'
                description = 'Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.'
                btnText = 'View All Testimonials'
            >
                <div className="flex space-x-[20px] mt-[60px]">
                    { reviews.map( review => 
                        <Review review = {review}/>
                    )}
                </div>
            </Section>
        </>
    );
}
 


const Review = (props) => {
    const { review } = props
    return(
        <div className="pd-[30px] border border-gray-2 rounded-[12px] p-[40px] space-y-[30px]">
            <div>
                <img src="/stars-rate.png" alt="" /> 
            </div>
            <div>
                <h5>{ review.title }</h5>
                <p className="text-[#fff] mt-2">{ review.description }</p>
            </div>
            <div className="flex space-x-[10px]">
                <div className="w-[50px] h-[50px]">
                    <img src={review.reviewer.image} alt="" className="w-full h-full" />
                </div>
                <div className="flex flex-col justify-between">
                    <p>{ review.reviewer.name }</p>
                    <p className="text-[#FFF]">{ review.reviewer.address }</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews;