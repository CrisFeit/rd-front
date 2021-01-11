import { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { screen, typeScale, red, yellow, purple, white } from '../styles';
import ImageDesktop from '../assets/desktop.png'
import ImageTablet from '../assets/tablet.png'
import ImageMobile from '../assets/mobile.png'
import { ModalContext } from '../context/ModalcontextProvider'

// ----------------------------------------------Style-----------------------------------------------
const CardsContainer = styled.div`
  width:100%;
  margin-bottom: 5%;
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
    margin: 5% auto;
    display:block;
    line-height: 1.4;
    background-color: ${({ theme }) => theme.textFieldBackground};
    @media (min-width: ${screen.desktop}) {
        margin: 0 auto;
    }
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
    height: fit-content;
`

const CardTextContainer = styled.div`
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
    height: 100px;
    height: 100px;
    padding: 5%;
`

const CardText = styled.p`
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
    text-align: left;
    font-size: ${typeScale.paragraph};
    color: ${({ theme }) => theme.textColor};
        
    &.--scroll{
        max-height: 90px;
        overflow-y: auto;
    }
    

    &::-webkit-scrollbar {
        width: 7px;
        height: 5px;
    }
  
    &::-webkit-scrollbar-thumb {
        background: ${({ color }) => color};
    }
  
    &::-webkit-scrollbar-track {
        background:${({ theme }) => theme.textFieldBackground};
    }
  
    &{
        scrollbar-face-color: ${({ color }) => color};
        scrollbar-track-color: ${white};
    }
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




const Cards = () => {

    const { toggleTheme, changeTheme } = useContext(ThemeContext);
    const { setModalData } = useContext(ModalContext);
    const [scrollBar, setscrollBar] = useState(false)

    function cardActive(card: Card) {
        const { type, text } = card
        switch (type) {
            case 'accordion': setscrollBar(!scrollBar)
                break;
            case 'toggle': toggleTheme(!changeTheme)
                break;
            case 'modal': setModalData(text)
                break;
            default:
                break;
        }
    }

    return (
        <CardsContainer>
            {
                arrayOfCards.map((card: Card) => (
                    <StyledCard key={card.title} >
                        <CardScreen color={card.color}>
                            <CardImage src={card.image} alt={card.title} />
                            <CardTitle>
                                Site Responsivo <br />{card.title.toUpperCase()}
                            </CardTitle>
                        </CardScreen>
                        <CardTextContainer>
                            <CardText color={card.color} className={card.type === 'accordion' && scrollBar ? '--scroll' : ''}>
                                {card.text}
                            </CardText>
                        </CardTextContainer>
                        <CardButtonContainer>
                            <CardButton color={card.color} onClick={() => cardActive(card)}>
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
