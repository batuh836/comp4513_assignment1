import React from "react";
import PlayDataTabBar from "./PlayDataTabBar.js";
import PlayDataView from "./PlayDataView.js";

const PlayData = (props) => {
    return (
        <div className="container">
            <PlayDataTabBar tabs={props.tabs} 
                            currentTab={props.currentTab} 
                            setCurrentTab={props.setCurrentTab}/>
            <hr/>
            <PlayDataView currentTab={props.currentTab} 
                          play={props.play} 
                          playData={props.playData}
                          currentAct={props.currentAct}
                          currentScene={props.currentScene}
                          currentCharacter={props.currentCharacter}
                          searchText={props.searchText}/>
            <hr/>
        </div>
    );
}

export default PlayData