import React from  'react'

const validation = (props) => {

    const shortMessage = 'Text too short'
    const longMessage = 'Text long enough'
    
    const feedbackMessage = props.inputLength > 5 ? longMessage : shortMessage

    return (
        <div>
            <p>{feedbackMessage}</p>
        </div>
        )
}

export default validation