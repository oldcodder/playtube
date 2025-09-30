import React from 'react'
import { CiViewList } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa';
import { MdVideoCall } from 'react-icons/md';
import { SiShortcut } from 'react-icons/si';
import { TbHomeSearch } from "react-icons/tb";
import { useSelector } from 'react-redux';


const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  console.log(isMenuOpen);

  if(!isMenuOpen){
    return null
  }
  
  return (
    <div className='px-5 py-4 shadow w-1/6'>
      <ul className='cursor-pointer'>
        <li className='flex gap-2 items-center hover:bg-gray-100'><span><FaHome /></span> <span className=''>Home</span></li>
        <li className='flex gap-2 items-center hover:bg-gray-100'><span><SiShortcut  /></span> <span className=''>Shorts</span></li>
        <li className='flex gap-2 items-center hover:bg-gray-100'><span><MdVideoCall  /></span> <span className=''>Video</span></li>
        <li className='flex gap-2 items-center hover:bg-gray-100'><span><CiViewList  /></span> <span className=''>Subscription</span></li>
      </ul>
      <h1 className='  flex items-center pt-4'> <span><TbHomeSearch /></span> <span className='font-bold'>Home</span></h1>
      <ul className='cursor-pointer'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='  flex items-center pt-4'> <span><TbHomeSearch /></span> <span className='font-bold'>Short</span></h1>
      <ul className='cursor-pointer'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='  flex items-center pt-4'> <span><TbHomeSearch /></span> <span className='font-bold'>Subscriptions</span></h1>
      <ul className='cursor-pointer'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar