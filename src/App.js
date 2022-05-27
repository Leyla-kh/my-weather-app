import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer className="App-header">
          This project was coded by Leyla kheiry and is{" "}
          <a href="https://github.com/Leyla-kh/my-weather-app">
            open-sourced by GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
