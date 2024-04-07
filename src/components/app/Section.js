import { Btn } from "@/components";
/**
 * 
 * @param {Text} title 
 * @param {Text} description 
 * @param {Text} btnText 
 */
const Section = (props) => {
    const { title, description, btnText } = props
    return ( 
        <div className="container mt-20 ">
            <div className="border-b border-gray-2 pb-[40px]">
                <img src="/stars.png" />
                <div className="flex justify-between items-end">
                    <div className="w-3/4">
                        <h2>{ title }</h2>
                        <p>{ description }</p>
                    </div>
                    {btnText && <div><Btn space = 'secondary' color = 'secondary' >{ btnText }</Btn></div>}
                </div>
                { props.children }
            </div>
        </div>
    );
}
 
export default Section;