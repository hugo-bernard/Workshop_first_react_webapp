import React from 'react'

export default function Layout({title, children}) {
  return (
    <main className="h-full relative">
        {children}
    </main>
  )
}