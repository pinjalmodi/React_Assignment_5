import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCounter, minusCounter } from '../Counter/CounterActions'

const CounterComponent = () => {

    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
    const minusData =()=>{
        dispatch(minusCounter())
    }
  return (
    <div>
      <h4>Redux Counter</h4>
      <h3>Counter is {count}</h3>
      <button onClick={()=>{dispatch(addCounter())}}>Add</button>
      <button onClick={minusData}>Minus</button>
     
    </div>
  )
}

export default CounterComponent
