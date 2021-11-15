import React, {useState} from 'react'

const Header = () => {
  return(
    <h1>Anecdote of the day</h1>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [selected, setSelected] = useState(0)
  const handleSelected = () => {
    let random = Math.floor(Math.random()*(anecdotes.length));
    setSelected(random)
  }

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const handleVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const findMax = () => {
    let index = 0;
    for(let i = 0; i < votes.length; i++){
      if(votes[index] < votes[i]){
        index = i;
      }
    }
    return index
  }
  const max = findMax()

  return(
    <div>
      <Header />
      {anecdotes[selected]} <br /> has {votes[selected]} votes <br />
      <button onClick = {handleVotes}>vote</button>
      <button onClick = {handleSelected}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[max]}</p>
      <p>has {votes[max]} votes</p>
    </div>
  )
}

export default App