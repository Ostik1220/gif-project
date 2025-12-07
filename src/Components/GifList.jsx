import { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const GifContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export default class GifList extends Component {
  state = {
    gifs: [],
    lastSearchWord: "",
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.searchWord !== this.props.searchWord &&
      this.props.searchStat
    ) {
      this.fetchGifs(this.props.searchWord);
    }
  }

  fetchGifs = (word) => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=s2qIIIptNq6yG3DZ7JqYz10xZXGjmegX&q=${word}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
      )
      .then((response) => {
        const gifs = response.data.data;
        this.setState({ gifs });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div>
        <h1>GIF List Component</h1>
        <p>Пошук: {this.props.searchWord}</p>
        <GifContainer>
          {this.state.gifs.map((gif) => (
            <img
              key={gif.id}
              src={gif.images.fixed_height.url}
              alt={gif.title}
            />
          ))}
        </GifContainer>
      </div>
    );
  }
}
