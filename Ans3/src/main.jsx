import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import CounterStore from '../Counter/CounterStore.js'
import CrudStore from '../Crud_Redux/CrudStore.js'

import RtkStore from '../RtkCrud/RtkStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={RtkStore}>
    <App />
    </Provider>
  </StrictMode>,
)
