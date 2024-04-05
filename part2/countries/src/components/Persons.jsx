const Persons = ({personsFiltered, person}) => {
    if (personsFiltered.length === 1 && person !== null) {
      return(<div>just one {person.name.common}</div>)
    } else if (personsFiltered.length > 10) {
      return(<div>Too many matches, specify another filter</div>)
    } else {
      return (personsFiltered.map(p => 
        <div key={p.name.common}>
          {p.name.common}
        </div>
    ))
    }
}
  
export default Persons