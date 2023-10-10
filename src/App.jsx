import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentChild from './components/ParentChild'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParentChild />
    </>
  )
}

export default App
