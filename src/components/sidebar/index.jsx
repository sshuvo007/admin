import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import SidebarLinkModel from './model';
import "./sidebar.scss"


const Sidebar = () => {

  
  return (
    <div className='admin__sidebar'>
      <div className='admin__sidebar_inner'>

        <div className="admin__sidebar_body">
          <div className="admin__sidebar_links">
            {
              SidebarLinkModel.map(( data, i ) =>  {
                return <NavLink to={`${data.link}`} key={i} className={({ isActive, isPending  }) => isActive ? "active__link" : ""} >{ data.title }</NavLink>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar