import React from 'react'
import {  Navigate, Outlet } from 'react-router-dom'

export default function PrivateCom() {
  const auth = localStorage.getItem("userData")
  return (
    <div>
      {
        auth?<Outlet/>:<Navigate to='/Login'/>
      }
    </div>
  )
}
