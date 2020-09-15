import React, { useState } from "react";
import ThingsToReplace from "./ThingsToReplace"
import MappedList from "./MappedList"
import "./App.css";


function App() {
  const [textInput, setTextInput] = useState("");
  const replacements = []

  const textInputHandler = (event) => {
    event.preventDefault()
    setTextInput(event.target.value)
  }

  const addToReplacementArray = (fieldToReplace, newText) => {
    replacements.push({
      fieldToReplace: fieldToReplace,
      newText: newText
    })
    console.log(replacements, "this is my replacmeent")
  }
  return (
    <div className="App">
      
      <ThingsToReplace addToReplacementArray={addToReplacementArray}/>
      <MappedList replacements={replacements} />
      <form action="submit" >
        <label>Input your long text</label>
        <input type="text" name="textInput" onChange={textInputHandler} />
      </form>
      <textarea value={textInput}></textarea>
    </div>
  );
}

export default App;
