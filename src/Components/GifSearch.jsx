import { Component } from "react";

const gifLink = "https://api.giphy.com/v1/gifs/search?api_key=s2qIIIptNq6yG3DZ7JqYz10xZXGjmegX&q=car&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

class GifSearch extends Component {
    state = {
        searchWord: '',
    };

    sav = () => {
const axios = require('axios');
console.log(axios);
    }


    render() {
        console.log(this.sav());
        return (
            <div>
                <h1>Введіть тему GIF яку ви бажаєте знайти</h1>
                <input type="text" />
            </div>
        );
    }
}

export default GifSearch;