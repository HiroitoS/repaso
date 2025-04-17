// console.log('Hola JS')

const url = 'https://restcountries.com/v3.1/all?fields=name,flags,capital,population,languages,currencies,timezones'

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

fetchCountries()
.then(data=> console.log(data))

// TODO : Reescribir async/await para la funcion 