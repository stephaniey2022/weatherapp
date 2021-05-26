import logo from './sun.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Evanston Weather</h1>
        <img style={{width: "10%", height: "10%"}} src={logo} className="App-logo" alt="logo" />
        <p>
          Sunny
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          High: 76°F
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Low: 63°F
        </a>
      </header>
    </div>
  );
}

export default App;
