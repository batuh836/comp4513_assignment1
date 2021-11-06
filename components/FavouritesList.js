import React from "react";
import FavouritesItem from "./FavouritesItem.js";
import "./css/FavouritesList.css";

const FavouritesList = (props) => {
    const handleToggleClick = (e) => {
        //toggle favourites visibility
        let favouritesList = e.target.parentElement; 
        let parentElement = favouritesList.parentElement; 
        parentElement.classList.toggle("hide-favourites");
    }
    
    if (props.favourites) {
        return (
            <div className="favourites-list">
                <h1>Favourites</h1>
                <ul>
                {props.favourites.map((p) => 
                    <li key={p.id}><FavouritesItem play={p} 
                                                   removeFromFavourites={props.removeFromFavourites} 
                                                   setCurrentPlay={props.setCurrentPlay}/>
                    </li>
                )}
                </ul>
                <button id="toggle-button" onClick={handleToggleClick}></button>
            </div>
        );
    }
    else {
        return null;
    }
};

export default FavouritesList