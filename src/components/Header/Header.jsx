import React from 'react'
import Catalog from './Catalog'
import Category from './Category'
const Header = () => {
  return (
    <>
    <div className="bg-[#2D2D2D] text-[#ffff] w-[363px] ">
    <Catalog/>
    <Category/>
    </div>
    </>
  )
}

export default Header