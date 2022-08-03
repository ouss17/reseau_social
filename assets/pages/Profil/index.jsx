import React, { useEffect, useRef, useState } from 'react'
import { Exchanges } from '../../components/Svg/Svgs'

import '../../styles/profil.css'
import Images from './Images';
import Likes from './Likes';
import OwnPosts from './OwnPosts';
import Unlikes from './Unlikes';

const Profil = ({ user, posts }) => {

  const itemRef = useRef();

  const [state, setState] = useState({
    tabSelected: "list-post",
  });

  const onSelectTabs = (e) => {
    const id = e.target.id;
    setState({ ...state, tabSelected: id });
  };

  const setActive = (nodeList, current) => {
    nodeList.forEach((element) => {
      element.classList.remove("tab-selected");
    });
    current.classList.add("tab-selected");
  };

  // useEffect(() => {
  //   const nodeRef = itemRef.current.tagName;
  //   const listItemNode = document.getElementsByClassName("item-profil");
  //   listItemNode[0].classList.add("tab-selected");
  //   setTimeout(() => {
  //     listItemNode.forEach((element) => {
  //       console.log(element);
  //       element.addEventListener("click", (e) => {
  //         setActive(listItemNode, e.target);
  //         return () => element.removeEventListener();
  //       });
  //     });
  //   }, 100);

  // }, [state.tabSelected]);

  return (
    <>
      <h1 className="title-page">Profil</h1>
      <div id="profil">
        <div className="bann-plus-avatar">
          <img className='banniere' src={user.banniere} alt="" />
          <img className='avatar' src={user.avatar} alt="" />
        </div>
        <div className="container-profil">

          <div className="user">
            <div className="pseudo-username">
              <p className="pseudo">{user.pseudo}</p>
              <p className="username">{user.username}</p>
            </div>
            <div className="actions">
              <Exchanges />
              <div className="action">
                <p>S'abonner</p>
              </div>
            </div>
          </div>
          <div className="biographie">
            <p>{user.bio}</p>
          </div>
          <div className="relations">
            <div className="followers">
              <p><strong>{user.follower}</strong> abonné{user.follower > 0 && "s"}</p>
            </div>
            <div className="followers">
              <p><strong>{user.follow}</strong> abonnement{user.follow > 0 && "s"}</p>
            </div>
          </div>
          <div className="sub-menu">
            <ul className='menu-profil'>
              <li className="item-profil" id="list-post" ref={itemRef} onClick={onSelectTabs}>Posts</li>
              <li className="item-profil" id="list-images" ref={itemRef} onClick={onSelectTabs}>Images</li>
              <li className="item-profil" id="list-likes" ref={itemRef} onClick={onSelectTabs}>Likes</li>
              <li className="item-profil" id="list-unlikes" ref={itemRef} onClick={onSelectTabs}>Unlikes</li>
            </ul>

            <div className="content-profil">
              {state.tabSelected == "list-post" && <OwnPosts posts={posts} />}
              {state.tabSelected == "list-images" && <Images />}
              {state.tabSelected == "list-likes" && <Likes />}
              {state.tabSelected == "list-unlikes" && <Unlikes />}
            </div>
          </div>

        </div>
      </div>
      <style jsx="true">
        {`
          .container{
            width: 100%;
          }
          .title-page{
            width:90%;
            margin: 0 auto;
            left: 25%;
            padding-left: 50px;
          }
        `}
      </style>
    </>
  )
}

export default Profil