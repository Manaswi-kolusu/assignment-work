import React from 'react'
import {NavLink} from 'react-router'
function Header() {
  return (
    <div className='bg-gray-300 flex justify-between px-10 items-center '>
        <img className=" p-2 rounded-4xl " src="src/assets/download.jpg"  width ="80px"/>
        <input type="text" className='border-white border-2' placeholder='search..'/>
        <ul className='flex gap-10'>
            <li>
                <NavLink to="" className={({isActive}) => isActive?"text-blue-400 bg-blue-200 p-3":""}>Home</NavLink>
            </li>
            <li>
                <NavLink to="products" className={({isActive}) => isActive?"text-blue-400 bg-blue-200 p-3":""}>Products</NavLink>
            </li>
            <li>
                <NavLink to="contact" className={({isActive}) => isActive?"text-blue-400 bg-blue-200 p-3":""}>Contact Us</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Header