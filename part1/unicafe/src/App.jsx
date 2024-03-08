import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);

  const total = () => good + neutral + bad;

  const average = () => {
    if (total() == 0) {
      return 0;
    }

    return (good - bad) / total();
  }

  const positive = () => {
    if (total() == 0) {
      return 0;
    }

    return (good / total()) * 100;
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => incrementGood()} text="good" />
      <Button handleClick={() => incrementNeutral()} text="neutral" />
      <Button handleClick={() => incrementBad()} text="bad" />

      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total()}</p>
      <p>average {average()}</p>
      <p>positive {positive()} %</p>
    </div>
  )
}

import Button from "./components/Button.jsx"

export default App