import React from 'react'
import { NavLink } from 'react-router-dom'
import "./admin_sidebar.scss"
function AdminSidebar (){
  return (
   <div className="admin_sidebar">
        <ul className="nav_list">
            <li className="list_item">
                <NavLink to="/admin/news">News</NavLink>
            </li>
            <li className="list_item">
                <NavLink to="/admin/teams">Teams</NavLink>
            </li>
            <li className="list_item">
                <NavLink to="/admin/matches">Matches</NavLink>
            </li>
            <li className="list_item">
                <NavLink to="/admin/ligas">Ligas</NavLink>
            </li>
        </ul>
   </div>
  )
}
export default AdminSidebar
