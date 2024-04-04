import React from 'react'
import Link from 'next/link'
import "../app/globals.css";

const Header = () => {
  return (
      <div className='flex flex-row justify-between px-8 py-5 h-fit bg-neutral-900  text-white font-anta text-center w-full'>
        <div className='flex pt-3.5 font-thin xl:text-4xl lg:text-3xl w-fit mr-10'>
          <h1>TECHBOY INFOTECH</h1>  
        </div>
        <div>
        <li className="options flex flex-row font-serif text-xl">
                <Link href="/home">Home</Link>
                <Link href="/my_account">My account</Link>
                <Link href="/about">About</Link>
                <Link href="/products">Products</Link>
                <Link href="/contact_us">Contact us</Link>
              </li>
        </div>
      </div>
  )
}

export default Header