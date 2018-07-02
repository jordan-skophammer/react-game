import React from 'react';
import "./Wucard.css";

const Wucard = props => <img className="card-image" src={props.image} alt={props.name} onClick={() => props.shuffle(props.card)} />;

export default Wucard;