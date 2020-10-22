import React from "react";
import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="London, uk" />
      <WeatherEngine location="Amman, jo" />
    </div>
  );
}

export default App;
