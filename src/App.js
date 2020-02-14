import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Matt", age: 28 },
      { name: "Cass", age: 27 }
    ],
    showPersons: false
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Catherine", age: 27 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: "Catherine", age: 27 }
      ]
    });
  };

  togglePersonsHandler = () => {
	  const doesShow = this.state.showPersons;
	  this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>React App</h1>
        <p>This is working.</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, "Matt!!")}
              changed={this.nameChangedHandler}
            >
              My hobbies: Gaming
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
