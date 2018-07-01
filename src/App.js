import React, { Component } from 'react';
import "./App.css"
import wuMembers from "./WuMembers.json"
import Scoreboard from "./components/Scoreboard/Scoreboard"
import Wucard from './components/Wucard/Wucard';

class App extends Component {

  state = {
    message: "",
    score: 0,
    topScore: 0,
    card: wuMembers
  }

  shuffle = card => {

    let counter = this.state.card.length;
    
    let suffledArray = this.state.card;

    let score = this.state.score

    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);

      counter--;

      let temp = suffledArray[counter];
      suffledArray[counter] = suffledArray[index];
      suffledArray[index] = temp
    };
    this.setState({suffledArray});

    this.changeScore(score, card);

    console.log(card)
  }

  // clickState = (card) => {

  //   let clicked = true;

  //   card.clicked = clicked

  //   this.changeScore(card);
  // }


  changeScore = (score, card) => {

    if (card.clicked === true) {
      this.resetGame(score, card)
    }else {
      score++;

      this.setState({score});

      let topScore = this.state.topScore;

      if (score > topScore) {
        topScore = score;
      };

      this.setState({topScore});

      // let card = {
      //   id: wuMembers.id,
      //   image: wuMembers.image
      // }
      // this.setState({card})
      // this.resetGame(score)

      // if (score > 9) {
      //   score = 0;
      // }
      let clicked = true;

      card.clicked = clicked

      console.log(card)
      if (score > 8) {
        this.resetGame(score, card)
      }
      
    }

    
  };

  resetGame = (score, card) => {

    // if (card.clicked === true) {
    //   let clicked = false
    //   card.clicked = clicked
    //   score = 0
    //   this.setState({clicked})
    //   this.setState({score})
    // }

    
      let clicked = false
      card.clicked = clicked
      score = 0
      this.setState({clicked})
      this.setState({score})
    
  };

  render() {
    return (
      <div className="App">
        <Scoreboard 
        score={this.state.score}
        topScore={this.state.topScore}
        />
        <div className="container">
          <div className="row card-grid">
            <div className="col m2"></div>
            <div className="col m8">
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
  }
}

export default App;
