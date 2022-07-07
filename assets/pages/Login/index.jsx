import React, { useState } from 'react'
import Modal from '../../components/Modal/Modal';
import useModal from '../../components/Modal/useModal';

import '../../styles/login.css'
import FormLogin from './FormLogin';

const Login = () => {
    const [state, setState] = useState({
        isModalOpen: false,
        action: "log",
        labelButton: "",
        labelTitre: "",
    });

    const [inputState, setInputState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
    });

    const [inputStateLog, setInputStateLog] = useState({
        usernameLog: "",
        passwordLog: "",
    });
    const handleChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInputState({ ...inputState, [name]: value });
    };

    const handleChangeInputLog = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInputStateLog({ ...inputStateLog, [name]: value });
    };



    const emptyValue = () => {
        setInputState({
            firstname: "",
            lastname: "",
            email: "",
            username: "",
            password: "",
        });
        setInputStateLog({
            username: "",
            password: "",
        })
    };

    const showModalLog = () => {
        emptyValue();
        setState({
            ...state,
            action: "log",
            labelButton: "Se connecter",
            labelTitre: "Connectez-vous",
        });

        dragDown();
    };

    const showModalReg = () => {
        emptyValue();
        setState({
            ...state,
            action: "reg",
            labelButton: "S'enregistrer",
            labelTitre: "Enregistrez-vous",
        });

        dragDown();
    };

    const { isShowing, dragDown, dragUp, topModal, opacityOverlay } = useModal();



    return (
        <div className="login">
            <Modal
                title={state.labelTitre}
                modalBody={
                    <FormLogin
                        action={state.action}
                        inputData={inputState}
                        inputDataLog={inputStateLog}
                        inputChange={handleChangeInput}
                        inputChangeLog={handleChangeInputLog}
                    />
                }
                isShowing={isShowing}
                showGreen={state.action !== "see" ? true : false}
                showRed={true}
                hide={dragUp}
                topModal={topModal}
                opacityOverlay={opacityOverlay}
                redContent={state.action !== "see" ? "Annuler" : "Fermer"}
                greenContent={state.labelButton}
                func={() => {
                    saveStructure();
                }}
            />
            <main className="main">
                <div className="side-background">
                    <div className="content-side">
                        <p className="now color">Découvrez ce qui se passe.</p>
                    </div>
                </div>
                <div className="side-user">
                    <div className="content-side-user">
                        <div className="register">
                            <div className="button-login register-normal" onClick={showModalReg}>
                                <span style={{ overflowWrap: "break-word" }}>S'inscrire avec une adresse email</span>
                            </div>
                            <div className="else">
                                <span className="or color">ou</span>
                            </div>
                            <div className="button-login register-normal" onClick={showModalLog}>
                                <span>Se connecter</span>
                            </div>
                            <p className="confidential">En vous inscrivant, vous acceptez les <span className="pointer blue-color">Conditions d'Utilisation</span> et la <span className="pointer blue-color">Politique de Confidentialité</span>, incluant l'<span className="pointer blue-color">Utilisation de Cookies</span>.</p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="footer footer-login">
                <ul className="footer-list">
                    <li className="list-footer">à propos</li>
                    <li className="list-footer">centre d'assistance</li>
                    <li className="list-footer">conditions d'utilisation</li>
                    <li className="list-footer">politique relative aux cookies</li>
                    <li className="list-footer">accessibilité</li>
                    <li className="list-footer">paramètres</li>
                    <li className="list-footer">© 2022 Reseau Social, Inc</li>
                </ul>
            </footer>
        </div>
    )
}

export default Login