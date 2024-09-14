import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main id='app'>
      <header className='header'>
        <h1 className='title'>DinDin</h1>
        <p className='desc'>Convert between currency</p>
      </header>
      <div className='content'>
        
      </div>
    </main>
  )
}

export default App
