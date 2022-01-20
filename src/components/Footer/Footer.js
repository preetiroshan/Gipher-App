import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
    return (
        <footer className=" font-small" style={{background:'white', width: "100%", position:"absolute", bootom:"0", marginTop:"2em"}}>

            <div className="text-center mt-1">
                <a href="https://www.google.com"
                    className="youtube social mx-2">
                    <FontAwesomeIcon icon={faYoutube} size="3x" />
                </a>
                <a href="https://www.google.com"
                    className="facebook social mx-2">
                    <FontAwesomeIcon icon={faFacebook} size="3x" />
                </a>
                <a href="https://www.google.com" className="twitter social mx-2">
                    <FontAwesomeIcon icon={faTwitter} size="3x" />
                </a>
                <a href="https://www.google.com"
                    className="instagram social mx-2">
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a>
            </div>

            <div className="footer-copyright text-center text-dark"><span>&#169;</span> 2021 Copyright :
      <a href="https://www.google.com"> GipherApp</a>
            </div>
        </footer>

    )
}