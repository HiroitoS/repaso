// console.log('Hola JS')

import { renderCountries, renderResults } from './utils.js'

import fetchCountries from './services.js'
import MiNombre, { regions } from './constants.js'

console.log(MiNombre)

let countryData = []

const searchInput = document.querySelector('.app__input')
const  filterSelect = document.querySelector('.app__filter')

// console.log(url)

searchInput.addEventListener('input', (event) => {
  // const value = event.target.value
  const value = event.target.value
  const loweredValue = value.toLowerCase()
  
  const filteredCountries = countryData.filter(
    country => {
      
      const loweredName = country.name.common.toLowerCase()
      const joinedCapital = country.capital.join(',')
      const loweredCapitals = joinedCapital.toLowerCase()
      
      return loweredName.includes(loweredValue) || loweredCapitals.includes(loweredValue)// true o false
      
    }
  )
  renderCountries(filteredCountries)
  renderResults(filteredCountries)
}) 

filterSelect.addEventListener('input', (event) => {
  // console.log(event.target.value)

  const value = event.target.value
  const loweredValue = value.toLowerCase()


  const filteredRegion = countryData.filter(
    country => {
      const loweredRegion = country.region.toLowerCase()
      return loweredRegion.includes(loweredValue)
    }
  )
  renderCountries(filteredRegion)
  renderResults(filteredRegion)
})

//DOMContentLoaded -> es un evento del navegador que espera a que el DOM este cargando

document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM cargado')
  const data = await fetchCountries()

  countryData = data

  renderCountries(data)
})

// fetchCountries()
// .then(data=> renderCountries(data))

// TODO : Reescribir async/await para la funcion 