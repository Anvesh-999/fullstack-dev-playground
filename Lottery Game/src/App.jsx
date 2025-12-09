import './App.css'
import { sum } from './helper.js'
import Lottery from './Lottery.jsx'

function App() {
  let winCondition=(ticket)=> {
    return sum(ticket)===15;
  }
  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  )
}

export default App
