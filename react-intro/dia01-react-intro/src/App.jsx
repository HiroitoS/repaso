

// function App() {
  

//   return <h1>Hola React</h1>
// }

// export default App
// componente usando Arrow Function
// const App = () =>{
//   return <h1>Hola React</h1>
// }
// export default App

// function Saludo (){
//   return <h1> Hola Hiroito</h1>
// }

// function Despedida(){
//   return <h1>Adios Hiroito</h1>
// }

// const App = () => {
//   return (
//     <>
//       <h1>Hola React</h1>
//       <p>Estoy en el bootcamp</p>
//       <Saludo/>
//       <Despedida/>
//     </> 
//   )
// }
// export default App  


import Saludo from './components/Saludo.jsx'
import Despedida from './components/Despedida.jsx'
import { LISTA_DE_FRUTAS } from './components/Frutas.jsx'


const App = () => {
  return (
    <>
      <h1>Hola React</h1>
      <p>Estoy en el bootcamp</p>
      <Saludo/>
      <Despedida/>

      {LISTA_DE_FRUTAS}
    </> 
  )
}
export default App 