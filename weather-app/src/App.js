import React from "react";
import "./App.css";
import Forecast from "./Components/Forcast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>

      <main>
        <Forecast />
      </main>

      <footer>created by Harry</footer>
    </div>
  );
}

export default App;
