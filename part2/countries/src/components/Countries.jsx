const Countries = ({countriesFiltered, country, handleSearchChange}) => {

    if (countriesFiltered.length === 1 && country !== null) {
      return(<Country country={country} />)
    } else if (countriesFiltered.length > 10) {
      return(<div>Too many matches, specify another filter</div>)
    } else {
      return (countriesFiltered.map(p => 
        <div key={p.name.common}>
          {p.name.common} <button value={p.name.common} onClick={handleSearchChange}>show</button>
        </div>
      ))
    }
}

import Country from "./Country"
  
export default Countries