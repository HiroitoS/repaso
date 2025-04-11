console.log('Hola Mundo')

let numeroActual = '0'
let operador = ''
let operando =''

const inputDisplay = document.querySelector('.inputDisplay')

const buttons = document.querySelectorAll('.button')

// console.log(inputDisplay)

// console.log(buttons)

// EVENTOS

buttons.forEach(function(button){

    button.addEventListener('click', function(event){
        // console.log('me hicieron click')
        // console.log(event)

        const button = event.target
        const buttonText = button.textContent
        // console.log(buttonText)

        if('+-*'.includes(buttonText)){

            operador = buttonText
            operando = Number(numeroActual)
            numeroActual = '0'

        }
        else if(buttonText.trim() === '='){
            if(operador === '+'){
                numeroActual = Number(operando) + Number(numeroActual)
            } else if (operador ==='-'){
                numeroActual = Number(operando) - Number(numeroActual)
            } else if (operador ==='*'){
                numeroActual = Number(operando) * Number(numeroActual)
            }
        }
        else if(buttonText==='AC'){
            numeroActual= '0'
            operador = ''
            operando = ''
        } else{
            numeroActual = Number(numeroActual + buttonText)

        }

        inputDisplay.value = numeroActual

    })

})