import "./App.css";
import Die from "./components/Die/Die";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Cofetti from "react-confetti";

function App() {

  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstValue);
    if(allHeld && allSameValue){
      setTenzies(true)
    }
  }, [dice])

  function generateNewDie () {
    return { 
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }
  
  function allNewDice () {
    const newDice = [];
  
    for(let i = 0; i < 10; i++){
      newDice.push(generateNewDie())
    }
    return newDice;
  }

  const rollDice = () => {
    setDice(prevDice => prevDice.map(die => 
      (die.isHeld ? die : generateNewDie())
    ))
  }

  const holdDice = (id) => {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld } : die
    }))
  }

  const diceElements = dice.map(die => 
  <Die 
    key={die.id} 
    id={die.id} 
    value={die.value} 
    isHeld={die.isHeld} 
    holdDice={() => holdDice(die.id)} 
  />);
  
  return (
    <main className="main">
      { tenzies && <Cofetti /> }
      <h1 className='main--title'>Tenzies</h1>
      <p className='main--content'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='main--list'>
        {
          diceElements
        }
      </div>
      <button className='main--action' onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
