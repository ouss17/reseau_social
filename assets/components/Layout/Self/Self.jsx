import React from 'react'

const Self = ({ miniUser }) => {
    return (
        <div className='self-layout'>
            <div className="img">
                <img src={miniUser.avatar} alt="avatar user" />
            </div>
            <p className="pseudo">{miniUser.pseudo}</p>
            <p className="username">@{miniUser.username}</p>

        </div>
    )
}

export default Self