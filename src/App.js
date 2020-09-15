import React, { useState } from "react";
import ThingsToReplace from "./ThingsToReplace"
import "./App.css";


function App() {
  const [textInput, setTextInput] = useState("");
  const [replacements, setReplacements] = useState([]);

  const textInputHandler = (event) => {
    event.preventDefault()
    setTextInput(event.target.value)
  }



  const testArray = [
    {
      fieldToReplace: "<company>",
      newText: "ecobee"
    },
    {
      fieldToReplace: "<name>",
      newText: "John"
    },
    {
      fieldToReplace: "",
      newText: ""
    }
  ]
  

  const addToReplacementArray = (fieldToReplace, newText) => {
    // event.preventDefault()
    console.log(fieldToReplace,newText)
  }

  return (
    <div className="App">
      
      <ThingsToReplace addToReplacementArray={addToReplacementArray}/>
      <form action="submit" >
        <label>Input your long text</label>
        <input type="text" name="textInput" onChange={textInputHandler} />
      </form>
      <textarea value={textInput}></textarea>
    </div>
  );
}

export default App;
