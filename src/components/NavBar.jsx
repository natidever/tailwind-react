import React,{useState} from 'react'

import {logo,menu,close} from '../assets'
import {navLinks} from '../constants'

// @ts-ignore
// import styles from './style.js' 
function Navbar() {
  const [toggel,setToggle] = useState(false)

  return (
    <nav className='w-full flex justify-between py-6 items-center  navbar '>
      <img className='w-[124px] h-[32px]' src={logo} alt="" srcset="" />
      <ul className=" list-none hidden  sm:flex  justify-end  items-center flex-1 gap-8">
      {navLinks.map((nav,index)=>
          <li className={` cursor-pointer text-[16px] text-white` } id={nav.id}> <a href={`#${nav.id}`}>{nav.title} </a> </li>
          )}
      </ul>

       <div className="sm:hidden cursor-pointer flex  ">
        <img className="w-[28px] h-[28px]" src={toggel?close:menu} alt="menu" onClick={()=>setToggle((prev)=>!prev)} />

        <div className={`${toggel?'block':'hidden'} bg-black-gradient  min-w-[140px] rounded-xl  absolute top-20 p-6 mx-4 right-0` }>
        <ul className=" list-none  flex flex-col justify-end  items-center flex-1 gap-3">
      {navLinks.map((nav,index)=>
          <li className={` cursor-pointer text-[16px] text-white` } id={nav.id}> <a href={`#${nav.id}`}>{nav.title} </a> </li>
          )}
      </ul>
        </div>


        </div>   

     
    </nav>
  )
}

export default Navbar
