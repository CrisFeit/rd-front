import { useContext, useState, useEffect } from 'react';

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
    font-size: ${typeScale.listItem};
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.textFieldBackground};

    align-items:center;
`


const Modal = () => {

    const { modalData ,setModalData} = useContext(ModalContext);

    return !modalData ? null :(
        <Overlay>
            <ModalContainer>
                <ModalToggle onClick={()=> setModalData(null)}>&#10006;</ModalToggle>
                <ModalContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare tellus magna, et congue purus malesuada at. Suspendisse mattis ipsum id eros elementum facilisis. Aliquam non convallis magna. Aliquam ultrices purus sit amet eleifend facilisis. Aliquam tempus lectus ut sapien ullamcorper, quis vestibulum nisl elementum. In purus est, eleifend in sodales ut, dapibus et felis. Phasellus posuere et nisi sit amet consectetur. Donec a nibh id sapien pulvinar varius id quis massa. Mauris sagittis id leo in ultrices. Phasellus nec viverra purus.
                </ModalContent>
            </ModalContainer>
        </Overlay>
    )
}

export default Modal
