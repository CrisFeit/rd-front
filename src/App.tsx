import React , { useState } from "react";
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global/GlobalStyle';
import  { defaultTheme,blackFridayTheme }  from './styles';
import ModalContextProvider from './context/ModalcontextProvider'
import ContainerDefault from "./containers/ContainerDefault";
import Modal from "./components/Modal";

function App() {

  const [useBlackFridayTheme, setUseBlackFridayTheme] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={useBlackFridayTheme ? blackFridayTheme :  defaultTheme}>
        <GlobalStyle />
        <ModalContextProvider >
          <ContainerDefault />
          <Modal />
        </ModalContextProvider>
    </ThemeProvider>
  );
}

export default App;
