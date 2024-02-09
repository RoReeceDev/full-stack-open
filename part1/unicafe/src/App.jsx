import { useState } from 'react'


const StatisticLine = ({ text, stats }) => {
  return (
    <>
    <p>{text} {stats}</p>
    </>
  )
}


const Statistics = ({ text, stats }) => {
  const total = stats[0] + stats[1] + stats[2]
  const average = ((stats[0] * 1) + (stats[1] * 0) + (stats[2] * (-1))) / 3
  
  const positive = stats[0] / total * 100

  if(total === 0)
  {
    return (
      <>
      <p>No feedback given</p>
      </>
    )
} else {
    return(
      <>
      <StatisticLine text={text[0]} stats={stats[0]} />
      <StatisticLine text={text[1]} stats={stats[1]} />
      <StatisticLine text={text[2]} stats={stats[2]} />
      <StatisticLine text={text[3]} stats={total} />
      <StatisticLine text={text[4]} stats={average} />

      <StatisticLine text={text[5]} stats={`${positive} %`} />
      </>
    )
}
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

  const text = ['good', 'neutral', 'bad', 'total', 'average', 'postive reviews']
  const stats = [good, neutral, bad]

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
    <Statistics stats={stats} text={text} />
    </>
  )
}

export default App
