import React from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeContainer = styled.div`
  background-color: ${ ({ theme })=> theme.bodyBackground  };
  margin: auto;
  max-width:1200px;

`

const HomeMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${ ({ theme })=> theme.textColor };
  @media (min-width: 768px) {
        flex-direction: row;
    }
`

const Home = () => {
  return (
      <HomeContainer>
          <Header />
            <HomeMain>
              <div>
                Olá Fulano
              </div>
            </HomeMain>
        <Footer />
      </HomeContainer>
  );
};

export default Home