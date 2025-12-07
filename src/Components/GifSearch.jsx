import { Component } from "react";
class GifSearch extends Component {
  state = {
    searchWord: "",
    readySearch: false,
  };

  save = (e) => {
    e.preventDefault();
    const word = e.target.elements[0].value;
    this.setState({
      searchWord: word,
      readySearch: true,
    });
    e.target.elements[0].value = "";
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchWord !== this.state.searchWord) {
      console.log(this.state.searchWord);
      this.props.function(this.state.searchWord, this.state.readySearch);
    }
  }

  render() {
    return (
      <form onSubmit={this.save}>
        <h1>Введіть тему GIF яку ви бажаєте знайти</h1>
        <input type="text" />
        <button type="submit">Пошук</button>
      </form>
    );
  }
}

export default GifSearch;
