import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from '../../components/Svg/Svgs'


import "../../styles/settings.css"

const Parametres = () => {
  const itemRef = useRef();

  const [state, setState] = useState({});
  const onSelectTabs = (e) => {
    const id = e.target.id;
    let settingObjects = document.getElementsByClassName('setting-object')
    const settingTab = Object.entries(settingObjects);
    settingTab.forEach(setting => {
      setting[1].classList.remove('selected')
    });
    document.getElementById(id).classList.add("selected")
  };

  return (
    <>
      <h1 className="title-page">Paramètres</h1>
      <div id='settings' className='fade-In-LeftToRight'>

        <ul className='list-setting'>
          <Link to={"compte"} ><li id="setting-compte" className='setting-object' ref={itemRef} onClick={onSelectTabs}><span>Mon Compte</span> <ChevronRight /> </li></Link>
          <Link to={"affichage"} ><li id="setting-affichage" className='setting-object' ref={itemRef} onClick={onSelectTabs}><span>Affichage</span> <ChevronRight /> </li></Link>
          <Link to={"more"} ><li id="setting-more" className='setting-object' ref={itemRef} onClick={onSelectTabs}><span>Plus</span> <ChevronRight /> </li></Link>

        </ul>
      </div>
      <style jsx="true">
        {`
          .center-layout {
            width: 36%;
          }
          .right-layout {
            width: 45%;
          }
        `}
      </style>
    </>
  )
}

export default Parametres