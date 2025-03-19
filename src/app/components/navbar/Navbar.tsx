'use client'

import React from 'react'
import ThemeToggle from "../ThemeToggle"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg rounded-lg">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">Jelle Vandriessche</a>
        </div>
        <div className="flex-none">
            <ThemeToggle />
        </div>
    </div>
  )
}

export default Navbar