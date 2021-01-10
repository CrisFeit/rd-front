import React ,{memo} from "react";
import styled from "styled-components"
import company_logo from "../assets/rd.png";
import { purple,white ,typeScale } from '../styles';

const StyledHeader = styled.header`
  grid-column: 1/9;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  box-sizing:border-box;
  padding: 0;
  border: none;

  @media(min-width: 768px){
    width: 90%;
    padding: 4% 0;
    flex-direction: row;
    border-bottom:1px solid #e0e0e0;
  }
`

const Logo = styled.img`
  height: auto;
  padding: 5% 0;
  box-sizing: border-box;
`
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background: ${purple};
  width:100%;

  @media(min-width: 768px){
  justify-content: flex-end;
  width:50%;
  background :transparent;

  }
`
const NavList = styled.ul`
  display: flex;
  justify-content:space-between;
  padding: .5em 0;
  width: 100%;
  flex-direction: column;
  align-items: center;
    @media(min-width: 768px){
     flex-direction: row;  
    }

`

const NavListItem = styled.li`
  width: 100%;
  display: flex;
  justify-content:center;
`

const NavLink = styled.a`
  font-size: ${typeScale.navMenu};
  padding: 2% 0;
  color: ${white};
  text-align: center;
  text-decoration:none;
  @media(min-width: 768px){
      color: ${({ theme }) => theme.textPrimaryColor};
      background :transparent;
      justify-content:space-between;
    }
`

const tecs = ['html5', 'css3', 'javascript', 'react', 'redux']

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={company_logo} alt="Raia Drogasil Logo" />
      <Nav>
        <NavList >
          {tecs.map(tec => (
            <NavListItem>
              <NavLink href="#" key={tec}>
                {tec.toUpperCase()}
              </NavLink>
            </NavListItem>
          ))}
        </NavList >
      </Nav>
    </StyledHeader>
  );
};

export default  memo(Header);
