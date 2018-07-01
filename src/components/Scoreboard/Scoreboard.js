import React from 'react';
import "./Scoreboard.css"

const Scoreboard = props => (
    <nav className="black yellow-text">
        <div className="navbar-wrapper">
            <img src="../../../assets/images/wulogo.jpg" alt="wulogo"/>
            <h3 className="brand-logo yellow-text">Wu-Tang Memory Game</h3>
            <div className="right scoreboard">
                <h3>Score: {props.score}<br /> Top Score: {props.topScore}</h3>
            </div>
        </div>
    </nav>
);

export default Scoreboard;