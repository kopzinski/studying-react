import React from  'react'
import './UserInput.css'

const userInput = ( props ) => {
   return (
        <div className="UserInput">
            type username: <input type="text" onChange={props.changed} value={props.currentName} />
        </div>
    )
}

export default userInput