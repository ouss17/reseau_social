import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from '../../../components/Svg/Svgs'

const More = () => {
    return (
        <>
            <h1 className="title-page">Plus</h1>
            <div id="more" className='fade-In-LeftToRight'>
                <ul className='list-setting'>
                    <Link to={"about"} ><li id="setting-compte" className='setting-object'><span>À propos</span> <ChevronRight /> </li></Link>
                    <Link to={"usage"} ><li id="setting-affichage" className='setting-object'><span>Conditions d'utilisation</span> <ChevronRight /> </li></Link>
                    <Link to={"cookies"} ><li id="setting-more" className='setting-object'><span>Politique relative aux cookies</span> <ChevronRight /> </li></Link>

                </ul>
            </div>
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

export default More