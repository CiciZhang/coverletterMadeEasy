import React, { useState } from "react";
import ThingsToReplace from "./ThingsToReplace"
import "./App.css";


function App() {
  const [textInput, setTextInput] = useState("");
  const [replacements, setReplacements] = useState([])
  const [finalText, setFinalText] = useState("")
  const [originalText, setOriginalText] = useState("")

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

  const submitHandler = (event) => {
    event.preventDefault()
    setFinalText(textInput)
    setOriginalText(textInput)
    setTextInput("")
  }

  const replaceText = (arr, str) => {
    console.log(arr, "this is my arr")
    console.log(str, "this is my string")

    let string = ""
    for (let i = 0; i < arr.length; i++){
      if (i === 0){
        string = str.replace(arr[i].fieldToReplace, arr[i].newText)
      } else {
        string = string.replace(arr[i].fieldToReplace, arr[i].newText)
      }
      setFinalText(string)
    }
  }

  const deleteAll = () => {
    if (window.confirm('Are you sure you want to clear everything?')) {
      setReplacements([])
      setFinalText("")
      setOriginalText("")
    }
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
      <form action="submit" onSubmit={submitHandler}>
        <label>Input your long text</label>
        <input type="text" name="textInput" onChange={textInputHandler} value={textInput} />
      </form>
      <textarea value={finalText}></textarea>
      <div>
        <button onClick={()=>{replaceText(replacements, finalText)}}>Update Text</button>
        <button onClick={()=>{setFinalText(originalText)}}>Revert Text</button>
        <button onClick={deleteAll}>Clear All</button>
  
    </div>
    </div>
   
  )
}

export default App;
