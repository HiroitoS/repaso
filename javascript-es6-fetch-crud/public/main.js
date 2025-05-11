//console.log("Hello World!")
import { renderPeliculas } from './peliculas.js'
import { createPelicula, fetchPeliculas } from './services.js'

const peliculasForm = document.getElementById('peliculasForm')
peliculasForm.addEventListener('submit', async (event) =>{
  event.preventDefault()//evita que se recargue la pagina

  // console.log('enviando formulario...')

  const peliculasForm = document.forms['peliculasForm']

  console.log(peliculasForm)

  const nombre = peliculasForm.nombre.value
  const imagen = peliculasForm.imagen.value
  const estreno = peliculasForm.estreno.value
  const genero = peliculasForm.genero.value
  const resumen = peliculasForm.resumen.value

  console.log(nombre, imagen, estreno, genero, resumen)

  const nuevaPelicula = {
    nombre,
    imagen,
    estreno,
    generoId: Number(genero),
    resumen
  }
  const response = await createPelicula(nuevaPelicula)
})

document.addEventListener('DOMContentLoaded', async (event) => {
 
  //Usnado async/await

  const peliculas = await fetchPeliculas()

  console.log(peliculas)

  renderPeliculas(peliculas)

})