const Countries = ({country}) => {
  const flag = country.flags['svg'] ?? country.flags['png'];
  const flagAltText = country.flags['alt'];

  return(
  <>
    <h2>{country.name.common}</h2>
    <div>capital {country.capital}</div>
    <div>area {country.area}</div>
    <h3>languages:</h3>
    <ul>
      {
        Object.keys(country.languages).map((key) => ( 
          <li key={key}>{country.languages[key]}</li> 
        ))
      }
    </ul>
    <div>
      {flag ? 
      (
        <img src={flag} alt={flagAltText} width="200"></img>
      ) 
      : (<div>no flag image found</div>)}
    </div>
  </>
  )
}
  
export default Countries