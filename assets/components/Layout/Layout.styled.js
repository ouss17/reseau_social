import styled from "styled-components";

export const HeaderResponsive = styled.div`
    pointer-events: ${(props) => props.eventsCenter};
    background: ${(props) => props.background};
    color: ${(props) => props.textColor};
    .title-main-respo a {
        color: ${(props) => props.textColor};
    };
    .title-main-respo svg {
        fill: ${(props) => props.textColor};
    };
`;

export const RightLayout = styled.div`
    pointer-events: ${(props) => props.eventsCenter};
    background: ${(props) => props.background};
    color: ${(props) => props.textColor};
    .setting-object svg path {
        stroke: ${(props) => props.textColor};
    };
    .parametre-compte svg path {
        stroke: ${(props) => props.textColor};
    };
    .parametre-compte svg path {
        stroke: ${(props) => props.textColor};
    };
    .list-font {
        color: ${(props) => props.textColor};
    };
    .background.background-dark {
        border-color: ${(props) => props.textColor};
    };
    .admin-object svg path {
        stroke: ${(props) => props.textColor};
    };
    .admin-object.selected svg {
        fill: ${(props) => props.fillActive};
    };
`;

export const CenterLayout = styled.div`
    pointer-events: ${(props) => props.eventsCenter};
    background: ${(props) => props.background};
    color: ${(props) => props.textColor};
    .list-setting a {
        color: ${(props) => props.textColor};
    };
    .setting-object.selected svg {
        fill: ${(props) => props.textColor};
    };
    .list-admin a {
        color: ${(props) => props.textColor};
    };
    .admin-object.selected svg {
        fill: ${(props) => props.textColor};;
    };
`;

export const SidebarStyle = styled.div`
    background: ${(props) => props.background};
    color: ${(props) => props.textColor};
    .sideElem a {
        color: ${(props) => props.textColor}; 
        svg path {
            stroke: ${(props) => props.textColor};
        };
    };
    .sideElem .active svg {
        fill: ${(props) => props.textColor};
        path {
            stroke: ${(props) => props.strokeActive};
        };
    };
`;