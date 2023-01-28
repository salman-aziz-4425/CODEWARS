import React from 'react'
import Layout from './Layout/Layout'
export default function Home() {
  return (
    <Layout>
    <div className='p-8 flex flex-row items-center justify-between border-b-2 border-black overflow-hidden'>
       <div className='flex flex-row justify-between w-[20%] rounded-md items-center bg-gradient-to-r from-black to-blue-500 p-8'>
        <p className='font-bold text-white'>10</p>
        <h1 className='font-bold text-white'>RANK</h1>
       </div>
       <div className='flex flex-row justify-between w-[20%] rounded-md items-center bg-gradient-to-r from-black to-gray-500 p-8'>
        <p className='font-bold text-white'>10</p>
        <h1 className='font-bold text-white'>RATING</h1>
       </div>
       <div className='flex flex-row justify-between w-[20%] rounded-md items-center bg-gradient-to-r from-black to-red-500 py-8 px-3'>
        <p className='font-bold text-white'>10</p>
        <h1 className='font-bold text-white whitespace-nowrap'>MATCHES PLAYED</h1>
       </div>
       <div className='flex flex-row justify-between w-[20%] rounded-md items-center bg-gradient-to-r from-black to-green-500 py-8 px-4 whitespace-nowrap'>
        <p className='font-bold text-white'>10</p>
        <h1 className='font-bold text-white'>MATCHES WON</h1>
       </div>
    </div>
    <h1 className='font-extrabold italic align-items-center w-full ml-[42%] mt-4 overflow-hidden'>OFFICIAL MATCHES</h1>
    <div className='flex flex-row items-center justify-between pb-2 px-[25%] border-b-2 border-black overflow-hidden'>
      <div className='flex flex-col items-center'>
    <div className='flex flex-col items-center justify-center rounded-full border-2 p-8 border-black overflow-hidden'>
        <img className='h-10 w-10 border-black' src='https://cdn-icons-png.flaticon.com/512/1077/1077114.png' alt=''/>
       </div>
       <p className='font-bold'>#2</p>
       <p className='font-bold text-sm text-gray-700'>M.Salman aziz</p>
       </div>
       <div>
       <img className='h-20 w-20' src='https://cdn-icons-png.flaticon.com/512/8853/8853732.png' alt=''/>
       </div>
       <div className='flex flex-col items-center'>
    <div className='flex flex-col items-center justify-center rounded-full border-2 p-8 border-black'>
        <img className='h-10 w-10 border-black' src='https://cdn-icons-png.flaticon.com/512/1077/1077114.png' alt=''/>
       </div>
       <p className='font-bold'>#1</p>
       <p className='font-bold text-sm text-gray-700'>ZAINULLAH QAZI</p>
       </div>
    </div>
    </Layout>
  )
}
