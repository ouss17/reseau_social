import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * Composant qui sert de mise en forme le balise input
 *
 * @param {boolean} isFocus contient l'etat de l'input (si le curseur de la souris est à l'interieur ou pas de l'input);
 * @param {string} focusColor couleur de la bordure lorsque isFocus est true
 *
 * ### Usage
 *
 * ```jsx
 *
 * import React, { useState} from "react"
 *
 * const [focus,setFocus ]= useState(false)
 *
 * <InputContainer isFocus={focus} focusColor="" >
 *
 *    <input type="text" onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} />
 *
 * </InputContainer>
 *
 * ```
 *
 *
 */
export default styled.div`
  border-radius: 5px;
  border: 1px solid
    ${(props) => (props.isFocus ? props.focusColor : "rgb(0 0 0 / 20%)")};
  padding: 10px 16px;
  display: flex;
  align-items: center;
  label {
    margin: 0 10px;
    margin-left: 10px;
  }
  label:first-of-type {
    margin-left: 0;
  }

  input {
    width: 100%;
    background-color: transparent;
  }
`;
