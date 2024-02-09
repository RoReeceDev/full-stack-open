import { useState } from 'react'


const Statistics = ({ text, stats }) => {
  return(
    <>
    <p>{text} {stats}</p>
    </>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick ={handleClick}>{text}</button>
  )
}

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const text = ['good', 'neutral', 'bad']

  const handleGood = () => (setGood(prevState => prevState + 1))

  const handleNeutral = () => (setNeutral(prevState => prevState + 1))

  const handleBad = () => (setBad(prevState => prevState + 1))

  return (
    <>
    <h1>Give Feedback</h1>
    <Button handleClick={handleGood} text={text[0]}/>
    <Button handleClick={handleNeutral} text={text[1]}/>
    <Button handleClick={handleBad} text={text[2]}/>
    <h2>Statistics</h2>
    <Statistics stats={good} text={text[0]} />
    <Statistics stats={neutral} text={text[1]} />
    <Statistics stats={bad} text={text[2]} />
    </>
  )
}

export default App
