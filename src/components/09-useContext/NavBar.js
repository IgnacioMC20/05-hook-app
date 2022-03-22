import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav>
        <ul>
            <NavLink  className={(navData) => navData.isActive ? "complete mx-2" : "mx-2"} to={"/"}>Home</NavLink>
            <NavLink  className={(navData) => navData.isActive ? "complete mx-2" : "mx-2"} to={"about/"}>About</NavLink>
            <NavLink  className={(navData) => navData.isActive ? "complete mx-2" : "mx-2"} to={"/login"}>Login</NavLink>
        </ul>
    </nav>
  )
}
