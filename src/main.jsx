import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import App from './App'
import { AcordionApp } from './acordion/AcordionApp'
import { SliderApp } from './slider/SliderApp'
import { TransitionGroupApp } from './transitionGroup/TransitionGroupApp'
import { CarouselApp } from './carousel/CarouselApp'
import { RevealApp } from './reveal/RevealApp'



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RevealApp />
  // </React.StrictMode>
)
