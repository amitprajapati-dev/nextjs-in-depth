import React from 'react'

export default function Navbar() {
  return (
    <header className='flex justify-between w-full p-10'>
      <h1>Navbar</h1>
      <div className="flex gap-10">
        <p>About Us</p>
        <p>Projects</p>
        <p>Assignments</p>
        <p>Contact</p>
      </div>
    </header>
  )
}
