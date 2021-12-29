import React from "react";
import '../../App.css';
import {FaInstagram, FaLinkedin} from "react-icons/fa";

const Footer = ()=> {
    
        return(
                <footer className="footer">
                    <h3>DEV in House - SENAI | ACATE</h3>
                    <p>By: Daiana Eger Michels</p>
                    <ul className="social_list">
                            <li>
                            <a href="https://www.linkedin.com/in/19972309daiana-eger-michels/"><FaLinkedin></FaLinkedin></a>
                            </li>
                    </ul>
                </footer>
        )
    
}

export default Footer;