const StatisticLine = ({ text, value, percent = false }) => {
  return (
  <tr>
      <td>{text}</td> 
      <td>{value}{percent ? ' %': ''}</td>
  </tr>)
}

export default StatisticLine