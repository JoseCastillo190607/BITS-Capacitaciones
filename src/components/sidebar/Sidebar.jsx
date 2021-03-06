import React from 'react'
import {LineStyle, LibraryBooks, PersonAddAlt} from '@mui/icons-material'
import './sidebar.css'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="siebarTitle">Dashboard</h3>
          <ul className="sidebarList">
           <Link to="/" className='Link'>
            <li className="sidebarListItem active">
              <LineStyle className='sidebarIcon'/>
              Home
            </li>
            </Link>
            <Link to="/newAdmins" className='Link'>
            <li className="sidebarListItem">
              <PersonAddAlt className='sidebarIcon'/>
              Administradores
            </li>
            </Link>
            <Link to="/cursos" className='Link'>
            <li className="sidebarListItem">
              <LibraryBooks className='sidebarIcon'/>
              Cursos
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}
