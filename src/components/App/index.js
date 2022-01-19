import "./App.css";
import Week from "../Week/index.js";


const bootcampLenght = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function App() {
  return (
    <div className="App">
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
