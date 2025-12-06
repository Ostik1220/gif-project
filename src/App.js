import './App.css';
import dvdGif from './img/dvdify-animation-1765035886000.gif';
import GifSearch from './Components/GifSearch';

function App() {
  return (
    <div className="App">
      <img src={dvdGif} alt="Background" />
<GifSearch />
    </div>
  );
}

export default App;
