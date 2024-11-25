import React from 'react'

const Child = (props:any) => {
  return (
    <div className='text-center flex flex-col mt-10 gap-2'>
        <p className='font-mono font-extrabold '>My Name is {props.name}</p>
        
       
     <p className='font-mono font-extrabold'>My favourite Dish is {props.Favdish}</p> 
     <p className='font-mono font-extrabold'>My Passion is {props.passion}</p>
    </div>
  )
}

export default Child
