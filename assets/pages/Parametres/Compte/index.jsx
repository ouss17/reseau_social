import React from 'react'
import { Key, PowerOff, Users } from '../../../components/Svg/Svgs'


const Compte = () => {
    return (
        <>
            <h1 className="title-page">Votre Compte</h1>
            <div id="compte" className='fade-In-LeftToRight'>
                <div className="parametre-compte">
                    <div className="icon-title">
                        <Users />
                        <h2 className='title-setting'>Informations du compte</h2>
                    </div>
                    <div className="description-title">
                        <p>Vérifiez ou modifiez les infomations relatives à votre compte comme votre adresse email, nom d’utilisateur, ou autres informations</p>
                    </div>
                </div>
                <div className="parametre-compte">
                    <div className="icon-title">
                        <Key />
                        <h2 className='title-setting'>Changer le mot de passe</h2>
                    </div>
                    <div className="description-title">
                        <p>Modifiez votre mot de passe</p>
                    </div>
                </div>
                <div className="parametre-compte">
                    <div className="icon-title">
                        <PowerOff />
                        <h2 className='title-setting'>Désactiver votre compte</h2>
                    </div>
                    <div className="description-title">
                        <p>Désactivez votre compte. Attention, vous aurez un délai de 7 jours pour récupérer votre compte avant sa suppression définitive !</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Compte