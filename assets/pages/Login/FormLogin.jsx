import React, { useState } from "react";
import InputContainer from "../../components/Form/InputContainer";

const FormLogin = ({ action, inputData, inputDataLog, inputChange, inputChangeLog }) => {
    console.log(action);
    const { firstname, lastname, email, username, password } =
        inputData;
    const [focus, setFocus] = useState({
        firstname: false,
        lastname: false,
        email: false,
        username: false,
        password: false,
    });

    const { usernameLog, passwordLog } =
        inputDataLog;
    const [focusLog, setFocusLog] = useState({
        usernameLog: false,
        passwordLog: false,
    });

    switch (action) {
        case "reg":
            return (
                <div className="form-content">
                    <label htmlFor="lastname">Nom: </label>
                    <InputContainer
                        className="form-elem w-100"
                        isFocus={focus.lastname}
                        focusColor="var(--green-color)"
                    >
                        <input
                            type="text"
                            id="lastname"
                            autoComplete="off"
                            // className="form-elem"
                            name="lastname"
                            onFocus={() => setFocus({ ...focus, lastname: true })}
                            onBlur={() => setFocus({ ...focus, lastname: false })}
                            onChange={inputChange}
                            value={lastname}
                        />
                    </InputContainer>
                    <label htmlFor="firstname">Prénom: </label>
                    <InputContainer
                        className="form-elem w-100"
                        isFocus={focus.firstname}
                        focusColor="var(--green-color)"
                    >
                        <input
                            type="text"
                            id="firstname"
                            focusColor="blue"
                            autoComplete="off"
                            // className="form-elem"
                            name="firstname"
                            onFocus={() => setFocus({ ...focus, firstname: true })}
                            onBlur={() => setFocus({ ...focus, firstname: false })}
                            onChange={inputChange}
                            value={firstname}
                        />
                    </InputContainer>
                    <label htmlFor="email">Adresse email: </label>
                    <InputContainer
                        className="form-elem w-100"
                        isFocus={focus.email}
                        focusColor="var(--green-color)"
                    >
                        <input
                            type="text"
                            id="email"
                            autoComplete="off"
                            // className="form-elem"
                            name="email"
                            onFocus={() => setFocus({ ...focus, email: true })}
                            onBlur={() => setFocus({ ...focus, email: false })}
                            onChange={inputChange}
                            value={email}
                        />
                    </InputContainer>
                    <label htmlFor="username">Pseudo: </label>
                    <InputContainer
                        className="form-elem w-100"
                        isFocus={focus.username}
                        focusColor="var(--green-color)"
                    >
                        <input
                            type="text"
                            id="username"
                            autoComplete="off"
                            // className="form-elem"
                            name="username"
                            onFocus={() => setFocus({ ...focus, username: true })}
                            onBlur={() => setFocus({ ...focus, username: false })}
                            onChange={inputChange}
                            value={username}
                        />
                    </InputContainer>
                    <label htmlFor="password">Mot de passe: </label>
                    <InputContainer
                        className="form-elem w-100"
                        isFocus={focus.password}
                        focusColor="var(--green-color)"
                    >
                        <input
                            type="password"
                            id="password"
                            autoComplete="off"
                            // className="form-elem"
                            name="password"
                            onFocus={() => setFocus({ ...focus, password: true })}
                            onBlur={() => setFocus({ ...focus, password: false })}
                            onChange={inputChange}
                            value={password}
                        />
                    </InputContainer>
                </div>
            );
            break;
        case "log":
            return (
                <div className="form-content">
                    <label htmlFor="usernameLog">Pseudo: </label>
                    <InputContainer
                        className="form-elem w-100"
                        isFocus={focus.usernameLog}
                        focusColor="var(--green-color)"
                    >
                        <input
                            type="text"
                            id="usernameLog"
                            autoComplete="off"
                            // className="form-elem"
                            name="usernameLog"
                            onFocus={() => setFocus({ ...focus, usernameLog: true })}
                            onBlur={() => setFocus({ ...focus, usernameLog: false })}
                            onChange={inputChangeLog}
                            value={usernameLog}
                        />
                    </InputContainer>
                    <label htmlFor="passwordLog">Mot de passe: </label>
                    <InputContainer
                        className="form-elem w-100"
                        isFocus={focus.passwordLog}
                        focusColor="var(--green-color)"
                    >
                        <input
                            type="passwordLog"
                            id="passwordLog"
                            autoComplete="off"
                            // className="form-elem"
                            name="passwordLog"
                            onFocus={() => setFocus({ ...focus, passwordLog: true })}
                            onBlur={() => setFocus({ ...focus, passwordLog: false })}
                            onChange={inputChangeLog}
                            value={passwordLog}
                        />
                    </InputContainer>
                    <div className="button-login forget-psw">
                        <span>Mot de passe oublié ?</span>
                    </div>
                </div>
            );
            break;
        default:
            break;
    }

};

export default FormLogin;
