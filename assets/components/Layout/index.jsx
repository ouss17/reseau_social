import React from 'react'
import { Outlet } from 'react-router-dom'
import Self from './Self/Self';
import Sidebar from './Sidebar/Sidebar'

const Layout = ({ miniUser }) => {
    return (
        <div className='layout'>
            <div className="left-layout">
                <Sidebar />
            </div>
            <div className="center-layout">
                <Outlet />

            </div>
            <div className="right-layout">
                <Self miniUser={miniUser} />
            </div>
        </div>
    )
}

export default Layout