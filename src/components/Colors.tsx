import { memo } from 'react';
import styled from 'styled-components';
import { typeScale, colors } from '../styles';

const ColorsList = styled.ul`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;
`
const ColorItem = styled.li`
    margin: 0 5px;
    text-align: center;
    padding: .2em 0;
    font-size: ${typeScale.listItem};
    display:flex;
    align-items:center;
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

const Colors =()=> {
    return (

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
     
    )
}

export default memo(Colors)
