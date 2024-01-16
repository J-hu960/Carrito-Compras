import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltradoProvider } from './context/FiltradoProvider.jsx'
import { CarritoProvider } from './context/CarritoProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
<CarritoProvider>
   <FiltradoProvider>
       <App />
   </FiltradoProvider>
   </CarritoProvider>
   
)
