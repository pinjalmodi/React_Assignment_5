import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCounter, minusCounter } from '../Redux_count/CounterAction'


const CounterComponent = () => {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
    const minusData =()=>{
        dispatch(minusCounter())
    }
  return (
    <div>
      <h3>Counter Example</h3>
      <h4>Counter is ---  {count} </h4>
      <button onClick={()=>dispatch(addCounter())}>Add</button>
      <button onClick={minusData}>Minus</button>
    </div>
  )
}

export default CounterComponent
