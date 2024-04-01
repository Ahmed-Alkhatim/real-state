const Btn = (props) => {
    const style = {
        'primary' : "bg-primary text-[#FFF]",
        'secondary' : "bg-secondary text-[#FFF]",
    }
    return(
        <button className = { style[props.color] + " px-[24px] py-[18px] rounded-[10px]"} >
            {props.children}
        </button>
    )
}

export default Btn