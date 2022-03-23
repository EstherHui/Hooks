import React, { useEffect, useState } from 'react'

function HooksCounterOne() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title= `Click ${count} times` //change the tab title
    }) //pass as an argument everytime the component renser 
       //run after every render of the component

  return (
    <div>
      <button onClick={()=> setCount(count+1)}> Count {count} times</button>
    </div>
  )
}

export default HooksCounterOne
