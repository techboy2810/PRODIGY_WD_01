import React from 'react'

const d = new Date();
let year = d.getFullYear();

const Footer = () => {
  return (
    <div className='flex justify-end absolute bottom-0 text-center flex-col w-full text-gray-500 text-lg pb-1'>© copyrights {year}</div>
  )
}

export default Footer