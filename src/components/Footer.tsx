import React from "react";
import styled from "styled-components"
import company_logo from "../assets/rd-small.png";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;  
  align-items: center;
  max-width:1200px;
`

const Logo = styled.img`
  height: auto;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Logo src={company_logo} alt="Raia Drogasil Logo" />
    </StyledFooter>
  );
};

export default Footer;
