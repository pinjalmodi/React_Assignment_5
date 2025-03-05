import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { DECREMENT, INCREMENT } from '../RtkCounter/RtkReducer'

const RtkComponent = () => {
    const count = useSelector((state)=>state.Counter.count)
    const dispatch = useDispatch()
    const minusData = ()=>{dispatch(DECREMENT())}
    
  return (
    <div>   
        <h4>React Toolkit</h4>
        <h4>Counter is ---- {count}</h4>
        <button onClick={()=>dispatch(INCREMENT())}>Add</button>
        <button onClick={minusData}>Minus</button>

       
    </div>
  )
}

export default RtkComponent
