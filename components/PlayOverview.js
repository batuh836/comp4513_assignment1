import React from "react";
import {Link} from 'react-router-dom';
import {uniq} from 'lodash';
import "./css/PlayOverview.css";

const PlayOverview = (props) => {
    const handleFavouritesClick = () => {
        props.addToFavourites(props.play);
    }
    
    const handleSelectChange = (e) => {
        const {name, value} = e.target;
        props.setPlayFilter(name, value);
    }
    
    const handleTextChange = (e) => {
        props.setSearchText(e.target.value);
    }
    
    //if current tab is text, deisplay filter options
    if (props.currentTab === "Text") {
        const acts = props.playData.acts;
        const scenes = props.currentAct.scenes;
        const characters = ["All Players"]; //add all players to list of characters
        characters.push(...uniq(props.currentScene.speeches.map((s) => s.speaker)));
        
        return (
            <div className="play-overview">
                <h1>{props.play.title}</h1>
                <select name="act" onChange={handleSelectChange}>{acts.map((a) => 
                    <option key={a.name} value={a.name}>{a.name}</option>)}
                </select>
                <select name="scene" onChange={handleSelectChange}>{scenes.map((s) => 
                    <option key={s.name} value={s.name}>{s.name}</option>)}
                </select>
                <fieldset>
                    <select name="character" onChange={handleSelectChange}>{characters.map((c) => 
                        <option key={c} value={c}>{c}</option>)}
                    </select>      
                    <input type="text" placeholder="Enter a search term" onChange={handleTextChange}/>
                    <button>Filter</button>
                </fieldset>
                <Link to="/play-list"><button>Close</button></Link>
                <button onClick={handleFavouritesClick}>♥</button>
            </div>
        );
    }
    else {
        return (
            <div className="play-overview">
                <h1>{props.play.title}</h1>
                <p>{props.play.synopsis}</p>
                <Link to="/play-list"><button>Close</button></Link>
                <button onClick={handleFavouritesClick}>♥</button>
            </div>
        );
    }
};

export default PlayOverview