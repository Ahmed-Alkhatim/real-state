const CloseBtn = ({ onClose }) => {
    return ( 
        <svg onClick = { onClose } className = "cursor-pointer" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="16" fill="white" fill-opacity="0.1"/>
            <path d="M10 22L22 10M10 10L22 22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
}
 
export default CloseBtn;