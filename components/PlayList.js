import React from "react";
import {CSSTransitionGroup} from 'react-transition-group';
import FavouritesList from "./FavouritesList.js";
import PlayFilters from "./PlayFilters.js";
import PlayMatches from "./PlayMatches.js";
import "./css/PlayList.css";

const PlayList = (props) => {
    return (
        <div className="play-list">
                <FavouritesList favourites={props.favourites} 
                                removeFromFavourites={props.removeFromFavourites} 
                                setCurrentPlay={props.setCurrentPlay}/>
                <PlayFilters filters={props.filters} 
                             setFilteredPlays={props.setFilteredPlays} 
                             genres={props.genres}/>
                <PlayMatches plays={props.plays} 
                             setFilteredPlays={props.setFilteredPlays} 
                             addToFavourites={props.addToFavourites} 
                             setCurrentPlay={props.setCurrentPlay}/>

        </div>
//        <CSSTransitionGroup transitionName="favourites" 
//                            transitionAppear={true} 
//                            transitionAppearTimeout={500}
//                            transitionEnterTimeout={500} 
//                            transitionLeaveTimeout={500}>
//        </CSSTransitionGroup>
    );
};

export default PlayList