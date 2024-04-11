//import logo from './logo.svg';
import './App.css';
//import Accordion from './components/Accordion';
//import RandomColor from './components/RandomColor';
import StarRating from './components/StarRating';

function App() {
  return (
    <div className="App">
      {/* <Accordion/> */}
      {/* <RandomColor/> */}
      <StarRating noStars={10}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
