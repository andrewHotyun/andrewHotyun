import React from 'react';
import Search from "./Search.js"
import "./Navbar.css"

function Navbar(){
    // used as the navbar for the site.
    return(
        <div className="navbar">
            <div className="logo bold">Users List</div>
            <div className="descriptor">
                <div className="bold">Users Search: </div>
                <Search />
            </div>
        </div>
    )
}
export default Navbar;