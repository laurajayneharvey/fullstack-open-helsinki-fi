import { useState, useEffect } from 'react'

import personService from './services/persons'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(data => {
        setPersons(data)
      })
  }, [])
  
  const personsFiltered = search === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  const addName = (event) => {
    event.preventDefault()

    const existingPerson = persons.find(person => person.name.toLowerCase() == newName.toLowerCase())

    if (existingPerson) {
      if (window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
        personService
        .update(existingPerson.id, { ...existingPerson, number: newNumber }).then(data => {
          setPersons(persons.map(p => p.id !== existingPerson.id ? p : data))
          setNewName('')
          setNewNumber('')
        })
      }
    } else {
      personService
        .create({
          name: newName,
          number: newNumber
        })
        .then(data => {
          setPersons(persons.concat(data))
          setNewName('')
          setNewNumber('')
      })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
      .remove(id).then(() => {
        alert("Successfully deleted the person from the server")
      })
      .catch(() => {
        alert("Couldn't delete the person from the server")
      })
      
      // want to remove from store in either success or fail case
      setPersons(persons.filter(p => p.id !== id ))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter search={search} handleSearchChange={handleSearchChange} />

      <h2>Add a new</h2>

      <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>

      <Persons personsFiltered={personsFiltered} deletePerson={deletePerson} />
    </div>
  )
}

export default App