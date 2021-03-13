import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Frankestein",
          id: "1",
        },
        {
          name: "Dracula",
          id: "2",
        },

        {
          name: "Retutu",
          id: "3",
        },
      ],
    };
  }
  //fetch new data
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) //obtain the response and convert to json
      .then((users) => this.setState({ monsters: users })); //set de data of the usrs to the monsters array
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((
          monster //iterate in all the occurencies of the monster array in the state object
        ) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
