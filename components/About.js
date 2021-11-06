import React from "react";
import Modal from 'react-modal';
import "./css/About.css";

const About = (props) => {
    const handleOnClick = () => {
        props.toggleModal();
    }
    
    return (
        <Modal isOpen={props.modalIsOpen} contentLabel="Example Modal" className="about">
            <h1>About</h1>
            <p className="subtitle">Group Members</p>
            <p>Brian Atuh</p>
            <p className="subtitle">GitHub Link</p>
            <p>Link</p>
            <button onClick={handleOnClick}>Close</button>
        </Modal>
    );
};

export default About