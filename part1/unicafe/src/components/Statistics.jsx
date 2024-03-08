const Statistics = ({ good = 0, neutral = 0, bad = 0 }) => {
    const all = () => good + neutral + bad;

    const average = () => {
      if (all() == 0) {
        return 0;
      }
  
      return (good - bad) / all();
    }
  
    const positive = () => {
      if (all() == 0) {
        return 0;
      }
  
      return (good / all()) * 100;
    }

    if (all() == 0) {
        return(<>
            <h2>statistics</h2>
            <p>No feedback given</p>
        </>)
    }

    return (<>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all()} />
            <StatisticLine text="average" value={average()} />
            <StatisticLine text="positive" value={positive()} percent="true" />
          </tbody>
        </table>
    </>)
}

import StatisticLine from "./StatisticLine";

export default Statistics