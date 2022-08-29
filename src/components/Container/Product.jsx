import React, { useState } from 'react'
import { product1,product2,product3,product4 } from '../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCirclePlus, faFilter } from '@fortawesome/free-solid-svg-icons';
const Product = () => {
  const products = [{
    tab: 'Top',
    data: [{
      img: product1,
      name: 'Lexma G88',
      type: 'Mouse',
      price: 22.69,

    },
    {
      img: product2,
      name: 'Lexma G88',
      type: 'Keyboard',
      price: 20.88,

    },
    {
      img: product3,
      name: 'Lexma G88',
      type: 'Headset',
      price: 21.00,

    },
    {
      img: product4,
      name: 'Lexma G88',
      type: 'Oculus',
      price: 23.69,

    },
    {
      img: product1,
      name: 'Lexma G88',
      type: 'Mouse',
      price: 22.69,

    },
    {
      img: product2,
      name: 'Lexma G88',
      type: 'Keyboard',
      price: 20.88,

    },
    {
      img: product3,
      name: 'Lexma G88',
      type: 'Headset',
      price: 21.00,

    },
    {
      img: product4,
      name: 'Lexma G88',
      type: 'Oculus',
      price: 23.69,

    },
  ]
  },
  {
    tab: 'Popullar',
    data: [{
      img: product2,
      name: 'Lexma G88',
      type: 'Mouse',
      price: 22.69,

    }]
  },
  {
    tab: 'recommended',
    data: [{
      img: product3,
      name: 'Lexma G88',
      type: 'Mouse',
      price: 22.69,

    }]
  },

  ]
  const [activeProduct, setActiveProduct] = useState(0)
  return (
    <div className="mx-[4.5rem] mt-[3.4rem]">
      <span className='text-[24px] font-bold tracking-[0.04em] leading-[1.5rem]'>Product</span>
      <div className="mt-[1rem]">
        <ul className='flex gap-x-2'>
          {products.map((product, index) => {
            return (
              <li key={index}>

                <button onClick={()=> setActiveProduct(index)} className={`${index == activeProduct ? 'bg-[#A100ED]':''} flex items-center justify-center py-[8px] px-[24px] border border-solid border-[#8A8A8A] rounded-2xl `}>
                  <span className={`font-medium text-[10px] leading-[12px]`}>{product.tab}</span>

                </button>

              </li>

            )
          })}
          <li>

            <button className='flex items-center justify-center py-[8px] px-[24px] border border-solid border-[#DA00FE] rounded-2xl '>
              <span className='font-medium text-[10px] leading-[12px] flex items-center'>
                <FontAwesomeIcon icon={faFilter} className='text-[#DA00FE] mr-[8px]' />
                Fiiter</span>

            </button>

          </li>
        </ul>
          <div className="grid grid-cols-4 mt-[3rem] gap-[1rem] ">
           {products[activeProduct].data.map((productData,index)=>{
            return (
              <div key={index} className="rounded-lg py-[1rem] px-[2.5rem] flex-col bg-[#323232] flex items-center justify-center">
                <img  className='mb-[1rem] h-[97px] object-cover'  src={productData.img} alt="" />
                <span >{productData.name}</span>
                <span className='text-[0.6rem]  mt-[8px] mb-[1rem] text-[#8A8A8A]'>{productData.type}</span>
                <span className='text-[#DA00FE] mb-[1rem] font-medium text-xs'>${productData.price}</span>
                <div className="flex items-center gap-x-[5.5px] ">
                <FontAwesomeIcon icon={faCirclePlus} className='text-[#8A8A8A] hover:text-[#DA00FE]  cursor-pointer' />
                <span className='text-[10px] leading-3'>Add to Cart</span>
                </div>
              </div>
            )
           })}
          </div>

      </div>
    </div>
  )
}

export default Product