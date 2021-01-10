import styled from 'styled-components';
import { typeScale, red, yellow, purple, dark } from '../styles';
import ImageDesktop from '../assets/desktop.png'
import ImageTablet from '../assets/tablet.png'
import ImageMobile from '../assets/mobile.png'

const CardsContainer = styled.div`
  width:100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
`
const StyledCard = styled.div`
    width: 25%;
    min-width: 200px;
    height:auto;
    padding: 5%;
    display:block;
    text-align:center;
    font-size: ${typeScale.paragraph};
    color: ${({ theme }) => theme.textColor};
    background-color:${({ color }) => color};
`

const CardImage = styled.img`
    display: block;
`
const CardText = styled.div`
    padding: 5%;
    width: 100%;
    text-align: left;
    background-color: ${({ theme }) => theme.textFieldBackground};
    
`
interface Card {
    image: string | BinaryType
    color: string,
    type: string,
    text: string,
}

const accordion: Card = {
    image: ImageDesktop,
    color: `${red}`,
    type: 'accordion',
    text: 'lorem'
    // text: "Quando pressionado o botão Leia mais... o restante da informação deverá aparecer em scroll down. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper at enim eget suscipit. Sed congue nisi ac purus placerat maximus sit amet molestie neque. Suspendisse imperdiet velit sit amet erat vestibulum varius. Pellentesque rhoncus pretium neque, volutpat molestie nibh hendrerit sit amet. Vestibulum id justo a enim maximus fermentum eget nec libero. Morbi tempus, lacus in molestie posuere, justo metus accumsan sapien, vitae tincidunt purus neque quis dolor. Sed hendrerit arcu a diam porttitor sagittis. Sed faucibus ligula in lorem aliquet, at condimentum est gravida. Nullam tempor lacinia metus, id mattis lectus posuere ut. Vivamus vel nisi nec leo fermentum mollis. In fringilla eget mauris ut porttitor."
}
const modal: Card = {
    image: ImageTablet,
    color: `${yellow}`,
    type: 'modal',
    text: "Quando pressionado o botão Leia mais.. informação deverá aparecer completa em um popup na tela."
}
const toggle: Card = {
    image: ImageMobile,
    color: `${purple}`,
    type: 'toggle',
    text: "Quando pressionado o botão alterar tema... modifique o tema do site para black friday a seu gosto."
}

const arrayOfCards: Array<Card> = [
    accordion,
    modal,
    toggle,
]

function Cards() {
    return (
        <CardsContainer>
            {
                arrayOfCards.map((card: Card) => (
                    <StyledCard color={card.color}>
                        <CardImage src={card.image} />
                        <CardText>
                            {card.text}
                        </CardText>
                    </StyledCard>
                ))
            }


        </CardsContainer>
    )
}

export default Cards
