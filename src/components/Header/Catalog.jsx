import React from 'react'
import { Avatar1 } from '../../assets/images/'
const Catalog = () => {
  return (
    <div className="">
      <a href="" className='flex items-center p-[1rem] '>
        <img src={Avatar1} alt="" className='mr-[0.5rem] ' />
        <div className="">
          <span className="text-[#DA00FE] uppercase font-bold text-[1rem] leading-5">Game </span>
          <span className="text-[#A100ED] uppercase font-bold text-[1rem] leading-5 block ml-[2rem]">Store</span>
        </div>
      </a>
      <div className="mt-[3.6rem]  flex items-center justify-center">
        <a href="" className='py-[0.75rem] text-[1.5rem] rounded-2xl px-[3.5rem]   bg-[#8A8A8A]'>
          Catalog
        </a>

      </div>
      <div className="my-[4rem]">
        <ul className='mx-[2.9rem]'>
          <li className="mb-[3.1rem]"><a href="" className='flex items-center '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#8A8A8A]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>


            <span className='mx-[1.6rem] text-[1.5rem] leading-[30px] font-bold text-[#FFFFFF] '>Profile</span></a></li>
          <li className="mb-[3.1rem]"><a href="" className='flex items-center '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#8A8A8A]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

            <span className='mx-[1.6rem] text-[1.5rem] leading-[30px] font-bold text-[#FFFFFF] '>Search</span></a></li>
          <li className="mb-[3.1rem]"><a href="" className='flex items-center '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#8A8A8A]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>


            <span className='mx-[1.6rem] text-[1.5rem] leading-[30px] font-bold text-[#FFFFFF] '>Favorite</span></a></li>
          <li className="mb-[3.1rem]"><a href="" className='flex items-center '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#8A8A8A]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
            </svg>

            <span className='mx-[1.6rem] text-[1.5rem] leading-[30px] font-bold text-[#FFFFFF] '>Balance</span></a></li>

        </ul>


      </div>
    </div>
  )
}

export default Catalog