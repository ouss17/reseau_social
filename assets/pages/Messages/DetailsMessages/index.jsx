import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import "../../../styles/detailMessage.css";

const DetailsMessages = ({ messages, user }) => {
    const { id } = useParams();
    const [listMessages, setListMessages] = useState([]);
    const [messagesObject, setMessagesObject] = useState({});

    const DateDiff = (date) => {
        let currentDate = new Date();
        let dateSend = new Date(date);
        var hours = Math.abs(currentDate - dateSend) / 36e5;
        var minutes = parseInt(Math.abs(currentDate.getTime() - dateSend.getTime()) / (1000 * 60) % 60);
        var seconds = parseInt(Math.abs(currentDate.getTime() - dateSend.getTime()) / (1000) % 60);
        if (hours < 1) {
            return (minutes <= 0) ? "à l'instant." : `${parseInt(minutes)} min.`
        } else {
            return (hours <= 24) ? `${parseInt(hours)} h.` : `${parseInt(dateSend.getDate()) < 10 ? "0" + dateSend.getDate() : dateSend.getDate()}/${parseInt(dateSend.getMonth()) < 10 ? "0" + dateSend.getMonth() : dateSend.getMonth()}/${dateSend.getFullYear()} ${parseInt(dateSend.getHours()) < 10 ? "0" + dateSend.getHours() : dateSend.getHours()}:${parseInt(dateSend.getMinutes()) < 10 ? "0" + dateSend.getMinutes() : dateSend.getMinutes()}`
        }
    }

    useEffect(() => {
        let object = messages.find(x => x.id === id);
        // let list = messages.find(x => x.id === id.messages);
        setListMessages(object.messages)
        setMessagesObject(object)
    }, [messages]);


    return (
        <>
            <h1 className="title-page">Messages</h1>
            <div id="messages" className='fade-In-LeftToRight'>
                <div className="info-user">
                    <div className="avatar-user">
                        <img src={messagesObject.user && messagesObject.user.avatar} alt="avatar user" />
                    </div>
                    <p className="infos-user">{messagesObject.user && messagesObject.user.pseudo} <span className="username">@{messagesObject.user && messagesObject.user.username}</span></p>
                </div>
                {
                    listMessages.length > 0 &&
                    listMessages.map((message) => (
                        <div style={{ width: "100%" }}>
                            {
                                (message.user.username !== user.username)
                                    ?
                                    <div key={message.id} className="message-object message-left">
                                        <img src={message.user.avatar} alt={message.user.username + "avatar"} className="user-avatar user-avatar-left" />
                                        <div className="message-side">
                                            <p className="message-text">{message.message}</p>
                                            <p className="date-message">{DateDiff(message.DateSend)}</p>
                                        </div>
                                    </div>
                                    :
                                    <div key={message.id} className="message-object message-right">
                                        <div className="message-side">
                                            <p className="message-text">{message.message}</p>
                                            <p className="date-message">{DateDiff(message.DateSend)}</p>
                                        </div>
                                    </div>
                            }
                        </div>
                    ))
                }
                <div className="write"></div>
            </div>
        </>
    )
}

export default DetailsMessages