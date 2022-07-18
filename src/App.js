import React from "react";
import {useEffect, useState} from "react";

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
      {solution && <div>Solution is: {solution.title}</div>}
    </div>
  );
}

export default App
