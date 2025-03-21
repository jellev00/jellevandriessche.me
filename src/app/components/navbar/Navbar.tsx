'use client'

import React from 'react'
import ThemeToggle from "../ThemeToggle"

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 shadow-lg rounded-lg">
        <div className="flex-1">
            <a className="btn btn-ghost btn-accent text-xl">Portfolio Jelle</a>
        </div>
        <div className="flex-none">
            <ThemeToggle />
        </div>
    </div>
  )
}

export default Navbar