console.log('Hello from fetch-simple/main.js');

// para traer informacion en formato Json de una url

const url = 'https://jsonplaceholder.typicode.com/posts';

// const response = fetch(url)// devuleve una promesa


// console.log(response)// promesa pendiente

// fetch(url)// devuelve una promesa
//   .then(response => response.json())// devuelve otra promesa
//   .then(data => {
//     console.log(data)// devuelve el resultado de la promesa anterior
//   })// devuelve el resultado de la promesa anterior

const fetchPosts = async () =>{
  
  try{
  
  const response = await fetch(url)// promesa

  if(!response.ok){
    throw new Error('ERROR HTTP: ', response.status)
  }

  const json = await response.json()

  
  return json
  } catch(error){

  }
}



const renderPosts = (posts = []) => {
  const appDiv = document.getElementById('app')

  let postList = ''

  posts.forEach(post => {

      postList += `
      <div>
        <h2>${post.id}: ${post.title}</h2>
        <p>${post.body}</p>
      </div>
      `
  })
  appDiv.innerHTML = postList
}


fetchPosts()
  .then(posts => {
    renderPosts(posts)
    console.log(posts)
  })