import { useState, useEffect } from 'react'

import countriesService from './services/countries'

import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [countriesFiltered, setCountriesFiltered] = useState([]) 
  const [search, setSearch] = useState('')
  const [country, setCountry] = useState(null) 

  useEffect(() => {
    countriesService
    .getAll()
    .then(data => {
      setCountries(data)
      setCountriesFiltered(data)
    })
  }, [])

  useEffect(() => {
    setCountriesFiltered(search === '' ? countries : countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase())))
  }, [search, countries])

  useEffect(() => {
    if (countriesFiltered.length === 1) {
      countriesService
      .getByName(countriesFiltered[0].name.common)
      .then(data => {
        setCountry(data)
      })
    }
  }, [countriesFiltered])
  
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <Filter search={search} handleSearchChange={handleSearchChange} />

      <Countries countriesFiltered={countriesFiltered} country={country} />
    </div>
  )
}

export default App