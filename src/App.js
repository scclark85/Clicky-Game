import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    // clickedCardIds: [],
    score: 0,
    highscore: 0
  };


  gameOver = () => {
    // We always use the setState method to update a component's state
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score + 1 }, function () {
        console.log(this.state.highscore);
      });
      // going to loop over the cards
      this.state.cards.forEach(card => {
        card.count = 0;
      });
      // alerting when user clicks same card
      alert("You picked this card already.  Wanna play again?");
    };
  };

  // creating the events that will happen when the user clicks on the images
  clickCount = id => {
    // using state due to the data that's going to change
    this.state.cards.find((a, i) => {
      if (a.id === id) {
        if (cards[i].count === 0) {
          // will add +1 to users score
          cards[i].count = cards[i].count + 1;
          // setState for changes
          this.setState({ score: this.state.score + 1 }, function () {
            // console.log(this.state.score);
          });
          // sorting through the cards and re-arranging them randomly after clicked
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };

  // Maps over cards and renders a Card component for each card object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore}>
          Welcome To The Clicky Game!
        <h3>Click an image to begin...</h3>
        </Title>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            // key is required
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  };
}

export default App;
