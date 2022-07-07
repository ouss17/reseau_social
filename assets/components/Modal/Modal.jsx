import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../../styles/form.css";
import { Add, Cancel, Cross, Modify, Save, Send, Trash } from "../Svg/Svgs";

/**
 *
 * Modal
 *
 * ```jsx
 *
 *
 * import useModal from "./useModal";
 *
 * const { isShowing, dragDown, dragUp, topModal, opacityOverlay } = useModal();
 *
 *const ShowModalAdd = () => {
 *  console.log("function de la modal");
 *};
 *
 * <button className="modal-toggle" onClick={ShowModalAdd}>
 *     Ajouter Question
 * </button>
 *
 * <Modal
 *     modalBody={
 *            <div>
 *                <h1>body de la form de la modal</h1>
 *              <div/>
 *           }
 *            isShowing={isShowing}
 *            showGreen={action !== "see" ? true : false}
 *            showRed={true}
 *            hide={dragUp}
 *            topModal={topModal}
 *            opacityOverlay={opacityOverlay}
 *            title={"Ajouter une question"}
 *             greenContent={"Ajouter"}
 *             redContent={"Annuler"}
 *             func={ShowModalAdd}
 *       />
 *
 * ```
 *
 *
 *@param {boolean} isShowing État de la modal (visible ou non)
 *@param {boolean} showGreen Présence du bouton vert sur la modal ou non"
 *@param {boolean} showRed Présence du bouton rouge sur la modal ou non
 *@param {string} title Titre de la modal
 *@param {string} greenContent Contenu du bouton vert
 *@param {string} redContent Contenu du bouton rouge
 *
 */

const Modal = ({
  isShowing,
  hide,
  topModal,
  title,
  modalBody,
  showGreen,
  showRed,
  greenContent,
  redContent,
  opacityOverlay,
  func,
  ...props
}) => {
  const handleSubmit = (e, param) => {
    e.preventDefault();
    func(param);
    // console.log(formDatas);
    // console.log("rendu");
  };
  return isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-title">
                  <h3>{title}</h3>
                </div>
                <form
                  onSubmit={(e) => handleSubmit(e, func)}
                  autoComplete="off"
                >
                  <div className="modal-body">{modalBody}</div>
                  <div className="modal-footer">
                    {showRed && (
                      <button
                        className="button-modal red-button"
                        onClick={hide}
                        type="button"
                      >
                        <Cancel />
                        {redContent}
                      </button>
                    )}
                    {showGreen && (
                      <button
                        className="button-modal green-button"
                        type="submit"
                      >
                        {greenContent === "Envoyer" ? (
                          <Send />
                        ) : greenContent === "Modifier" ? (
                          <Modify />
                        ) : greenContent === "Ajouter" ? (
                          <Add />
                        ) : greenContent === "Supprimer" ? (
                          <Trash />
                        ) : (
                          greenContent === "Enregistrer" && <Save />
                        )}
                        {greenContent}
                      </button>
                    )}
                  </div>
                </form>
                <span className="cross-modal" onClick={hide}>
                  <Cross />
                </span>
              </div>
            </div>
          </div>

          <style jsx="true">
            {`
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                z-index: 1040;
                background-color: rgba(0, 0, 0, 0.5);
                opacity: ` +
              opacityOverlay +
              `;
                transition: all 500ms;
            }

            .modal-wrapper {
                position: fixed;
                top: ` +
              topModal +
              `%;
                left: 0;
                z-index: 1050;
                width: 100%;
                height: 100%;
                overflow-x: hidden;
                overflow-y: auto;
                outline: 0;
                display: flex;
                align-items: center;
                transition: all 500ms;
            }

            .modal {
                z-index: 100;
                background: #fff;
                position: relative;
                margin: auto;
                border-radius: 20px;
                max-width: 500px;
                width: 80%;
                padding: 50px 30px 40px 30px;
                border: 1px solid #ADADAD;
            }

            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .modal-title h3 {
                font-weight: normal;
                font-size: 2em;
                text-align: center;
                margin-bottom: 30px;
            }

            .modal-body{
                margin: 20px 0
            }

            .button-modal {
                color: #fff;
                border-radius: 8.5px;
                padding: 10px 40px;
                cursor: pointer;
                font-size: 15px;
                display: flex;
                align-items: center;
            }

            .button-modal.green-button{
                background: var(--green-color);
                margin-left: 30px;
                transition: all 500ms;
            }
            .button-modal.green-button:hover{
                background: var(--green-color);
            }

            .button-modal.red-button{
                background: rgba(255,65,65,0.8);
                transition: all 500ms;
            }

            .button-modal.red-button:hover{
                background: var(--red-color);
            }

            .button-modal svg{
              stroke:white;
            }
            .modal-footer {
                display: flex;
                justify-content: center;
            }

            .cross-modal {
                position: absolute;
                top: 5%;
                right: 4%;
                cursor: pointer;
            }
              
            .cross {
              width: 100%;
              stroke: #848484;
            }
            .button-modal svg{
              height: 15px;
              margin-right: 10px;
              width: 15px;
            }
            
            

        `}
          </style>
        </>,
        document.body
      )
    : null;
};

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  showGreen: PropTypes.bool.isRequired,
  showRed: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  func: PropTypes.func,
  title: PropTypes.string.isRequired,
  greenContent: PropTypes.string.isRequired,
  redContent: PropTypes.string.isRequired,
  topModal: PropTypes.number.isRequired,
  modalBody: PropTypes.object.isRequired,
};

export default Modal;
