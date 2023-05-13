import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import App from './App'
import { AcordionApp } from './acordion/AcordionApp'
import { SliderApp } from './slider/SliderApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SliderApp />
  </React.StrictMode>,
)
