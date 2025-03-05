import React from 'react'
import RtkReducer from './RtkReducer'
import { configureStore } from '@reduxjs/toolkit'

const RtkStore = configureStore({
    reducer:{
        TaskManager:RtkReducer
    }
})
export default RtkStore
