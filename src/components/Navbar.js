import React from "react";
import { data } from "../data";

class Navbar extends React.Component {

    render() {
        return (
            <div className="nav">
                <div className="logo">
                    <div className="pic">
                        <img alt="logo" src="" />
                    </div>
                    HRmovies</div>
                <div className="searchbar">
                    <input />
                    <button id="search-btn">Search</button>
                </div>
            </div>
        );      
    }
}

export default Navbar;
