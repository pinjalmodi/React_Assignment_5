import React from 'react'
import {ins,upd,del} from './CrudAction'
const initialState = {
    data:[]
}



const CrudReducer = (state = initialState,action) => {
switch(action.type){
    case ins:return{
        ...state,
        data:[
            ...state.data,
            
            action.payload,
            


        ]
    }
    case del:return{
        ...state,
        data:state.data.filter((i,index)=>{
            return index!=action.payload
            
        })
    }
    case upd:return{
        ...state,
        data:state.data.map((i,index)=>{
            if(index==action.payload.id){
                i.name= action.payload.data.name
                i.age=action.payload.data.age
            }
            return i
        })
    }
    default: return state

}


}
export default CrudReducer
