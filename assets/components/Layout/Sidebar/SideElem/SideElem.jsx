import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import styled from "styled-components";
// import "../Sidebar.css";



const IconLabel = styled.div`
    display: flex;
    align-items: center;
`;

const Row = styled.div`

`;

const List = styled.ul`
`;

const ListItem = styled.li`

`;


/**
 * Boutton de redirection vers les pages situé dans le menu de gauche
 *
 * ### usage
 *
 * ```jsx
 *
 * <Link to="/page" >
 *  <FontAwesomeIcon icon="fa-solid fa-user" />
 *  Accueil
 * </Link>
 *
 * ```
 */
const SideElem = ({ link, label, icon }) => {
    icon = icon || <FontAwesomeIcon icon="fa-solid fa-user" />;
    label = label || "Label";

    return (
        <div className="sideElem">
            <NavLink to={link}>
                <IconLabel>{icon} {label}</IconLabel>
            </NavLink>
        </div>
    );
};

SideElem.propTypes = {
    icon: PropTypes.element,
    label: PropTypes.string,
    link: PropTypes.string,
};

export default SideElem;
