const Btn = (props) => {
    const style = {
        'primary' : "bg-primary text-[#FFF]",
        'secondary' : "bg-[#141414] text-[#FFF] border border-gray-3",
    }
    return(
        <button className = { style[props.color] + " px-[20px] py-[14px] rounded-[10px]"} >
            {props.children}
        </button>
    )
}

export default Btn