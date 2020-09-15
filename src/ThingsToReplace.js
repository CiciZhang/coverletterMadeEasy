import React, { useState } from "react";


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

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// )


function ThingsToReplace({addToReplacementArray}) {
  const [fieldName, setFieldName] = useState("")
  const [newText, setNewText] = useState("")
  const textHandler= (event) => {
    event.preventDefault()
    console.log(event.target.value)
  }

  const setField = (event) => {
    event.preventDefault()
    setFieldName(event.target.value)
  }
  
  const setText = (event) => {
    // event.preventDefault()
    setNewText(event.target.value)
  }

  const submitHandler = (event) => {
    setFieldName("")
    setNewText("")
    
    event.preventDefault()
  }

  return (
    <div>

      <form action="submit" onSubmit={()=>{addToReplacementArray(fieldName, newText)}}>
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
      <ul>
        {testArray.map((items) =>
          <li>Replace {items.fieldToReplace} with {items.newText}
          </li>)
        }
      </ul> 
      
    </div>
  )
}

export default ThingsToReplace