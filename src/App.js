import React from "react";
import {useEffect, useState} from "react";
import Rosebud from "./components/Rosebud";

function App() {

  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
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
      {solution && <Rosebud solution={solution} />}
    </div>
  );
}

export default App
