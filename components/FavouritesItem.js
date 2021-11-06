import React from "react";
import {Link} from 'react-router-dom';
import "./css/FavouritesItem.css";

const FavouritesItem = (props) => {
    const handleOnClick = () => {
        props.removeFromFavourites(props.play);
    }
    
    const handleViewClick = (play) => {
        console.log(play);
        props.setCurrentPlay(play);
    }
    
    return (
        <div className="favourites-item">
            <Link to="/play-detail"><span onClick={() => {handleViewClick(props.play)}}>{props.play.title}</span></Link>
            <button onClick={handleOnClick}>Remove</button>
        </div>
    );
};

export default FavouritesItem