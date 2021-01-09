import React from "react";
import styled from "styled-components"
import company_logo from "../assets/rd.png";


const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  height: auto;
`

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={company_logo} alt="Raia Drogasil Logo" />
    </StyledHeader>
  );
};

export default Header;
