import { Btn } from "@/components";

const Section = (props) => {
    const { title, description, btnText } = props
    return ( 
        <div className="container border-b border-gray-2 mt-20 pb-[40px]">
            <>
                <img src="/stars.png" />
                <div className="flex justify-between items-end">
                    <div className="w-3/4">
                        <h2>{ title }</h2>
                        <p>{ description }</p>
                    </div>
                    <div><Btn color = 'secondary'>{ btnText }</Btn></div>
                </div>
            </>
            { props.children }
        </div>
    );
}
 
export default Section;