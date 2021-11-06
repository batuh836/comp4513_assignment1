import React from "react";
import Highlighter from "react-highlight-words";
import "./css/PlayDataView.css";

const PlayDataView = (props) => {
    const highlightText = (text) => {
        //replace found search text, with text wrapped in strong element
        const searchText = props.searchText;
        return (text.replace(searchText, "<strong>" + searchText + "</strong>"));
    }
    
    //display data according to current tab
    if (props.currentTab === "Details") {
        return (
            <div className="data-view">
                <p><strong>Likely date of composition:</strong> {props.play.likelyDate}</p>
                <p><strong>Genre:</strong> {props.play.genre}</p>
                <p><strong>Wiki Link:</strong> <a href={props.play.wiki}>{props.play.wiki}</a></p>
                <p><strong>Gutenberg:</strong> <a href={props.play.gutenberg}>{props.play.gutenberg}</a></p>
                <p><strong>Shakespeare.org Link:</strong> <a href={props.play.shakespeareOrg}>{props.play.shakespeareOrg}</a></p>
                <p><strong>Description:</strong></p>
                <p>{props.play.desc}</p>
            </div>
        );
    }
    else if (props.playData === null || props.currentAct === null) {
        return (
            <div className="data-view"></div>
        );
    }
    else if (props.currentTab === "Characters") {
        return (
            <div className="data-view">
                {props.playData.persona.map((p) =>
                    <p key={p.player}><strong>{p.player}</strong> - {p.desc ? p.desc : "No description"}</p>
                )}
            </div>
        );
    }
    else {
        return (
            <div className="data-view">
                <h2>{props.playData.title}</h2>
                <article id="actHere">
                    <h3>{props.currentAct.name}</h3>
                    <div id="sceneHere">
                        <h4>{props.currentScene.name}</h4>
                        <p>{props.currentScene.title}</p>
                        <p>{props.currentScene.stageDirection}</p>
                        {props.currentScene.speeches.filter((s) => 
                            //if 'all players' is selected return all speeches
                            //else return speeches based on current character
                            props.currentCharacter === "All Players" ? true : props.currentCharacter === s.speaker
                        ).map((s, i) => 
                            <div key={i}>
                                <p className="speaker"><strong>{s.speaker}</strong></p>
                                {s.lines.map((l, i) => 
                                    <p className="line" key={i}>
                                         <Highlighter searchWords={[props.searchText]} textToHighlight={l}/>
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </article>
            </div>
        );
    }
};

export default PlayDataView