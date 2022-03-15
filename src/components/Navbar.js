import React from 'react'

export default function Navbar({title}) {
  return (
    <nav className='flex bg-gray-400 p-4'>
        <span className='underline text-xl'>{title}</span>
    </nav>
  )
}
