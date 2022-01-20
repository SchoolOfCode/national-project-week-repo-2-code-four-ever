import "./App.css";
import Week from "../Week/index.js";
import React from "react";
import Button from "../Button";

const API_URL = process.env.REACT_APP_API_URL;

const bootcampLenght = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function App() {
  const [input, setInput] = React.useState("");
  const [found, setFound] = React.useState(null);

  function handleInput(event) {
    setInput(event.target.value);
  }

  function handleClick() {
    async function getData() {
      const resp = await fetch(`${API_URL}/alldata`);
      const fetchedData = await resp.json();
      setFound([
        ...fetchedData.noteTable
          .filter((ob) => ob.title.toLowerCase() === input.toLowerCase())
          .map((e) => "Day " + e.day_id),
      ]);
    }
    getData();
  }

  return (
    <div className="App">
    <h1>Resources Tracker by Coding four-ever team</h1>
    <h3>Quick search</h3>
      <input onChange={handleInput} type="text" />
      <Button action={handleClick} text="Search" />
      {found ? found.map(item => <p>{item}</p>) : ""}
      {bootcampLenght.map((item) => {
        return (
          <div>
            <Week weeknumber={item} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
