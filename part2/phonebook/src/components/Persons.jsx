const Persons = (props) => (
    props.personsFiltered.map(person => 
        <div key={person.name}>{person.name} {person.number}</div>
    )
  )
  
export default Persons