import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import CounterStore from '../Redux_count/CounterStore.js'
import CrudStore from '../Redux_CRUD/CrudStore.js'
import RtkStore from '../RtkTask/RtkStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={RtkStore}>
    <App />
    </Provider>
  </StrictMode>,
)
