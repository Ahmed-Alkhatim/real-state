const Card = (props) => {
    return(
        <div className={ props.spacing + " bg-gray-1 rounded-[10px] border border-gray-2 "}>
            {props.children}
        </div>
    )
}

export default Card
