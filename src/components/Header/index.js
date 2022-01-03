import React from "react";
import { Link } from "react-router-dom";
import '../../App.css';


const Header = () => {
        return(
            <header>
                <div className="header_btn">
                    <Link to="/count">
                        <button >Count</button>
                    </Link>
                    <Link to="/form">
                        <button >Form</button>
                    </Link>
                    <Link to="/list">
                        <button >List</button>
                    </Link>
                </div>  
            </header>
        )

}


export default Header;