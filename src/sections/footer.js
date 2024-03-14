import React from "react";
import './footer.css';
import Socials from "../components/socials";

function Footer(){
    return(
        <div className="footer-main-div">
            <div className="footer-credits">Developed by Rahma Idayathulla</div>
            <Socials></Socials>
        </div>
    );

}

export default Footer;