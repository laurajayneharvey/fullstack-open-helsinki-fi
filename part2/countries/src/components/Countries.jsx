const Countries = ({countriesFiltered, country}) => {
    if (countriesFiltered.length === 1 && country !== null) {
      return(<div>just one {country.name.common}</div>)
    } else if (countriesFiltered.length > 10) {
      return(<div>Too many matches, specify another filter</div>)
    } else {
      return (countriesFiltered.map(p => 
        <div key={p.name.common}>
          {p.name.common}
        </div>
    ))
    }
}
  
export default Countries