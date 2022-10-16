import React from 'react'

const Users = () => {
    return (
        <>
            <h1 className="title-page">Utilisateurs</h1>
            <style jsx="true">
                {`

                @media (max-width: 800px) {
                    .center-layout {
                        display:none;
                    }
                    .right-layout {
                        display:block;
                        width: 100%;
                        padding-top: 70px;
                    }
                }
                `}
            </style>
        </>
    )
}

export default Users