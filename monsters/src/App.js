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
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
