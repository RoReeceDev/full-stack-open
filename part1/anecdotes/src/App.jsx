import { useState, useEffect } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  //create an empty arr with votes 
  const startingVotes = Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(startingVotes
  )
  const [ topVotes, setTopVotes ] = useState(0)

  
  useEffect(() => {
    const popularAnec = votes.indexOf(Math.max(...votes))

    if(votes[popularAnec] <= votes[topVotes]){
      return
    }

    setTopVotes(popularAnec)
  }, [votes, topVotes])

  const handleRandom = () => {
    let random = Math.floor(Math.random() * anecdotes.length)

    if(random === selected){
      random = Math.floor(Math.random() * anecdotes.length)
    }
    setSelected(random)
    
  }

  const handleVote = () => {
    //create a copy 
    let updatedVotes = [...votes]
    updatedVotes[selected]++
    setVotes(updatedVotes)
  }


  console.log('votes',votes)
  console.log('selected', selected)

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[`${selected}`]} votes </div>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleRandom}>next anecdote</button>
      <div>
        <h2>Most Voted Anecdotes</h2>
        <p>{anecdotes[topVotes]}</p>
        <p>This anecdote has the most votes at {votes[topVotes]}</p>
      </div>
    </>
  )
}

export default App
