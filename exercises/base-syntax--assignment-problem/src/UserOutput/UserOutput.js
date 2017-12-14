import React from  'react'
import './UserOutput.css'

const userOutput = ( props ) => {
    return (
        <div className="UserOutput">
            <p>Username on Output component is: {props.username}</p>
        </div>
     )
 }
 
 export default userOutput