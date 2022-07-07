import React from 'react'
import { Admin, Bell, Exchanges, Home, Setting, Users } from '../../Svg/Svgs'
import SideElem from './SideElem/SideElem'

import "../../../styles/sidebar.css"

const Sidebar = () => {
    return (
        <div id="sidebar">
            <SideElem link={""} label={"Accueil"} icon={<Home />} />
            <SideElem link={"notifications"} label={"Notifications"} icon={<Bell />} />
            <SideElem link={"messages"} label={"Messages"} icon={<Exchanges />} />
            <SideElem link={"profil"} label={"Profil"} icon={<Users />} />
            <SideElem link={"parametres"} label={"Paramètres"} icon={<Setting />} />
            <SideElem link={"admin"} label={"Admin"} icon={<Admin />} />
        </div>
    )
}

export default Sidebar