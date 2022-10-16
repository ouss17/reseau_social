import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Self from './Self/Self';
import Sidebar from './Sidebar/Sidebar'
import {
    RightLayout,
    CenterLayout,
    SidebarStyle,
    HeaderResponsive,
} from "./Layout.styled";

import '../../styles/layout.css'
import '../../styles/post.css'
import Compte from '../../pages/Parametres/Compte';
import Affichage from '../../pages/Parametres/Affichage';
import More from '../../pages/Parametres/More';
import Users from '../../pages/Admin/Users';
import Posts from '../../pages/Admin/Posts';
import { ArrowLeft, Burger } from '../Svg/Svgs';
import SettingsContext from '../../context/SettingsContext';


const Layout = ({ miniUser }) => {

    const { settings, setSettings } = useContext(SettingsContext);
    let location = useLocation();

    useMemo(() => console.log(settings, "settings"), [settings])

    const [leftMenu, setLeftMenu] = useState(-1000)
    const [eventsCenter, setEventsCenter] = useState("auto")

    const OpenMenu = () => {
        setLeftMenu(0)
        setEventsCenter("none")
        setSettings({ ...settings, background: !settings.darkMode ? "rgba(0,0,0,0.6)" : "var(--dark-background)" })
    }
    const CloseMenu = () => {
        setLeftMenu(-1000)
        setEventsCenter("auto")
        setSettings({ ...settings, background: !settings.darkMode ? "white" : "var(--dark-background)" })
    }


    return (
        <div className='layout'>
            <HeaderResponsive className="header-responsive" eventsCenter={eventsCenter} background={settings.background} textColor={settings.textColor}>
                <img src={miniUser.avatar} alt="avatar user" onClick={OpenMenu} />
                <h1 className="title-main-respo">
                    {location.pathname.split('/')[1] == "" || location.pathname.split('/')[1] == "post"
                        ?
                        (
                            location.pathname.split('/')[1] == "post"
                                ?
                                <Link to="/">
                                    <ArrowLeft /> Accueil
                                </Link>
                                :
                                "Accueil"
                        )
                        :
                        (
                            location.pathname.split("/").includes("details_messages")
                                ?
                                <Link to="/messages">
                                    <ArrowLeft /> {location.pathname.split('/')[1].toLowerCase().charAt(0).toUpperCase() + (location.pathname.split('/')[1].slice(1).toLowerCase())}
                                </Link>
                                :
                                location.pathname.split("/").includes("admin") && location.pathname.split("/").includes("posts")
                                    ?
                                    <Link to="/admin">
                                        <ArrowLeft /> Admin Posts
                                    </Link>
                                    :
                                    location.pathname.split("/").includes("admin") && location.pathname.split("/").includes("users")
                                        ?
                                        <Link to="/admin">
                                            <ArrowLeft /> Admin Users
                                        </Link>
                                        :
                                        location.pathname.split("/").includes("parametres") && location.pathname.split("/").includes("compte")
                                            ?
                                            <Link to="/parametres">
                                                <ArrowLeft /> Paramètres Compte
                                            </Link>
                                            :
                                            location.pathname.split("/").includes("parametres") && location.pathname.split("/").includes("affichage")
                                                ?
                                                <Link to="/parametres">
                                                    <ArrowLeft /> Paramètres Affichage
                                                </Link>
                                                :
                                                location.pathname.split("/").includes("parametres") && location.pathname.split("/").includes("more")
                                                    ?
                                                    <Link to="/parametres">
                                                        <ArrowLeft /> Paramètres Plus
                                                    </Link>
                                                    :

                                                    location.pathname.split('/')[1].toLowerCase().charAt(0).toUpperCase() + (location.pathname.split('/')[1].slice(1).toLowerCase())
                        )
                    }

                </h1>
            </HeaderResponsive>
            <SidebarStyle background={settings.darkMode ? "var(--dark-background)" : "white"} textColor={settings.darkMode ? "white" : "black"} strokeActive={settings.darkMode ? "black" : "white"} className="left-layout respo-left-layout" style={{ left: `${leftMenu}px` }}>
                <span className="cross-close" onClick={CloseMenu}>X</span>
                <Sidebar CloseMenu={CloseMenu} />
                {
                    (location.pathname.split("/").includes("admin")
                        ||
                        location.pathname.split("/").includes("parametres"))
                    &&
                    <Self miniUser={miniUser} />
                }
            </SidebarStyle>
            <SidebarStyle background={settings.darkMode ? "var(--dark-background)" : "white"} textColor={settings.darkMode ? "white" : "black"} strokeActive={settings.darkMode ? "black" : "white"} className="left-layout">
                <Sidebar />
                {
                    (location.pathname.split("/").includes("admin")
                        ||
                        location.pathname.split("/").includes("parametres"))
                    &&
                    <Self miniUser={miniUser} />
                }
            </SidebarStyle>
            {/* <div className="burger-responsive">
                <Burger />
            </div> */}
            <CenterLayout className="center-layout" eventsCenter={eventsCenter} background={settings.background} textColor={settings.textColor}>
                <div className="container">
                    <Outlet />
                </div>
            </CenterLayout>
            <RightLayout className="right-layout" eventsCenter={eventsCenter} background={settings.background} textColor={settings.textColor} fillActive={settings.darkMode ? "white" : "black"}>
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
            </RightLayout>
        </div>
    )
}

export default Layout