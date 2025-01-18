import React from 'react'
import { Outlet } from 'react-router-dom'

const PlayerMenu = () => {
  return (
    <div>
      <h1>Player Menu</h1>
      <Outlet />
    </div>
  )
}

export default PlayerMenu