const Countries = ({country}) => {
  return(
  <>
    <h2>{country.name.common}</h2>
    <div>capital {country.capital}</div>
    <div>area {country.area}</div>
    <h3>languages:</h3>
    {/* <ul>
    </ul>
    <img></img> */}
  </>
  )
}
  
export default Countries