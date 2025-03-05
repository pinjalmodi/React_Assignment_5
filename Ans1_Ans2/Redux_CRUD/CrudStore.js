import React from 'react'
import { createStore } from 'redux'
import CrudReducer from './CrudReducer'

const CrudStore = createStore(CrudReducer)

export default CrudStore
