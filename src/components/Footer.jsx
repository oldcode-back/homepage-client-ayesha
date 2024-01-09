import Wrapper from "../assets/wrappers/Footer"

//icon imports
import { LiaPhoneSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { GoMail } from "react-icons/go";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

//image import
import logo from '../assets/images/logo.png'

const Footer = () => {
    return (
        <Wrapper>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="footer-parent-div">

                <div className="footer-left-div">
                    <h3>
                        contact us
                    </h3>
                    <p>
                        <span>
                            <LiaPhoneSolid />
                        </span>
                        +91 9150289762</p>
                    <p>
                        <span>
                            <CiLocationOn />
                        </span>
                        Velachery, Chennai</p>
                    <p>
                        <span>
                            <GoMail />
                        </span>
                        mag@bromagindia.com</p>
                </div>
                <div className="footer-right-div">
                    <h3>Enquire Now</h3>
                    <form >
                        <input type="text" placeholder="Enter your name" />
                        <input type="text" placeholder="Enter your email" />
                        <input type="text" placeholder="Enter your mobile number" />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>

            <div className="socials">
                <h3>social links</h3>
                <div className="social-icons">
                    <span><FaTwitter /></span>
                    <span><FaFacebookF /></span>
                    <span><FaInstagram /></span>
                </div>
            </div>

            <div className="copyright">
                <p>
                    © 2024 Piqual, All Rights Reserved.
                </p>
                <p>
                    <a href="#">Privacy Policy</a>{" "}|{" "}
                    <a href="#">Terms & conditions</a>
                </p>
            </div>

            <svg className="svg">
                <clipPath id="clip" clipPathUnits="objectBoundingBox"><path d="M1,0.046 L0.981,0.064 C0.902,0.136,0.807,0.162,0.716,0.135 L0.31,0.015 C0.25,-0.003,0.188,-0.004,0.128,0.012 L0,0.046 V1 H1 V0.046"></path></clipPath>
            </svg>
        </Wrapper>
    )
}
export default Footer