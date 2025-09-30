import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "News",
    "Cooking",
    "Valentines",
  ];

  return (
    <div className='flex'>
      {list.map((name,idx)=>(
        <Button name={name} key={idx}></Button>
      ))}
    </div>
  )
}

export default ButtonList