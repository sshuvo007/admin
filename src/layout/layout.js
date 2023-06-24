import React from 'react'
import AdminNavbar from '../components/nav'
import Sidebar from '../components/sidebar'
import './layout.scss'
import { Outlet } from 'react-router-dom'

const Layout = ({ children }) => {
    return (
        <div className="admin__layout">
            <div className="admin__navbar">
                <AdminNavbar />
            </div>

            <div className="admin__body_layout">
                <div className="admin__sidebar">
                    <Sidebar />
                </div>

                <div className="admin__body">
                   <div className="admin__container">
                   {children}
                   </div>
                </div>
            </div>

<Outlet />
        </div>
    )
}

export default Layout