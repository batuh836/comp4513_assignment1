import React from "react";

const FavouriteButton = (props) => {
    const handleOnClick = () => {
        props.addToFavourites(props.play);
    }
    
    return (
        <button onClick={handleOnClick}>♥</button>
    );
};

export default FavouriteButton