import { useContext } from 'react';
import styled from 'styled-components'
import { typeScale } from '../styles'
import { ModalContext } from '../context/ModalcontextProvider'

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left:0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    overflow-x: hidden;
    z-index:10;
    display: flex;
    transition : all 0.3s;   
`
const ModalContainer = styled.div`
    margin: auto;
    width:80vw;
    height:auto;
    display: flex;
    flex-direction: column;
`
const ModalToggle = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 0 1% auto;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.textFieldBackground};
`
const ModalContent = styled.div`
    padding: 5%;
    font-weight:300;
    line-height: 1.2;
    font-size: ${typeScale.listItem};
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.textFieldBackground};
    align-items:center;
`

const Modal = () => {

    const { modalData ,setModalData} = useContext(ModalContext);

    return !modalData ? null :(
        <Overlay onClick={(event)=> event.currentTarget === event.target && setModalData(null)}>
            <ModalContainer>
                <ModalToggle onClick={()=> setModalData(null)}>&#10006;</ModalToggle>
                <ModalContent>
                    {modalData}
                </ModalContent>
            </ModalContainer>
        </Overlay>
    )
}

export default Modal
