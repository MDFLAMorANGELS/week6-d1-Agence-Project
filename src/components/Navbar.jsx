import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Burger from '../assets/Burger1.svg'
import Close from '../assets/Close.svg'

function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='fixed top-0 w-full flex justify-center p-4 bg-slate-200'>
        <ul className={`${showMenu ? " flex" : " hidden"} flex-col items-center justify-center bg-slate-200 w-full absolute top-full pb-5 sm:flex sm:relative sm:flex-row sm:pb-0`}>
            <li>
                <NavLink
                to='/'
                className={({isActive}) => `${isActive && " underline underline-offset-2 text-xl text-fuchsia-800"} 
                hover:text-xl inline-block py-2 mx-5 text-lg sm:py-0 font-semibold`}
                >
                    Home
                </NavLink>
            </li>
            <li>
            <NavLink
                to='/about'
                className={({isActive}) => `${isActive && " underline underline-offset-2 text-xl text-fuchsia-800"} 
                hover:text-xl inline-block py-2 mx-5 text-lg sm:py-0 font-semibold`}
                >
                    About
                </NavLink>
            </li>
            <li>
            <NavLink
                to='/works'
                className={({isActive}) => `${isActive && " underline underline-offset-2 text-xl text-fuchsia-800"} 
                hover:text-xl inline-block py-2 mx-5 text-lg sm:py-0 font-semibold`}
                >
                    Works
                </NavLink>
            </li>
        </ul>
        <button 
        onClick={() => setShowMenu(!showMenu)}
        className=' hover:text-fuchsia-800 flex items-center font-semibold ml-auto sm:hidden'
        >
            Menu 
            <img className=' mx-2' src={showMenu ? Close : Burger} alt={showMenu ? "cacher le menu" : "montrer le menu"}/>
        </button>
    </nav>
  )
}

export default Navbar