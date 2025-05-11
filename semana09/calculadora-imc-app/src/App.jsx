import { useState } from 'react'

import './App.css'

function App() {

  const [weight, setWeight] = useState(85)
  const [height, setHeight] = useState(10)

  const handleWeight = (e) =>{

    const value = e.target.value
    setWeight(value)
  }

  const handleHeight = (e) =>{

    const value = e.target.value
    setHeight(value)
  }

  const bodyMassIndex = () => weight/((height / 100)**2)

  const bodyMassIndexResult = () =>{
    let result = ''

    if (bodyMassIndex() < 18.5) {
      result = 'Bajo peso'
    }else if (bodyMassIndex() >= 18.5 && bodyMassIndex() < 24.9) {
      result = 'Normal'
    }else if (bodyMassIndex() < 29.9) {
      result = 'Sobrepeso'
    }else if (bodyMassIndex() > 30) {
      result = 'Obesidad'
    }else{
      result = 'Datos incorrectos'
    }
    return result
  }

  return (
    <>
      <section className='m-96 mx-auto my-5 bg-sky-500 rounded-md'>
        <h1 className='text-3xl font-bold text-center text-white p-5'>IMC Calculator</h1>

        <div className='bg-sky-200 p-5'>
          <p className='font-bold'>Weight:{weight} kg</p>

          <input 
          type="range"
          className='w-full'
          min="50"
          max="200"    
          onChange={handleWeight}
          value={weight}
          />

          <p className='font-bold'>Height:{height}</p>

          <input 
          type="range"
          className='w-full'
          min="50"
          max="200" 
          onChange={handleHeight}   
          value={height}
          />
          
          <p className='text-2xl font-bold bg-orange-400 text-center p-5 mt-5'>
            Tu IMC es {bodyMassIndex().toFixed(2)}
          </p>

          <p className='text-2xl font-bold bg-orange-400 text-center p-5 mt-5'>
            Estado: {bodyMassIndexResult()}
          </p>
        </div>
      </section>
    </>
  )
}

export default App
