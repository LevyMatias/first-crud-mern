import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <nav className='pl-10 mt-10'>
        <ul className='flex gap-16'>
          <li className='text-slate-200'>
            <Link to="/">Home</Link>
          </li>
          <li className='text-slate-200'>
            <Link to="/create">Create</Link>
          </li>
          <li className='text-slate-200'>
            <Link to="/update">Update</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar