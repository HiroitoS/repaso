import React, { useState } from 'react'

const App = () => {
  // const DEFAULT_TODOS = [ 
  //   { 
  //     "id": 1, 
  //     "title": "delectus aut autem", 
  //     "completed": false 
  //   }, 
  //   { "id": 2, 
  //     "title": "quis ut nam facilis et officia qui", 
  //     "completed": true 
  //   }, 
  //   { "id": 3, 
  //     "title": "fugiat veniam minus", 
  //     "completed": false 
  //   }
  // ]

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')


  const handleChange = (event) => {
    // console.log(event.target.value)

    const value = event.target.value
    setInput(value)

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(input)
    const newTodo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }
    setTodos([...todos, newTodo])

    localStorage.setItem

    setInput('')
  }


  const handleRemoveTodo = (event) => {
    const idSelected = event.target.dataset.id

    const newTodos = todos.filter(todo => todo.id !== idSelected)
    setTodos(newTodos)
    // console.log("Eliminando tareas", idSelected)
  }
  const handleCopmplete = (event) => {
    // console.log('Completando tarea...')
   const idSelected = event.target.dataset.id
   const isChecked = event.target.checked
   
   const newTodos = todos.map(todo => {
    if (todo.id === idSelected) {
      return {
        ...todo,
        completed: isChecked
      }
    }
    return todo
   })
   setTodos(newTodos)
  }

const completedTodos =() =>{
  const completedTodos = todos.filter(todo => todo.completed === true)
  return completedTodos.length

}

const handleClearTodos = () => {
  const incompletedTodos = todos.filter(todo => todo.completed === false) 
  setTodos(incompletedTodos)
}
   
  return (
    <main 
    className='bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-600 rounded-lg shadow-lg p-4'>
      <h1 className='text-2xl font-bold'>TODO App</h1>
        {/* {JSON.stringify(todos)} */}
        {/* {input} */}

      <form action="" onSubmit={handleSubmit}>
        <input 
        className='w-full border my-3 p-3 bg-white'
        type="text"
        placeholder='¿Qué deseas hacer hoy?'
        required
        onChange={handleChange}
        value={input}
        />
      </form>

      {/* {todos.length === 0 && 'No hay tareas por hacer'} */}

      {todos.length > 0 && (
        <div className='flex justify-between '>
          <span className='font-bold '>
            
            {completedTodos()} de {todos.length} tareas completadas

          </span>
          <button 
          className='bg-blue-500 rounded-lg px-2 py-1 text-white hover:bg-blue-800 duration-300'
          onClick={handleClearTodos}
          >
            Limpiar tareas completadas
            </button>
        </div>
      )}
      
      <section className='mt-4'>
        <ul className='flex flex-col gap-2'>
          {todos.map(todo =>{
            return(
              <li className='flex' key={todo.id}>
                <input type="checkbox" 
                checked={todo.completed}
                onChange={handleCopmplete}
                className='mr-2'
                data-id ={todo.id}
                />
                <div className='w-full flex justify-between items-center'> 
                  <div 
                  className={`${todo.completed ? 'line-through': ''}`}>
                    {todo.title}
                  </div>
                  <button
                  className='bg-red-300 rounded-lg px-2 py-2 cursor-pointer'
                  data-id={todo.id}
                  onClick={handleRemoveTodo}>
                    ❌
                  </button>
                  </div>
              </li>              
            )
          })}
        </ul>
      </section>
      
    </main>
    
  )
}

export default App
