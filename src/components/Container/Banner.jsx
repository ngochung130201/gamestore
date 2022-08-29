import React from 'react'
import { user, banner, product1 } from '../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';  
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar1 } from "../../assets/images";
import '../../css/Swiper.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay,Navigation } from "swiper";
const Banner = () => {
  return (
    <>
      <div className="ml-[6.6rem]   ">
        <div className="flex items-end justify-end mr-[2.5rem] mt-[1rem]">
          <ul className='flex gap-x-5 items-center'>
            <li><a href="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#8A8A8A]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>

            </a></li>
            <li><a href="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#8A8A8A]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>


            </a></li>
            <li><a href="">
              <img src={user} alt="" />


            </a></li>
          </ul>
        </div>
        <div className="mt-[-24px]">
          <input type="text" placeholder='Search' className='bg-[#383838] rounded-2xl w-[24rem] outline-none relative   px-[5rem] h-[3.5rem]' />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-[3.5rem] ml-[26px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

        </div>
        <div className="banner mt-[3.1rem] ">
          <Swiper spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          
          pagination={{
            clickable:true,

          }}
          
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
          >
            <SwiperSlide>
            <div className="flex ml-[3.313rem] justify-between">
            <div className=" mt-[1.625rem]  ">
              <ul className='flex gap-x-1'>  
                <li className=''>
                <FontAwesomeIcon icon={faStar} className='text-[#FAFF00] text-[0.6rem]'  />
                </li>
                <li className=''>
                <FontAwesomeIcon icon={faStar} className='text-[#FAFF00] text-[0.6rem]'  />

                </li>
                <li className=''>
                <FontAwesomeIcon icon={faStar} className='text-[#FAFF00] text-[0.6rem]'  />
                </li>
                <li className=''>
                <FontAwesomeIcon icon={faStar} className='text-[#FAFF00] text-[0.6rem]'  />
                </li>
                <li className=''>
                <FontAwesomeIcon icon={faStar} className='text-[#8A8A8A] text-[0.6rem]'  />
                </li>
              </ul>
          
           
             <div className="">
             <span className='text-[2.5rem] tracking-[0.04em] font-normal leading-[2.6rem] '>
                [Oculus <span className='text-[#DA00FE] '>VR</span>]
               
              </span>
              <span className='block text-[32px] tracking-[0.04em]  font-normal leading-[2rem]'> Virtual Reality</span>
             </div>
              <p className='font-bold text-xs tracking-[0.04em] my-[1rem] w-[224px] leading-[0.8rem]'>VR box 360 original complete geme.VR gaming complete set of 2 remotes.</p>
              <div className=" w-[166px]">
              <a href="" className='text-[#DA00FE] items-center justify-center px-[1.5rem] py-[0.8rem]  mt-[1rem] flex gap-x-[9.2px]  bg-[#FFFFFF] rounded-2xl'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                </svg>

                <span className='font-bold text-[1rem] '> Order Now</span></a>
              </div>
            </div>
            <img src={banner} alt="" className='mt-[-1rem]'  />
          </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="flex ml-[3.313rem] justify-between">
            <div className=" mt-[1.625rem]  ">
              <ul className='flex gap-x-1'>  
                <li className=''>
                <FontAwesomeIcon icon={faStar} className='text-[#FAFF00] text-[0.6rem]'  />
                </li>
                <li className=''>
                <FontAwesomeIcon icon={faStar} className='text-[#FAFF00] text-[0.6rem]'  />

                </li>
                <li className=''>
                <FontAwesomeIcon icon={faStar} className='text-[#FAFF00] text-[0.6rem]'  />
                </li>
                <li className=''>
                <FontAwesomeIcon icon={faStar} className='text-[#FAFF00] text-[0.6rem]'  />
                </li>
                <li className=''>
                <FontAwesomeIcon icon={faStar} className='text-[#8A8A8A] text-[0.6rem]'  />
                </li>
              </ul>
          
           
             <div className="">
             <span className='text-[2.5rem] tracking-[0.04em] font-normal leading-[2.6rem] '>
                [Oculus <span className='text-[#DA00FE] '>VR</span>]
               
              </span>
              <span className='block text-[32px] tracking-[0.04em]  font-normal leading-[2rem]'> Virtual Reality</span>
             </div>
              <p className='font-bold text-xs tracking-[0.04em] my-[1rem] w-[224px] leading-[0.8rem]'>VR box 360 original complete geme.VR gaming complete set of 2 remotes.</p>
              <div className=" w-[166px]">
              <a href="" className='text-[#DA00FE] items-center justify-center px-[1.5rem] py-[0.8rem]  mt-[1rem] flex gap-x-[9.2px]  bg-[#FFFFFF] rounded-2xl'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                </svg>

                <span className='font-bold text-[1rem] '> Order Now</span></a>
              </div>
            </div>
            <img src={banner} alt="" className='mt-[-1rem]' />
          </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Banner