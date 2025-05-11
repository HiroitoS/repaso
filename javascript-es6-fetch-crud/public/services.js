export const fetchPeliculas = async () => {
  const url = 'http://localhost:3000/peliculas?_embed=genero'

  const reponse = await fetch(url)// por defecto es GET

  const data = await reponse.json()

  return data


}

export const createPelicula = async (form) =>{
  const url = 'http://localhost:3000/peliculas'

  const body = JSON.stringify(form)

  const options = {
    method : 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  }
  const response = await fetch(url, options)

  const data = await response.json()

  return data
}