//console.log("Hello World!")

const fetchPeliculas = async () => {
  const url = 'http://localhost:3000/peliculas'

  const reponse = await fetch(url)// por defecto es GET

  const data = await reponse.json()

  console.log(data)



}
fetchPeliculas()