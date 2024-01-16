import { useState } from 'react'
import './App.css'



function App() {

  // useState(ini) return [variable, method]
  const [counter, setCounter] = useState(15)
  // let counter =15 // this can't update on ui

  const addValue = () =>{
    // counter = counter + 1
    // console.log(counter)
    // setCounter(counter + 1) // this with baching
    // setCounter(counter + 1) // this not increamented

    // creating with callback
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }

  const removeValue =() =>{
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React course with hitesh {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>{" "}
      <button
      onClick={removeValue}
      >Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
