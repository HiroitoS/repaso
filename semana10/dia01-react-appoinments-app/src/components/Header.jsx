import React from 'react'

const Header = ({title}) => {
  console.log(title)
  return (
    <h1 className='text-4xl text-center mt-4'>{title}</h1>
  )
}

export default Header