import React, { Component } from 'react';
import "./App.css"
import wuMembers from "./WuMembers.json"
import Scoreboard from "./components/Scoreboard/Scoreboard"
import Wucard from './components/Wucard/Wucard';
import MessageBody from "./components/MessageBody/MessageBody";

class App extends Component {

  state = {
    message: "Click to begin!",
    score: 0,
    topScore: 0,
    card: wuMembers
  };

  baseState = this.state;

  shuffle = card => {

    let counter = this.state.card.length;
    
    let suffledArray = this.state.card;

    let score = this.state.score;

    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);

      counter--;

      let temp = suffledArray[counter];
      suffledArray[counter] = suffledArray[index];
      suffledArray[index] = temp;
    };
    this.setState({suffledArray});

    this.changeScore(score, card);

  }

  changeScore = (score, card) => {

    if (card.clicked === true) {
      this.resetGame(score, card);
    }else {

      let message = "Correct!";
      this.setState({message});

      score++;

      this.setState({score});

      let topScore = 0 ;

      this.setState({topScore});

      if (score > topScore) {
        topScore = score;
      };

      this.setState({topScore});

      let clicked = true;

      card.clicked = clicked;

      if (score > 8) {
        this.resetGame(score, card);
      };
      
    };

    console.log(this.state);
  };

  resetState = () => {this.setState(this.baseState.clicked)};

  resetGame = (score) => {

      this.resetState();

      score = 0;
      this.setState({score});
      
      let message = "Incorrect, Game Over!";
      this.setState({message});
      console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <Scoreboard 
        score={this.state.score}
        topScore={this.state.topScore}
        />
        <div className="container">
          <MessageBody 
            message= {this.state.message}
          />
          <div className="row card-grid">
            <div className="col m2"></div>
            <div className="col m8 center-align">
              {this.state.card.map(card =>  
              <Wucard
                image = {card.image}
                alt = {card.id}
                shuffle= {this.shuffle}
                card= {card}
                key = {card.id}
              />
              )}
            </div>
            <div className="col m2"></div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;