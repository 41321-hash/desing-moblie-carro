import { useState } from 'react'
import './App.css'

// A função começa aqui
export default function App() {
  // O estado tem que estar aqui dentro!
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <h1>Carros</h1>
      </main>
    </>
  )
}

