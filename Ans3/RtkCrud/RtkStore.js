import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import RtkReducer from './RtkReducer'

const RtkCrud = configureStore({
    reducer:{
        Usercrud:RtkReducer
    }
})
export default RtkCrud
