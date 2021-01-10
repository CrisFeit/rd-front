import React,{memo} from "react";
import styled from "styled-components"
import RDSmall from "../assets/rd-small.png";
import Drogaraia from "../assets/drogaraia.png";
import Drogasil from "../assets/drogasil.png";
import Farmasil from "../assets/farmasil.png";
import Univers from "../assets/univers.png";
import Bio from "../assets/4bio.png";
import { typeScale } from '../styles';

const StyledFooter = styled.footer`
  grid-column: 1/9;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2% 0;
    @media (min-width: 768px) {
      padding:  0;
      justify-content: space-between;
      flex-direction: row;
      grid-row: 10/11;
    }
`

const Image = styled.img`
  height: auto;
  max-width: 100%;
  flex-shrink: 3;
`
const CopyRight = styled.p`
 font-size: ${typeScale.copyrightText};
 color: ${({ theme }) => theme.textColor};
 flex-shrink: 4;
`
const Brands = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  align-items: center;
  margin: 1em 0;
`
const ImageBrands = styled(Image)`
  margin-right: 0.5em;
`

const Footer = () => {
  return (
    <StyledFooter>
      <CopyRight>
          RD {new Date().getFullYear()}. Todos os direitos reservados
      </CopyRight>
      <Brands>
        <ImageBrands src={Drogaraia} alt="Droga Raia Logo" />
        <ImageBrands src={Drogasil} alt="Drogasil Logo" />
        <ImageBrands src={Farmasil} alt="Farmasil Logo" />
        <ImageBrands src={Univers} alt="Univers Logo" />
        <ImageBrands src={Bio} alt="4Bio Logo" />
      </Brands>
      <Image src={RDSmall} alt="Raia Drogasil Logo" />
    </StyledFooter>
  );
};

export default memo(Footer);
