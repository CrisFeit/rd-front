import React, { createContext, useState, useEffect} from 'react';

interface ModalContextInterface {
    modalData: string | null,
    setModalData?: Function | any,
}

export const ModalContext = createContext<ModalContextInterface>({
    modalData: null,
})

const ModalContextProvider = (props : any) => {
  
    const [modalData, setModalData] = useState(null)

    useEffect(() => { setModalData(modalData) }, [modalData])

    return (
        <ModalContext.Provider value={{ modalData,setModalData }}>
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalContextProvider;