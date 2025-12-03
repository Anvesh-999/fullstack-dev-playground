import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LikeButton from './LikeButton.jsx'
import LudoBoard from './LudoBoard.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <LudoBoard/>
     {/* <h1>States in react</h1>
     <p><b>Count value is: {count}</b></p>
     <LikeButton/>
     <button onClick={()=>setCount(count+1)}>Increment</button>
     <button onClick={()=>setCount(count-1)}>Decrement</button> */}
    </>
  )
}

export default App
