const Statistics = ({ good = 0, neutral = 0, bad = 0 }) => {
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

    if (good == 0 && neutral == 0 && bad == 0) {
        return(<>
            <h2>statistics</h2>
            <p>No feedback given</p>
        </>)
    }

    return (<>
        <h2>statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total()}</p>
        <p>average {average()}</p>
        <p>positive {positive()} %</p>
    </>)
}

export default Statistics