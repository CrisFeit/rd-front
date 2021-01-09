import React , { useState } from "react";
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global/GlobalStyle';
import  { defaultTheme,blackFridayTheme }  from './styles';

import Home from "./pages/Home";

function App() {

  const [useBlackFridayTheme, setUseBlackFridayTheme] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={useBlackFridayTheme ? blackFridayTheme : defaultTheme}>
        <GlobalStyle />
            <Home />
    </ThemeProvider>
  );
}

export default App;
