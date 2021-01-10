import styled from 'styled-components';
import { typeScale, colors } from '../styles';

const NoticeContainer = styled.div`
  width:100%;
  margin: 1% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`

const Title = styled.h1`
    width: 90%;
    margin: 0 auto;
    font-weight: 300;
    text-align: center;
    font-size: ${typeScale.heading};
    color: ${({ theme }) => theme.textPrimaryColor};
`
const Strong = styled.strong`
    font-weight: 800;
`
const Message = styled.p`
    width: 60%;
    margin: 1% auto;
    font-size: ${typeScale.subheading};
    font-weight: 300;
    line-height: 1.5;
    text-align: center;
    color: ${({ theme }) => theme.textColor};
`
const ColorsList = styled.ul`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const ColorItem = styled.li`
    margin: 0 5px;
    text-align: center;
    padding: .2em 0;
    font-size: ${typeScale.paragraph};
    &::before{
        content: "";
        display: inline-block;
        vertical-align: middle;
        width:15px;
        height: 15px;
        border-radius: 50%;
        background-color:${({color})=> color};
    }
`

function Notice() {
    return (
        <NoticeContainer>
            <Title>
                Crie este site <Strong>responsivo</Strong> com <Strong>REACT</Strong> utilizando <Strong>styled-componenets</Strong>
            </Title>
            <Message>
                A fonte utilizada é a Open Sans de 300 a 800m exemplo: "Open Sans", Helvetica, sans-serif, arial;
                Já as cores são
            </Message>
            <ColorsList>
                {Object.values(colors).map((color,index) => (
                    <ColorItem key={`color-${index}`} color={color}>
                        {
                             index === Object.entries(colors).length -1 ? `${color}` 
                            :index === Object.entries(colors).length -2 ?` ${color} e`
                            :` ${color}, `
                        }
                    </ColorItem>
                    ))}
            </ColorsList>
        </NoticeContainer>
    )
}

export default Notice
