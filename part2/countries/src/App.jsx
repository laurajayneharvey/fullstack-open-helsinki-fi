import { useState, useEffect } from 'react'

import personService from './services/countries'

import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [personsFiltered, setPersonsFiltered] = useState([]) 
  const [search, setSearch] = useState('')
  const [person, setPerson] = useState(null) 

  useEffect(() => {
    personService
    .getAll()
    .then(data => {
      setPersons(data)
      setPersonsFiltered(data)
    })
  }, [])

  useEffect(() => {
    setPersonsFiltered(search === '' ? persons : persons.filter(person => person.name.common.toLowerCase().includes(search.toLowerCase())))
  }, [search, persons])

  useEffect(() => {
    if (personsFiltered.length === 1) {
      personService
      .getByName(personsFiltered[0].name.common)
      .then(data => {
        setPerson(data)
      })
    }
  }, [personsFiltered])
  
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
    //setPersonsFiltered(search === '' ? persons : persons.filter(person => person.name.common.toLowerCase().includes(search.toLowerCase())))
  }

  return (
    <div>
      <Filter search={search} handleSearchChange={handleSearchChange} />

      <Persons personsFiltered={personsFiltered} person={person} />
    </div>
  )
}

export default App