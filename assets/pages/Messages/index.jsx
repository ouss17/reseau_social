import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import "../../styles/message.css";

const Messages = ({ messages }) => {


  const DateDiff = (date) => {
    let currentDate = new Date();
    let dateSend = new Date(date);
    var hours = Math.abs(currentDate - dateSend) / 36e5;
    var minutes = parseInt(Math.abs(currentDate.getTime() - dateSend.getTime()) / (1000 * 60) % 60);
    var seconds = parseInt(Math.abs(currentDate.getTime() - dateSend.getTime()) / (1000) % 60);
    if (hours < 1) {
      return (minutes <= 0) ? "à l'instant." : `${parseInt(minutes)} min.`
    } else {
      return (hours <= 24) ? `${parseInt(hours)} h.` : `${parseInt(dateSend.getDate()) < 10 ? "0" + dateSend.getDate() : dateSend.getDate()}/${parseInt(dateSend.getMonth()) < 10 ? "0" + dateSend.getMonth() : dateSend.getMonth()}/${dateSend.getFullYear()}`
    }
  }

  return (
    <>
      <h1 className="title-page">Messages</h1>
      <div id="messages" className='fade-In-LeftToRight'>
        {
          messages.map((message) => (
            <Link key={message.id} to={`/messages/details_messages/${message.id}`}>
              <div className="message">
                <div className="avatar-user">
                  <img src={message.user.avatar} alt="avatar user" />
                </div>
                <p className="infos-user">{message.user.pseudo} <span className="username">@{message.user.username} - {DateDiff(message.messages[message.messages.length - 1].DateSend)}</span></p>
                <p className="last-message">{message.messages[message.messages.length - 1].message.length > 130 ? message.messages[message.messages.length - 1].message.substring(0, 130) + "..." : message.messages[message.messages.length - 1].message}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </>
  )
}

export default Messages