import React, { useEffect, useState } from 'react'

function HooksCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - Updating document title ')
        document.title= `Click ${count} times` //change the tab title
    })//',[count]' to make it only run use effect only when count value change
    //[count] array , the parameter make useEffect run only the count change
     //pass as an argument everytime the component renser 
    //run after every render of the component

  return (
    <div>
      <input type="text" value={name} onChange={e =>{setName(e.target.value)}} /><br/>
      <button onClick={()=> setCount(count+1)}> useEffect - Click {count} times </button>
      
    </div>
  )
}

export default HooksCounterOne
