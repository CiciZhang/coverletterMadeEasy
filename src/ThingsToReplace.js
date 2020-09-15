import React, { useState } from "react";

function ThingsToReplace({addToReplacementArray}) {
  const [fieldName, setFieldName] = useState("")
  const [newText, setNewText] = useState("")

  const setField = (event) => {
    setFieldName(event.target.value)
  }
  
  const setText = (event) => {
    setNewText(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    setNewText("")
    setFieldName("")
  }
  
  return (
      <form action="submit" onSubmit={(event) =>{
        addToReplacementArray(fieldName, newText); submitHandler(event)} }>
          Replace
          <label htmlFor="fieldName"></label>
        <input type="text" aria-label="field to replace, example < name >" placeholder="ex. < name >" 
        value={fieldName} onChange={setField} name="fieldName"
        />
        with
         <label htmlFor="text"></label>
        <input type="text" aria-label="text to replace, example John" placeholder="ex. John" value={newText} onChange={setText} name="text"/>
        <input type="submit" />
      </form>
  )
}

export default ThingsToReplace