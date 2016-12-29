import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pets: []
    };

    this.addAnimal = this.addAnimal.bind(this);
    this.addDog = this.addAnimal.bind(this, '🐶');
    this.addCat = this.addAnimal.bind(this, '🐱');
  }

  addAnimal(pet) {
    this.setState({pets: this.state.pets.concat(pet)});
  }

  render() {
    return (
      <div className="App">
        <h2>My first React app</h2>
        <button className="App--button" onClick={this.addDog}>🐶</button>
        <button className="App--button" onClick={this.addCat}>🐱</button>
        <ul className="App--animals">
          {this.state.pets.map((pet, index) =>
            <li className="App--animal" key={index}>
              {pet}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
