import React from 'react'
import { render } from 'react-dom'
import { App } from './app'

const init = () => {
  const rootElement = document.getElementById('root')
  if(rootElement){
    render(<App />, rootElement)
  }
}

if(document.readyState !== 'loading'){
  init()
} else {
  document.addEventListener('DOMContentLoaded', init)
}