import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import './maincontainer.css'

export default function MainContainer() {
  return (
    <div>
      <Header />
      <div className='main-container'>
        <Outlet />
      </div>
    </div>
  )
}
