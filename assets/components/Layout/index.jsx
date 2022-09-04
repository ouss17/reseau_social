import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Self from './Self/Self';
import Sidebar from './Sidebar/Sidebar'

import '../../styles/layout.css'
import '../../styles/post.css'
import Compte from '../../pages/Parametres/Compte';
import Affichage from '../../pages/Parametres/Affichage';
import More from '../../pages/Parametres/More';
import Users from '../../pages/Admin/Users';
import Posts from '../../pages/Admin/Posts';


const Layout = ({ miniUser }) => {
    let location = useLocation();
    return (
        <div className='layout'>
            <div className="left-layout">
                <Sidebar />
                {
                    (location.pathname.split("/").includes("admin")
                    ||
                    location.pathname.split("/").includes("parametres"))
                    &&
                    <Self miniUser={miniUser} />
                }
            </div>
            <div className="center-layout">
                <div className="container">
                    <Outlet />
                </div>
            </div>
            <div className="right-layout">
                {location.pathname == "/parametres/compte" && <Compte />}
                {location.pathname == "/parametres/affichage" && <Affichage />}
                {location.pathname == "/parametres/more" && <More />}
                {location.pathname == "/admin/users" && <Users />}
                {location.pathname == "/admin/posts" && <Posts />}
                {
                    (location.pathname.split("/").includes("admin") == false
                    &&
                    location.pathname.split("/").includes("parametres") == false)
                    &&
                    <Self miniUser={miniUser} />
                }
            </div>
        </div>
    )
}

export default Layout