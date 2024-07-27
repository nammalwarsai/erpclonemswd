import React from 'react'

const user = ({name,type}) => {
  return (
    <div className="User"> 
        <h3>Name of the user {name} Logged in as {type} and {type}</h3>
    </div>
    
  )
}

export default user
