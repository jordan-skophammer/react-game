import React from 'react';

const Scoreboard = props => (
    <nav className="navbar-wrapper">
        <a class="brand-logo">Memory Game</a>
        <h2 id="user-message">{props.message}</h2>
        <ul class="right hide-on-med-and-down">
            <li><h3>Score: {props.score}</h3></li>
            <li></li>
            <li><h3>Top Score: {props.topScore}</h3></li>
        </ul>
    </nav>
);

export default Scoreboard;