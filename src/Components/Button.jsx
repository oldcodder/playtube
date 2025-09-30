import React from 'react'

const Button = ({name}) => {
    return (
        <div>
            <button className='px-2 py-2 bg-gray-100 rounded m-2 text-gray-900 cursor-pointer'>{name}</button>
        </div>
    )
}

export default Button