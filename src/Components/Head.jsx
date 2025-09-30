import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { CiSearch } from 'react-icons/ci';
import { toggleMenu } from '../utils/appslice';
import { useDispatch } from 'react-redux';

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
    console.log('hello');

  }

  return (
    <div className='grid grid-flow-col py-4 px-4 shadow-lg place-content-between'>
      <div className='flex col-span-1 '>
        <GiHamburgerMenu className='text-lg my-auto cursor-pointer' onClick={() => toggleMenuHandler()} />
        <SiYoutubeshorts className='mx-4 text-4xl text-red-600' />
      </div>
      <div className='col-span-10 flex justify-center'>
        <input type="text" placeholder='Search' className='w-1/2 border border-gray-400 rounded-l-3xl pl-4' />
        <button className='border border-gray-400 p-2 rounded-r-2xl bg-gray-100 cursor-pointer'><CiSearch /></button>
      </div>
      <div className='col-span-1'>
        <FaUser className='text-lg mt-3' />
      </div>

    </div>
  )
}

export default Head