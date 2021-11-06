import React from "react";
import {Link} from 'react-router-dom';
import "./css/Home.css";

const Home = (props) => {
    const handleMatchingClick = () => {
        const title = document.getElementById("title").value;
        props.setFilteredPlays({"title": title}, "title");
    }
    
    const handleAllClick = () => {
        props.setFilteredPlays({}, "title");
    }
    
    return (
        <div className="home">
            <article className="article">
                <form className="form">
                    <legend>Play Browser</legend>
                    <label>Search Play Title</label><input id="title" type="text"/><br/>
                    <Link to="/play-list"><button onClick={handleMatchingClick}>Show Matching Plays</button></Link>
                    <Link to="/play-list"><button onClick={handleAllClick}>Show All Plays</button></Link><br/>
                </form>
            </article>
            <p>Phantom of the Opera at Istana Budaya, Kuala Lumpur. World Tour 2019.</p>
        </div>
    );
};

export default Home