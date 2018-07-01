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

  changeScore = () => {

    let score = this.setState.score++;

    // this.setState({score});

    let topScore = this.state.topScore;

    if (score > topScore) {
      topScore = score;
    };

    this.setState({topScore});

    let card = {
      id: wuMembers.id,
      image: wuMembers.image
    }
    this.setState({card})
  };

  

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
