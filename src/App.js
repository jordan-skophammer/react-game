import React, { Component } from 'react';
import wuMembers from "./WuMembers.json"
import Scoreboard from "./components/Scoreboard/Scoreboard"
import Wucard from './components/Wucard/Wucard';

// const wuMembers = ["wumember1.jpg",
//   "./images/wumember2.jpg",
//   "./images/wumember3.jpg",
//   "./images/wumember4.jpg",
//   "./images/wumember5.jpg",
//   "./images/wumember6.jpg",
//   "./images/wumember7.jpg",
//   "./images/wumember8.jpg",
  
// ]


class App extends Component {

  state = {
    message: "",
    score: 0,
    topScore: 0,
    card: wuMembers
  }

  shuffle = id => {

    let counter = this.state.card.length;
    
    let suffledArray = this.state.card;

    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);

      counter--;

      let temp = suffledArray[counter];
      suffledArray[counter] = suffledArray[index];
      suffledArray[index] = temp
    }
    // return suffledArray
    this.setState({suffledArray})

    this.changeScore(id)
  }

  

  changeScore = (id) => {

    let score = this.state.score + 1;

    console.log(this.state.score)
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
    this.resetGame(score)
  };

  resetGame = (score) => {
    
    if (score > 8) {
      score = 0 
    }

    this.setState({score})
  }

  

  render() {
    return (
      <div className="App">
        <Scoreboard 
        score={this.state.score}
        topScore={this.state.topScore}
        />
        <div className="container">
          <div className="row">
            <div className="col m2"></div>
            <div className="col m8">
              {this.state.card.map(card =>  
              <Wucard
                image = {card.image}
                alt = {card.id}
                shuffle= {this.shuffle}
                id= {card.id}
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
