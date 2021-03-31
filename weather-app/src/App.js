import React from "react";
import "./App.css";
import Forecast from "./Components/Forcast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-extrabold text-white-900 sm:text-4xl">
          Weather App
        </h1>
      </header>

      <main>
        <Forecast />
      </main>

      <footer>created by Harry</footer>
    </div>
  );
}

export default App;
