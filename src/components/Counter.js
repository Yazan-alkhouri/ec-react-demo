import React, {useState} from 'react'
import './Counter.css'


function Counter(props){

  const [count, setCount] = useState(props.start)

  const doStuff = () => {
    setCount(count + 1)
  }
  return (
    <div className="counter">
      <p>{count}</p>
      <button onClick={doStuff}>Click Me</button>
    </div>
  ) 
}

export default Counter

