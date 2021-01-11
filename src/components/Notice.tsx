import styled from 'styled-components'
import { typeScale,screen } from '../styles'
import Colors from './Colors'


const NoticeContainer = styled.div`
  width:100%;
  margin: 5% auto;
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
    width: 80%;
    margin: 5% auto;
    font-size: ${typeScale.subheading};
    font-weight: 300;
    line-height: 1.5;
    text-align: center;
    color: ${({ theme }) => theme.textColor};

    @media (min-width: ${screen.desktop}) {
        margin: 2% auto;
        width: 60%;
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
           <Colors />
        </NoticeContainer>
    )
}

export default Notice
