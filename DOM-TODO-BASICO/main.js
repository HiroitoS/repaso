// // const taskInput = document.querySelector('.task__input')
// const taskAdd = document.querySelector('.task__add')
// const taskInput = document.getElementById('taskInput')
// const taskList = document.querySelector('.task__list')
// taskAdd.addEventListener('click', function(event){
    
//     // const button = document.createElement('button')
//     // button.textContent = 'Hola soy un boton'
//     // document.body.appendChild(button)

//     const li = document.createElement('li')
//     li.textContent = taskInput.value
//     taskList.appendChild(li)
//     taskInput.value = ''


// })


const taskAdd = document.querySelector('.task__add')
const taskInput = document.getElementById('taskInput')
const taskList = document.querySelector('.task__list')
taskAdd.addEventListener('click', function(event){
    
    // const button = document.createElement('button')
    // button.textContent = 'Hola soy un boton'
    // document.body.appendChild(button)


    if(taskInput.value === ''){
        alert('El campo es requerido')
        return
    }

    const li = document.createElement('li')

    const checkbox = document.createElement('input') 
    checkbox.setAttribute('type', 'checkbox')
    li.appendChild(checkbox)

    const span = document.createElement('span')
    span.textContent = taskInput.value
    li.appendChild(span)


    const button = document.createElement('button')
    button.textContent = 'Borrar'

    li.appendChild(button)

    // li.textContent = taskInput.value
    taskList.appendChild(li)

    taskInput.value = ''


})

taskList.addEventListener('click', function(event){
    const target = event.target

    if(target.tagName === 'INPUT' && target.type === 'checkbox'){
        target.classList.toggle('completed')
    }

    if(target.tagName === 'BUTTON'){
        target.parentElement.remove()
    }
})