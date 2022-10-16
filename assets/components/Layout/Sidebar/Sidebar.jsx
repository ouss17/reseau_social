import React from 'react'
import { Admin, Bell, Exchanges, Home, Setting, Users } from '../../Svg/Svgs'
import SideElem from './SideElem/SideElem'

import "../../../styles/sidebar.css"

const Sidebar = ({ CloseMenu }) => {
    return (
        <div id="sidebar">
            <SideElem link={""} label={"Accueil"} icon={<Home />} CloseMenu={CloseMenu} />
            <SideElem link={"notifications"} label={"Notifications"} icon={<Bell />} CloseMenu={CloseMenu} />
            <SideElem link={"messages"} label={"Messages"} icon={<Exchanges />} CloseMenu={CloseMenu} />
            <SideElem link={"profil"} label={"Profil"} icon={<Users />} CloseMenu={CloseMenu} />
            <SideElem link={"parametres"} label={"Paramètres"} icon={<Setting />} CloseMenu={CloseMenu} />
            <SideElem link={"admin"} label={"Admin"} icon={<Admin />} CloseMenu={CloseMenu} />
        </div>
    )
}

export default Sidebar