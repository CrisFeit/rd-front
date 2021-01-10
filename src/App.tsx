import React , { useState } from "react";
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global/GlobalStyle';
import  { defaultTheme,blackFridayTheme }  from './styles';


import ContainerDefault from "./containers/ContainerDefault";

function App() {

  const [useBlackFridayTheme, setUseBlackFridayTheme] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={useBlackFridayTheme ? blackFridayTheme :  defaultTheme}>
        <GlobalStyle />
        <ContainerDefault />
    </ThemeProvider>
  );
}

export default App;
