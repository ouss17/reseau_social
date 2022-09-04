import React from 'react'
import { ArrowDown, ArrowUp, Comment, Heart } from '../../components/Svg/Svgs'

import '../../styles/notifications.css'

const Notifications = ({ notifs }) => {

    return (
        <>
            <h1 className="title-page">Notifications</h1>
            <div id='notifications' className='fade-In-LeftToRight'>
                {
                    notifs.map((notif, index) => (
                        <div className="notification" key={index} >
                            <div className="icon-plus-avatar">
                                {notif.icon}
                                <img src={notif.avatarUser} alt="" />
                            </div>
                            <p>{notif.title}</p>
                            {
                                notif.content && (
                                    notif.content !== "" &&
                                    <div className="content-comment">
                                        <p className='content'>{notif.content.content}</p>
                                    </div>

                                )
                            }
                            {
                                notif.content && (

                                    (notif.file4 !== null)
                                        ?
                                        <div className='content-file four-file'>
                                            <img src={notif.content.file1} alt="" />
                                            <img src={notif.content.file2} alt="" />
                                            <img src={notif.content.file3} alt="" />
                                            <img src={notif.content.file4} alt="" />
                                        </div>
                                        :
                                        (notif.file3 !== null)
                                            ?
                                            <div className='content-file three-file'>
                                                <img src={notif.content.file1} alt="" />
                                                <img src={notif.content.file2} alt="" />
                                                <img src={notif.content.file3} alt="" />
                                            </div>
                                            :
                                            (notif.file2 !== null)
                                                ?
                                                <div className='content-file two-file'>
                                                    <img src={notif.content.file1} alt="" />
                                                    <img src={notif.content.file2} alt="" />
                                                </div>
                                                :
                                                (notif.file1 !== null)
                                                &&
                                                <div className='content-file one-file'>
                                                    <img src={notif.content.file1} alt="" />
                                                </div>

                                )

                            }
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Notifications