import React from 'react';

const Scoreboard = props => (
    <nav className="navbar-wrapper">
        <a className="brand-logo">Wu-Tang Memory Game</a>
        {/* <h2 id="user-message" className="center">{props.message}</h2> */}
        <ul className="right hide-on-med-and-down">
            <li><h3>Score: {props.score} </h3></li>
            <li><h3>Top Score: {props.topScore}</h3></li>
        </ul>
    </nav>
);

export default Scoreboard;