const Persons = ({personsFiltered, deletePerson}) => (
    personsFiltered.map(person => 
        <div key={person.name}>
          {person.name} {person.number}
          <button onClick={() => deletePerson(person.id)}>delete</button>
        </div>
    )
  )
  
export default Persons