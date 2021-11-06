import React from "react";
import {Link} from 'react-router-dom';
import "./css/Header.css";

const Header = (props) => {
    const handleOnClick = () => {
        props.toggleModal();
    }
    
    return (
        <div className="header">
            <Link to="/"><span>Play Browser</span></Link>
            <button onClick={handleOnClick}>About</button>
        </div>
    );
};

export default Header