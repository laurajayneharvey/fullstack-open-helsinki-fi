const Persons = (props) => (
    props.personsFiltered.map(person => 
        <div key={person.name}>
          {person.name} {person.number}
          <button onClick={() => props.deletePerson(person.id)}>delete</button>
        </div>
    )
  )
  
export default Persons