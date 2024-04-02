const CloseBtn = ({ onClose }) => {
    return ( 
        <img onClick = { onClose } src = "/close.png" alt="" className="cursor-pointer"/>
    );
}
 
export default CloseBtn;