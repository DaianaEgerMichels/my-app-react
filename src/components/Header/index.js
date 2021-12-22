import React from "react";
import '../../App.css';


const Header = () => {
        return(
            <header>
                <div className="header_btn">
                    
                        <button >Count</button>
                  
                   
                        <button >Count Money</button>
                    
                    
                        <button >Form</button>
                    
                    
                        <button >List</button>
                    
                </div>  
            </header>
        )

}


export default Header;


/*import React from "react";
import { Link } from "react-router-dom";
import '../../App.css';


const Header = () => {
        return(
            <header>
                <div className="header_btn">
                    <Link to="/count">
                        <button >Count</button>
                    </Link>
                    <Link to="/money">
                        <button >Count Money</button>
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


export default Header;*/