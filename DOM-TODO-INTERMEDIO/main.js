// console.log('Hola javascript')

let tasks = []

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

    renderTasks()

  }
})

function checkTask(event, currentIndex){
  // console.log('La tarea fue marcada como hecha', currentIndex)
  const checkboxSelected = event.target
  const liParent  = checkboxSelected.parentElement
  liParent.classList.toggle('isChecked')


  const taskSelected = tasks[currentIndex]
  taskSelected.done = !taskSelected.done

  console.log(tasks)
}

function removeTask(event, currentIndex){

  console.log('Eliminando', currentIndex)
  // event.target.parentElement.remove()

  const newTasks = tasks.filter((task, index) => index !== currentIndex)

  tasks = newTasks
  renderTasks()

}


function renderTasks(){
  // console.log('Dibujando tareas...')
  let list= ''
  tasks.forEach(function(task, index){
    // console.log(task, index)

    // list = list + task.title


    list = list + `
    <li>
       <input type="checkbox"
       onchange="checkTask(event, ${index})"
       />
       <span>${task.title}</span>
       <button onClick = "removeTask(event,${index}) ">Borrar</button>
    </li>
      ` 
  })

  //  console.log(list)  
  taskList.innerHTML = list
  }