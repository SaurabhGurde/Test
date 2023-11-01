import React from 'react'

const Radio = () => {

  return (
    <div>
        <input type='radio' value="saurabh" onChange={(e)=>console.log(e.target.value)}/>
    </div>
  )
}

export default Radio