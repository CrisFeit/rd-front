import React from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";

const StyledContainerDafault = styled.div`
  background: ${ ({ theme })=> theme.bodyBackground  };
  margin: auto;
  width:100%;
  &  > * {
      max-width: 1200px;
  }
  display: grid;
  justify-items: center;
  justify-content: center;
  grid-template-columns: repeat(8,1fr);
 
  overflow-x: hidden;

  @media (min-width: 768px) {
    grid-template-rows: repeat(10,10vh);
  }
`

const ContainerDefault = () => {
  return (
      <StyledContainerDafault>
          <Header />
          <Home />
          <Footer />
      </StyledContainerDafault>
  );
};

export default ContainerDefault