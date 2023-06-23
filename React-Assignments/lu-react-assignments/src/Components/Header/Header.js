import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <header className='my-header'>
            <ul className='menu'>
                <Link to="/form"><li>Form</li></Link>
            </ul>
        </header>
    </div>
  )
}
