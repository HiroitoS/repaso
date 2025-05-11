export const renderPeliculas = (peliculas) =>{
  const peliculasList = document.querySelector('.peliculas__list')

  let elementos = ''

  peliculas.forEach(pelicula => {
    elementos += `
        <tr>
              <td>${pelicula.id}</td>
              <td>
                <img 
                src="${pelicula.imagen}" 
                alt=""
                width = "100"
                height="250"/>
              </td>
              <td>
                <strong>${pelicula.nombre}</strong>
                <div class="fs-small">
                  <strong>Estreno:</strong>  ${pelicula.estreno}              
                </div>
                <div class="fs-small">
                  <strong>Genero:</strong>   ${pelicula.genero.nombre}             
                </div> 
                <div class="fs-small">
                  <strong>Resumen:</strong>  ${pelicula.estreno}              
                </div>              
              </td>
              <td>
              <div class ="flex">
                <button class ="pelicula__edit">✏</button>
                <button class ="pelicula__remove">❌</button>
              </div>
              
              </td>
              
        </tr>
    
    `

  })
  peliculasList.innerHTML = elementos 
}

