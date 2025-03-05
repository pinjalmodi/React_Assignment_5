import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


const initialState = {
    data:[]
}

const RtkReducer = createSlice({
    name:'Usercrud',
    initialState,
    reducers:{
        ins:(state,action)=>{
            state.data = [
                ...state.data,
                action.payload
            ]
            
        },
        del:(state,action)=>{
            state.data=
                state.data.filter((i,index)=>{
                    return index!=action.payload

                })
            
        },
        upd:(state,action)=>{
           
            state.data=state.data.map((i,index)=>{
                
                if(index==action.payload.id){
                    i=action.payload.allData
                
                }
                
                return i
            })
        }
    }
})


export const { ins,del,upd } = RtkReducer.actions
export default RtkReducer.reducer
