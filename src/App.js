import React from "react";
import {useEffect, useState} from "react";
import Rosebud from "./components/Rosebud";

function App() {

  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('https://rosebud-wordle.herokuapp.com/api/solutions')
      .then(res => res.json())
      .then(json => {
        // Generate a random integer to pick solution
        const randomSolution = json[Math.floor(Math.random() * json.length)]
        setSolution(randomSolution)
      })
  }, [setSolution])

  return (
    <div className="App">
      <h1>Rosebud</h1>
      {solution && <div>{
        <div key={solution} className="hintButton">
          <button>{solution.hints[0]}</button>
          <button>{solution.hints[1]}</button>
          <button>{solution.hints[2]}</button>
        </div>  
      }</div>}
      <br></br>
      {solution && <Rosebud solution={solution} />}
    </div>
  );
}

export default App
