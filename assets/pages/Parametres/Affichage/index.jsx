import React from 'react'
import { ALetter, Paint } from '../../../components/Svg/Svgs'

const Affichage = () => {
    return (
        <>
            <h1 className="title-page">Affichage</h1>
            <div id="affichage" className='fade-In-LeftToRight'>

                <div className="parametre-compte">
                    <div className="icon-title">
                        <ALetter />
                        <h2 className='title-setting'>Taille de texte</h2>
                    </div>
                    <div className="description-title">
                        <ul className="list-font">
                            <li className="font-size font-small">Petit</li>
                            <li className="font-size font-moyen">Moyen</li>
                            <li className="font-size font-normal">Normal</li>
                            <li className="font-size font-tall">Grand</li>
                        </ul>
                    </div>
                </div>
                <div className="parametre-compte">
                    <div className="icon-title">
                        <Paint />
                        <h2 className='title-setting'>Arrière plan</h2>
                    </div>
                    <div className="description-title">
                        <div className="backgrounds">
                            <div className="background background-white"></div>
                            <div className="background background-dark"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Affichage