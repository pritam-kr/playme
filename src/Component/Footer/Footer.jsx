import React from "react";
 
import "./Footer.css"
import * as FaIcons from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer ">
            <p className="paragraph ">Code By Pritam</p>
            <ul>
                <li className="lists ">
                    <a href="https://twitter.com/Pritamkr_" target="_blank" rel="noreferrer" className="links"> <FaIcons.FaTwitter className="icons" /> </a> </li>

                <li className="lists ">
                    <a href="https://www.linkedin.com/in/pritam-kumar-0ab3431bb/" rel="noreferrer" target="_blank" className="links"> <FaIcons.FaLinkedin className="icons"/></a></li>

                <li className="lists">
                    <a href="https://www.instagram.com/pritam_kr30/" target="_blank" rel="noreferrer" className="links"> <FaIcons.FaInstagram className="icons"/></a>
                </li>
                <li className="lists ">
                    <a href="https://github.com/pritam-kr/playme" target="_blank " rel="noreferrer" className="links "> <FaIcons.FaGithub className="icons" /></a>
                </li>
            </ul>
        </footer>
    );
};

export { Footer };
