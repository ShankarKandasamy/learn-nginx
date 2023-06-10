import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  const getDataFromServer = () => {
    fetch("http://localhost:5000/api")
      .then((res) => res.text())
      .then((data) => setData(data));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{data || "Hello, no-one"}</h1>
        <button onClick={getDataFromServer}>Get Data</button>
      </header>
    </div>
  );
}

export default App;
