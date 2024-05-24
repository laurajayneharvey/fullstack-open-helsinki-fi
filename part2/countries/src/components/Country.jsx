const Countries = ({country}) => {
  const flag = country.flags['svg'] ?? country.flags['png'];
  const flagAltText = country.flags['alt'];

  return(
  <>
    <h2>{country.name.common}</h2>
    <div>capital {country.capital}</div>
    <div>area {country.area}</div>
    <h4>languages:</h4>
    <ul>
      {
        Object.keys(country.languages).map((key) => ( 
          <li key={key}>{country.languages[key]}</li> 
        ))
      }
    </ul>
    <img src={flag} alt={flagAltText} width="200"></img>
    <div>
      {country.weather ?
      (
      <div>
        <h3>{`Weather in ${country.capital}`}</h3>
        <div>{`temperature ${country.weather.main.temp} Celsius`}</div>
        <img src={country.weather.icon} alt={country.weather.weather[0].description} width="100"></img>
        <div>{`wind ${country.weather.wind.speed} m/s`}</div>
      </div>)
      :(<></>)
      }
    </div>
  </>
  )
}
  
export default Countries