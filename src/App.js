import React, { useState } from "react";
import ThingsToReplace from "./ThingsToReplace"
import "./App.css";


function App() {
  const [textInput, setTextInput] = useState("");
  const [replacements, setReplacements] = useState([])

  const textInputHandler = (event) => {
    event.preventDefault()
    setTextInput(event.target.value)
  }

  const addToReplacementArray = (fieldToReplace, newText) => {
    setReplacements([
      ...replacements,
      {
        fieldToReplace: fieldToReplace,
        newText: newText
      }
    ])
  }
  return (
    <div className="App">
      
      <ThingsToReplace addToReplacementArray={addToReplacementArray}/>
      <div className="mappedObjects">
        <ul>
            {replacements.map((items) =>
              <li>Replace {items.fieldToReplace} with {items.newText}
              </li>)
            }
        </ul>
      </div>
      <form action="submit" >
        <label>Input your long text</label>
        <input type="text" name="textInput" onChange={textInputHandler} />
      </form>
      <textarea value={textInput}></textarea>
    </div>
  );
}

export default App;
