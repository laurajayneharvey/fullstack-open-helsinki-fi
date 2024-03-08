const StatisticLine = ({ text, value, percent = false }) => {
  return (<>
      <p>{text} {value}{percent ? ' %': ''}</p>
  </>)
}

export default StatisticLine