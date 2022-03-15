import React from 'react'
import Navbar from './Navbar'

export default function Layout({title, children}) {
  return (
    <main className="">
        <Navbar title={title}/>
        {children}
    </main>
  )
}