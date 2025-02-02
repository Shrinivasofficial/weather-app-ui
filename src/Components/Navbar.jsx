import React from 'react'

export const Navbar = () => {
  return (
    <nav className=" p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">WeatherApp</div>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="/about" className="text-white hover:text-gray-300">About</a></li>
          <li><a href="/contact" className="text-white hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}