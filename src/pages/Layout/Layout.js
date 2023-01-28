import React from 'react'
import { drawerItem,navItems } from '../Data/sideBar'
import { Link } from 'react-router-dom'
export default function Layout({children}) {

 
  return (
    <div className='flex flex-row h-[100vh] overflow-hidden'>
   <div className='bg-gray-900 w-[24%] h-[100vh] overflow-hidden'>
    {
      drawerItem.map((obj)=>(
        <Link to={obj.link}>
        <button 
         type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
     className='flex flex-row justify-start px-6 items-center space-x-4 pt-[-2%] text-white font-bold  w-full h-[12.5%] border-b  cursor-pointer focus:outline-none focus:ring-0 active:bg-gray-300 active:shadow-lg transition duration-150 ease-in-out'>
      <img
       className='h-8 w-10 object-contain rounded-md' 
      src={obj.src}
      alt=""
      />
        <p style={{whiteSpace:'nowrap'}}>{obj.name}</p>
      </button>
      </Link>
      ))
    }
          </div>
      <div className='flex flex-col justifyContent-start w-full overflow-hidden'>
        <div className='flex flex-row justify-start items-center bg-black h-[5%] p-6 pl-[10%]'>
          {
            navItems.map((obj,index)=>(
              <div className='flex-1 flex flex-row items-center space-x-2'>
              {<img className='h-9 w-9 rounded-full object-contain' src={index===1?require('../../assets/images/codewar.png'):obj.src} alt=''/>}
              <p className='text-white font-bold'>{obj.name}</p>
            </div>
            ))
          }
             <img className='h-10 w-10 object-contain rounded-full border-2 focus:outline-none focus:ring-0 active:border-gray-600 active:shadow-lg transition duration-150 ease-in-out' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmgUPHdgCLXIO1M5tsNHSqlpsnSSdAjZAqnw&usqp=CAU' alt=''></img>
        </div> 
        <div className='overflow-y-auto overflow-x-hidden'>
        {children}
          </div> 
      </div>
    </div>
  )
}
