import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Matt", age: 28 },
      { name: "Cass", age: 27 }
    ]
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Catherine", age: 27 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <p>This is working.</p>
        <button onClick={() => this.switchNameHandler('Matthew!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
		  age={this.state.persons[0].age}
		  click={this.switchNameHandler.bind(this, 'Matt!!')}
        >
          My hobbies: Gaming
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
      </div>
    );
  }
}

export default App;
