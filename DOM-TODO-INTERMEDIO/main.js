// console.log('Hola javascript')

const tasks = []

const taskInput = document.querySelector('.task__input')
const taskList = document.querySelector('.task__list')

taskInput.addEventListener('keypress', function(event){

  if(event.key === 'Enter'){
    // console.log('Agrando una nueva nota...')
    const input = event.target
    const value = input.value
    
    const newTask = {
      title: value,
      done : false
    }

    // console.log(newTask)

    tasks.push(newTask)

    // console.log(tasks)
    taskInput.value = ''


  }
})