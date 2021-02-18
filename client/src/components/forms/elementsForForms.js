import styled, {keyframes} from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

        const Enter = keyframes`
                0% {right: -400px;}
                100%{right: 0px;}
        `
const FormWrapper = styled.form `
        background-color: ${props => props.theme.dark_50};
        padding: 0 15px;
        display: grid;
        grid-template-columns: 1fr 3fr;
        //box-shadow: 2px 2px 2px 2px rgba(35, 35, 35, .5);
        place-content: center;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(5px);
        width: 100%;
        position: relative;
        right: 0;
        animation: ${Enter} 1s ease-out;
        transition: 400s position ease-out;
        `

const Close = styled(FontAwesomeIcon)`
        color: ${props => props.theme.colors.red};
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 24px;
        text-shadow: 2px 2px 5px #000;
        transition: .2s ease all;
        filter: drop-shadow(0 0 1px #000);
        cursor: pointer;
        &:hover{
          color: ${props => props.theme.colors.red_light};
        }
      `
const Label = styled.label `
        padding: 0 15px;
        grid-column: ${props => props.column};
        font-size: 1rem;
        line-height: 1rem;
        font-weight: bold;
        text-align: right;
        color: ${props => props.theme.highlight};
        text-shadow: 0 0 2px black;
        `
const Option = styled.option `
        margin: 0 15px;
        //grid-column: 2/3;
        font-size: 1rem;
        line-height: 1rem;
        background-color: ${props => props.theme.dark};
    color:  ${props => props.theme.dark};
        `
const Header = styled.h2 `
    grid-column: ${props =>  props.column};
    grid-row: 1/2;
    color: ${props => props.theme.highlight};
    text-align: center;
    text-shadow: 0 0 2px black;
    //font-size: 1rem;
    //line-height: 1.2rem;
    `
const Select = styled.select `
   background-color: ${props => props.theme.dark};
    color:  ${props => props.theme.light};
    outline-color: ${props => props.theme.highlight};
    margin: 0 5px;
    padding: 3px;
    grid-column: 2/3;
    
    
    `
const SubHeader = styled.h3 `
    grid-column: ${props => props.column};
    grid-row: ${props => props.row};
    `
const Input = styled.input `
    padding: 3px;
    outline-color: ${props => props.theme.highlight};
    color: ${props => props.theme.highlight};
    background-color: ${props => props.theme.dark};
    margin:5px;
    padding: 5px;
    grid-column: ${props => props.column};
    font-size: 1rem;
    line-height: 1.2rem;
    `
const Row = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    grid-column: 1/3; 
    grid-row: ${props => props.row};
    `
const Button = styled.button `
    padding: 3px 8px;
    font-size: 1rem;
    background-color: ${props => props.theme.highlight};
    color:  ${props => props.theme.dark};
    grid-column: 2/3;
    font-weight: 500;
    margin:5px;
    outline-color: ${props => props.theme.highlight};
    width: max-content;
    `
const Radio = styled.input `
   margin: 0 10px;
   `
const TextArea = styled.textarea `
    grid-column: 2/3;
    margin: 10px 5px;
    padding: 5px;
    box-sizing: border-box;
    font-size: 1rem;
    line-height: 1.2rem;
    background-color: ${props => props.theme.dark};
    color:  ${props => props.theme.highlight};
    outline-color: ${props => props.theme.highlight};
    resize: vertical;
    box-shadow: inset 2px 2px black;

    `

export {TextArea, Radio, Button, Row, Input, SubHeader, Select, Header, Option, Label, Close, FormWrapper}
