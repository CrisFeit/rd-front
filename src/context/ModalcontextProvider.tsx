import React, { createContext, useState, useEffect ,FC} from 'react';

interface ModalContextInterface {
    modalDisplay: boolean,
    modalData: string | null,
    setModalDisplay?: any,
    setModalData?: any,
  }

export const ModalContext = createContext<ModalContextInterface>({
    modalDisplay : false,
    modalData: null,
})

const ModalContextProvider = (props : any) => {
    const [modalDisplay, setModalDisplay] = useState(false)
    const [modalData, setModalData] = useState(null)

    const checkDisplay = async () => {
        setModalDisplay(true)
    }

    useEffect(() => { checkDisplay() }, [modalData])

    return (
        <ModalContext.Provider value={{ modalData,setModalData,modalDisplay }}>
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalContextProvider;