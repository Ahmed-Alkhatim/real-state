import { Btn } from "@/components"

const Header = () => {
    return(
        <div className="container">
            <div className="header-logo">
                <img src="" alt="" />
            </div>
            <div className="nav-list">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Properties</li>
                    <li>Services</li>
                </ul>
            </div>
            <div><Btn>Contact Us</Btn></div>
        </div>
    )
}

export default Header