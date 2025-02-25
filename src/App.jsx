import { useState } from 'react'
import './App.css'
import MyCompoent from './assets/components/MyComponent'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>How to <code>useState</code></h1>
      <div className="card">
        
        <MyCompoent/>
      
      </div>
    </>
  )
}

export default App
