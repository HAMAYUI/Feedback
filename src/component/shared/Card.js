import React from 'react'

function Card({children, reverse}) {
  return (
    <div className=' text-center bg-white mx-6 my-4 rounded shadow-xl'> {children} </div>
  )
}

export default Card
