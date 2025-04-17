// console.log('Hola JS')

const url = 'https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,languages,currencies,timezones'

// console.log(url)

const fetchCountries = async () => {

  try{

    const response = await fetch(url)// promesa

    if(!response.ok){
      throw new Error('Error en la peticion', response.status)
    }
    const json = await response.json()

    return json    
  }catch(error){
    console.log('Error en la peticion', error)
  }
}

const renderCountries = (countries) => {
  // console.log(countries)

  const countryListElement = document.querySelector('.app__list')

  let countryList = ''

  countries.forEach(country => {
    console.log(country)  
    countryList += `
      <div class="country">
      <img src="${country.flags.png}" alt="${country.flags.alt}" class="country__flag">
      <div class="country__wrapper">
        <h2 class="country__title">${country.name.common}</h2>
        <div class="country__description">
          <strong>Population:</strong>${country.population}
        </div>
        <div class="country__description">
          <strong>Region:</strong>${country.region}
        </div>
        <div class="country__description">
          <strong>Capital:</strong>${country.capital[0]} 
        </div>
      </div>

    </div>
    `
  })

  countryListElement.innerHTML = countryList
}

fetchCountries()
.then(data=> renderCountries(data))

// TODO : Reescribir async/await para la funcion 