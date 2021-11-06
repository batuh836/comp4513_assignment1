import React from "react";
import "./css/PlayFilters.css";

const PlayFilters = (props) => {
    const handleFilterClick = () => {
        //get value from each input element
        const title = document.getElementById("title").value;
        const before = document.getElementById("before").checked;
        const beforeYear = document.getElementById("beforeYear").value;
        const after = document.getElementById("after").checked;
        const afterYear = document.getElementById("afterYear").value;
        const genre = document.getElementById("genre").value;
        
        //filter plays with input values
        props.setFilteredPlays({"title": title,
                                "before": before,
                                "beforeYear": beforeYear,
                                "after": after,
                                "afterYear": afterYear,
                                "genre": genre
                               }, null, true);
    }
    
    const handleClearClick = () => {
        //set input values to initial values
        document.getElementById("title").value = "";
        document.getElementById("before").checked = false;
        document.getElementById("beforeYear").value = "";
        document.getElementById("after").checked = false;
        document.getElementById("afterYear").value = "";
        document.getElementById("genre").value = "";
        
        //remove filters from plays
        props.setFilteredPlays({}, null, true);
    }
    
    
    return (
        <div className="play-filters">
            <form className="filter-form">
                <h1 className="filter-header">Play Filters</h1>
                <label className="main">Title</label><br/>
                <input className="full" id="title" type="text"/><br/>
                <label className="main">Year</label><br/>
                <div className="before-filters">
                    <input id="before" type="checkbox"/><label className="sub">Before:</label>
                    <input className="partial" id="beforeYear" type="text"/>
                </div>
                <div className="after-filters">
                    <input id="after" type="checkbox"/><label className="sub">After:</label>
                    <input className="partial" id="afterYear" type="text"/>
                </div>
                <label className="main">Genre</label><br/>
                <select id="genre">
                    {props.genres.map((g, i) => 
                        <option key={i} value={g}>{g}</option>                          
                    )}
                </select>
            </form>
            <div className="button-container">
                <button className="filter-button" onClick={handleFilterClick}>Filter</button>
                <button className="filter-button" onClick={handleClearClick}>Clear</button>
            </div>
        </div>
    );
};

export default PlayFilters