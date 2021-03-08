import logo from './logo.svg';
import './App.css';
import React,{Component} from "react"
class App extends Component {
  constructor() {
    super();
    this.state = [
      {name:"Frankestein"},
      {name:"test2"},
      {name:"test3"}
    ]
      
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
    <p>{this.state.string}</p>
    <button onClick={()=> this.setState({"string":"holanda"})}>Change text</button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
