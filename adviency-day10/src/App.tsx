import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { GiftListContainer } from './components/GiftListContainer'

function App() {

  return (
    <div className="App flex flex-col items-center bg-slate-300 w-screen h-full">
      <GiftListContainer />
    </div>
  )
}

export default App
