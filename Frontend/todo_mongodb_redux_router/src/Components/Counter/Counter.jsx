import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement} from "../../Redux/Counter/action"
const Counter = () => {
    let count=useSelector(state=>state.counter.count)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>Counter App</h1>
       <h2>{count}</h2>
       <button onClick={()=>dispatch(increment(1))}>Increment</button>
       <button onClick={()=>dispatch(decrement(-1))}>Decrement</button>
    </div>
  )
}

export default Counter
