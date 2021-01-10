import React from "react";
import styled from 'styled-components';

const HomeMain = styled.main`
  grid-column: 1/9;
 
  width:100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.textColor};
    @media (min-width: 768px) {
      grid-row: 3/10;
      width: 90%;
      flex-direction: row;
    }
`

const Home = () => {
  return (
    <HomeMain>
      <div>
        Olá Fulano
            </div>
    </HomeMain>

  );
};

export default Home