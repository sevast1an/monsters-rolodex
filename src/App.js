import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";
import "./App.css";

class App extends Component {
  state = {
    monsters: [],
    searchField: ""
  };

  async componentDidMount() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      this.setState({ monsters: users });
    } catch (err) {
      console.log("We have an err:", err);
    }
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
