import { Component } from "react";
import "./search-box.styles.css"

class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        placeholder="Search Heros"
        onChange={this.props.onSearchChange}
        className={`search-box ${this.props.className}`}
      />
    );
  }
}

export default SearchBox;
