import { useState } from 'react';
import styled from 'styled-components';
import { screen,typeScale,red, yellow, purple, white } from '../styles';
import ImageDesktop from '../assets/desktop.png'
import ImageTablet from '../assets/tablet.png'
import ImageMobile from '../assets/mobile.png'

// ----------------------------------------------Style-----------------------------------------------
const CardsContainer = styled.div`
  width:100%;
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  @media (min-width: ${screen.desktop}) {
      align-items: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
`
const StyledCard = styled.div`
    width: 30%;
    min-width: 200px;
    height:auto;
    display:block;
    line-height: 1.3;
    font-size: ${typeScale.paragraph};
    background-color: ${({ theme }) => theme.textFieldBackground};
    
`
const CardScreen = styled.div`
    padding: 10% 5%;
    text-align:center;
    background-color:${({ color }) => color};
` 
const CardTitle = styled.h3`
    margin-top: 10%;
    
    font-size: ${typeScale.listItem};
    color: ${white};
` 
const CardImage = styled.img`
    display: block;
    margin: auto;
`

const CardText = styled.div`
    width: 100%;
    overflow-y: ${props => props?.defaultValue};
    overflow-x: hidden;
    min-height: 120px;
    max-height: 120px;
    padding: 5%;
    text-align: left;
    color: ${({ theme }) => theme.textColor};
`

const CardButtonContainer = styled.div`
    width:100%;
    padding:5%;
    display:flex;
`

const CardButton = styled.button`
    width: auto;
    padding: .6em 1em;
    margin-left: auto;
    border:none;
    text-align: center;
    color: ${white};
    font-size: ${typeScale.paragraph};
    outline: ${({ color }) => color};
    background-color:${({ color }) => color};
    cursor: pointer;
`
// ----------------------------------------------Style-----------------------------------------------

// ---------------------------------------------Instance---------------------------------------------

interface Card {
    image: string | BinaryType
    title: string,
    color: string,
    type: string,
    textButton: string,
    text: string,
 
}

const arrayOfCards: Array<Card> = [
    {   
        title: "desktop",
        image: ImageDesktop,
        color: `${red}`,
        type: 'accordion',
       
        textButton: 'Leia mais...',
        text: "Quando pressionado o botão Leia mais... o restante da informação deverá aparecer em scroll down. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper at enim eget suscipit. Sed congue nisi ac purus placerat maximus sit amet molestie neque. Suspendisse imperdiet velit sit amet erat vestibulum varius. Pellentesque rhoncus pretium neque, volutpat molestie nibh hendrerit sit amet. Vestibulum id justo a enim maximus fermentum eget nec libero. Morbi tempus, lacus in molestie posuere, justo metus accumsan sapien, vitae tincidunt purus neque quis dolor. Sed hendrerit arcu a diam porttitor sagittis. Sed faucibus ligula in lorem aliquet, at condimentum est gravida. Nullam tempor lacinia metus, id mattis lectus posuere ut. Vivamus vel nisi nec leo fermentum mollis. In fringilla eget mauris ut porttitor."
    },
    {
        title: "tablet",
        image: ImageTablet,
        color: `${yellow}`,
        type: 'modal',
      
        textButton: 'Leia mais...',
        text: "Quando pressionado o botão Leia mais.. informação deverá aparecer completa em um popup na tela.",
       
    },
    {
        title: "mobile",
        image: ImageMobile,
        color: `${purple}`,
        type: 'toggle',
      
        textButton: 'Alterar tema...',
        text: "Quando pressionado o botão alterar tema... modifique o tema do site para black friday a seu gosto."
    },
]
// --------------------------------------------Instance--------------------------------------------


const Cards = ()=>{

    const [scrollBar, setscrollBar] = useState(false)

    return (
        <CardsContainer>
            {
                arrayOfCards.map((card: Card) => (
                    <StyledCard >
                        <CardScreen color={card.color}>
                            <CardImage src={card.image} />
                            <CardTitle>
                                Site Responsivo <br />{card.title.toUpperCase()}
                            </CardTitle>
                        </CardScreen>
                        <CardText defaultValue={card?.type == 'accordion' ? scrollBar ? 'auto' : 'hidden': 'hidden'}>
                            {card.text}
                        </CardText>
                        <CardButtonContainer>
                            <CardButton color={card.color} onClick={()=> setscrollBar(!scrollBar)}>
                                {card.textButton}
                            </CardButton>
                        </CardButtonContainer>
                    </StyledCard>
                ))
            }
        </CardsContainer>
    )
}

export default Cards
