import { useState } from 'react'
import './App.css'
import Header from "./assets/Header"
import Meme from "./assets/Meme"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  )
}

export default App
