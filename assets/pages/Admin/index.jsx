import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from '../../components/Svg/Svgs'

import "../../styles/admin.css"

const Admin = () => {
  const itemRef = useRef();
  const onSelectTabs = (e) => {
    const id = e.target.id;
    let adminObjects = document.getElementsByClassName('admin-object')
    const adminTab = Object.entries(adminObjects);
    adminTab.forEach(admin => {
      admin[1].classList.remove('selected')
    });
    document.getElementById(id).classList.add("selected")
  };
  return (
    <>
      <h1 className="title-page">Admin</h1>
      <div id='admin' className='fade-In-LeftToRight'>

        <ul className='list-admin'>
          <Link to={"users"} ><li id="admin-users" className='admin-object' ref={itemRef} onClick={onSelectTabs}><span>Utilisateurs</span> <ChevronRight /> </li></Link>
          <Link to={"posts"} ><li id="admin-post" className='admin-object' ref={itemRef} onClick={onSelectTabs}><span>Posts</span> <ChevronRight /> </li></Link>

        </ul>
      </div>
      <style jsx="true">
        {`
          .center-layout {
            width: 36%;
          }
          .right-layout {
            width: 70%;
          }

          @media (max-width: 800px) {
              .center-layout {
                  width: 100%;
                  padding-top: 70px;
              }
          }

        `}
      </style>
    </>
  )
}

export default Admin