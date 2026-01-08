import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1 className='bg-green-500 rounded-2xl '> Ticket-price</h1>
      <Card username="Talwinder" price="Rs 999" />
      <Card username="talwinder jr " price="Rs 799"/>
  
    </>
  )
}

export default App
