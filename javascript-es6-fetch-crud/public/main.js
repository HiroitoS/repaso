//console.log("Hello World!")
import { renderPeliculas } from './peliculas.js'
import { fetchPeliculas } from './services.js'
document.addEventListener('DOMContentLoaded', async (event) => {
 
  //Usnado async/await

  const peliculas = await fetchPeliculas()

  console.log(peliculas)

  renderPeliculas(peliculas)

})