import React, { useState } from "react";
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global/GlobalStyle';
import { defaultTheme, blackFridayTheme } from './styles';
import ModalContextProvider from './context/ModalcontextProvider'
import ContainerDefault from "./containers/ContainerDefault";
import Modal from "./components/Modal";

function App() {

  const [changeTheme, setChangeTheme] = useState(false);

  function toggleTheme(){
    setChangeTheme((changeTheme)=> !changeTheme)
  }

  return (
    <ThemeProvider theme={changeTheme ? blackFridayTheme : defaultTheme}>
      <GlobalStyle />
      <ThemeProvider theme={{ toggleTheme,changeTheme }}>
        <ModalContextProvider >
          <ContainerDefault />
          <Modal />
        </ModalContextProvider>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
