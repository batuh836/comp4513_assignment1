import React from "react";
import "./css/PlayDataTabBar.css";

const PlayDataTabBar = (props) => {
    const handleOnClick = (e) => {
        if (e.target.title !== props.currentTab) {
            //toggle active tabs
            e.target.classList.toggle("active");
            props.setCurrentTab(e.target.title);
        }
    }
    
    const getClassName = (t) => {
        //set initial active tab
        return (t === props.currentTab ? "active" : "");
    }
    
    return (
        <div className="tab-bar">
            {props.tabs.map((t) => 
                <button className={getClassName(t)} key={t} title={t} onClick={handleOnClick}>{t}</button>
            )}
        </div>
    );
};

export default PlayDataTabBar