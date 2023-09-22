import CardsList from "./components/cardsList/CardsList.component";
import SearchBox from "./components/searchBox/Search-Box.Component";
import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Heros: [],
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const searchField = event.target.value.toLowerCase();

    this.setState({
      searchField,
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          {
            Heros: users,
          },
          () => {
            console.log(users);
          }
        );
      });
  }

  render() {
    const filteredHeros = this.state.Heros.filter((hero) => {
      return hero.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <header className="App-header">
        <h1 className="app-title"> Heros of Valor</h1>
          <SearchBox className="heros search-box" onSearchChange={this.onSearchChange}/>

          <div>
            <CardsList heros={filteredHeros} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
