
const url = 'https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,languages,currencies,timezones'

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

export default fetchCountries