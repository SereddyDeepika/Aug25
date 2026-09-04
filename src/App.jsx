import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const name = "Deepika"
  const sub = "FSWD section-1"

  const sum = (a, b) => {
    return a + b
  }

  return (
    <>
      <div>
        <header>
          <h1>JSX is HTML-like syntax inside JavaScript</h1>
        </header>
      </div>

      <div>
        <p>JSX is syntactic sugar</p>

        <div>
          <br />
          <h1>Hello</h1>
          <p>World</p>
        </div>

        <div className="hero">HI</div>
      </div>

      <div>
        <h1>Heartly Welcome {name}</h1>
        <h1>Heartly Welcome {sub}</h1>
      </div>

      <div>
        <button>INPUT</button>
      </div>

      <div>
        <iframe title="border-frame" />
      </div>

      <div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
          <br />
          Sum is {sum(100, 200)}
        </button>
      </div>
    </>
  )
}

export default App