import React, { Component } from 'react';
import Scoreboard from "./components/Scoreboard/Scoreboard"

class App extends Component {

  state = {
    message: "",
    score: 0,
    topScore: 0
  }

  changeScore = () => {

    let score = this.setState.score++;

    this.setState({score});

    let topScore = this.state.topScore;

    if (score > topScore) {
      topScore = score;
    };

    this.setState({topScore});
  };

  

  render() {
    return (
      <div className="App">
        <Scoreboard 
        score={this.state.score}
        topScore={this.state.topScore}
        />
        <p className="App-intro">
          Testing
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
