import { useState } from 'react'

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);
    const [topModal, setTopModal] = useState(-100)
    const [opacityOverlay, setOpacityOverlay] = useState(0)

    /**
     *  Ouverture de la modal
     */
    function dragDown() {
        setIsShowing(true);
        setTimeout(() => {
            setOpacityOverlay(1)
            setTopModal(0)
        }, 100);
    }

    /**
    *  Fermeture de la modal
    */
    function dragUp() {
        setTopModal(-100)
        setOpacityOverlay(0)
        setTimeout(() => {
            setIsShowing(false);
        }, 600);
    }

    return {
        isShowing,
        topModal,
        opacityOverlay,
        dragDown,
        dragUp,
    };

}

export default useModal