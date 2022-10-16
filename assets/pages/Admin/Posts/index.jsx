import React from 'react'

const Posts = () => {
    return (
        <>
            <h1 className="title-page">Posts</h1>
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

export default Posts