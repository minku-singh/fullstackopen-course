import React, {useState} from 'react'

const Header = () => {
  return(
    <h1>Give feedback</h1>
  )
}

const StatisticLine = ({text, value}) => {
  return(
    <p>{text} {value}</p>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good+neutral+bad
  const average = (good + neutral + bad)/3
  const positive = good * 100 / all

    if(all === 0){
      return(
        <>
          <h1>statistics</h1>
          <div>No feedback given</div>
        </>
      )
    } else {
      return(
        <div>
          <h1>statistics</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <StatisticLine text = {"good"} />
                </td>
                <td>
                  <StatisticLine value = {good} />
                </td>
              </tr>

              <tr>
                <td>
                  <StatisticLine text = {"neutral"} />
                </td>
                <td>
                  <StatisticLine value = {neutral} />
                </td>
              </tr>

              <tr>
                <td>
                  <StatisticLine text = {"bad"} />
                </td>
                <td>
                  <StatisticLine value = {bad} />
                </td>
              </tr>

              <tr>
                <td>
                  <StatisticLine text = {"all"} />
                </td>
                <td>
                  <StatisticLine value = {all} />
                </td>
              </tr>

              <tr>
                <td>
                  <StatisticLine text = {"average"} />
                </td>
                <td>
                  <StatisticLine value = {average} />
                </td>
              </tr>

              <tr>
                <td>
                  <StatisticLine text = {"positive"} />
                </td>
                <td>
                  <StatisticLine value = {positive} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good+1)
  }
  const handleNeutral = () => {
    setNeutral(neutral+1)
  }
  const handleBad = () => {
    setBad(bad+1)
  }

  return(
    <div>
      <Header />
      <button onClick = {handleGood}>good</button>
      <button onClick = {handleNeutral}>neutral</button>
      <button onClick = {handleBad}>bad</button>
      <Statistics 
      good = {good}
      neutral = {neutral}
      bad = {bad}
      />
    </div>
  )
}

export default App