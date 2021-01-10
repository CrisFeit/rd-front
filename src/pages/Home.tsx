
import styled from 'styled-components';
import Notice from "../components/Notice";
import Cards from "../components/Cards";

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
    }
`

const Home = () => {
  return (
    <HomeMain role="main">
      <Notice />
      <Cards />
    </HomeMain>

  );
};

export default Home