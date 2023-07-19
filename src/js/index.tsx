import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'

const init = () => {
  const rootElement = document.getElementById('root')
  if(rootElement){
    const root = createRoot(rootElement)
    root.render(<App />)
  }
}

if(document.readyState !== 'loading'){
  init()
} else {
  document.addEventListener('DOMContentLoaded', init)
}