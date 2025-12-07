import "./App.css";
import GifSearch from "./Components/GifSearch";
import GifList from "./Components/GifList";
import { Component } from "react";

class App extends Component {
  state = {
    readySearch: false,
    searchWord: "",
  };

  searchCollector = (word, searchStat) => {
    this.setState({ searchWord: word, readySearch: searchStat });
  };

  render() {
    return (
      <div className="App">
        <div className="background">
        <GifSearch function={this.searchCollector} />
        <GifList
          searchWord={this.state.searchWord}
          searchStat={this.state.readySearch}
        />
        </div>
      </div>
    );
  }
}

export default App;
