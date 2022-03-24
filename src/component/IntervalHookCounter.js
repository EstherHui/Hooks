//auto increment every second
import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
//   const [count, setCount] = useState(0)

//   const tick = () => {
//     setCount(count + 1)
//   }
//   useEffect(() => {
//     const interval = setInterval(tick, 1000)
//     return () => {
//       clearInterval(interval)
//     }
// 	}, [count])

//   return (
//     <div>
//       {count}
//     </div>
//   )

const [count, setCount] = useState(0)//step 1 create state


const tick = () =>{
    setCount(prevCount => prevCount +1) //step2 set the calculation for setCount
}


//step3 useEffect to replicate component did mount
 useEffect(() => {
     const interval = setInterval(tick, 1000)
     //step 4 cleanup
     return () => {
         clearInterval(interval)
     }
 },[])//use prevCount so that no need to dependency anything

return (
    <div>
        <h2>{count}</h2>
    </div>
)

}

export default IntervalHookCounter