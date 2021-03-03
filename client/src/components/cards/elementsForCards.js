import styled, {keyframes} from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Entrance = keyframes`
 0% { left: -400px; }
 100% {left: 400px; position: initial;}
`
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 3fr 2fr;
  align-items: center; 
  //flex-direction:  column;
  border-radius: 5px;
  max-width: 80%;
  min-width: 80%;
  //height: auto;
  min-height: 75px;
  padding: 10px 35px;
  margin: 5px auto;
  background-color: ${props => props.theme.light_50};
  color: ${props => props.theme.colors.dark};
  position: relative;
  transition: 400ms all ease;
  backdrop-filter: blur(2px);
  animation: ${Entrance} 1s ease-in-out forwards;
  transition: 400s all ease-in-out;
  box-shadow: 0 2px 2px rgba(35, 35, 35, .5);
  &:hover{
    box-shadow: 0 2px 5px 4px rgba(35, 35, 35, .5);
  backdrop-filter: blur(4px);
  position: relative;
  justify-content: center; 
    }
  @media only screen and (min-width: 1200px){  
  display: grid;
  grid-template-columns: auto;
  align-items: center; 
  //flex-direction:  column;
  border-radius: 5px;
  max-width: 25%;
  min-width: 25%;
  //height: auto;
  min-height: 25%;
  max-height: 25%;
  padding: 10px 35px;
  margin: auto;
  background-color: ${props => props.theme.light_50};
  color: ${props => props.theme.colors.dark};
  position: relative;
  transition: 400ms all ease;
  backdrop-filter: blur(2px);
  animation: ${Entrance} 1s ease-in-out forwards;
  transition: 400s all ease-in-out;
  box-shadow: 0 2px 2px rgba(35, 35, 35, .5);
  &:hover{
    box-shadow: 0 2px 5px 4px rgba(35, 35, 35, .5);
  backdrop-filter: blur(4px);
  position: relative;
  justify-content: center; 
    }
  
  } 
`
const Area = styled.div`
  grid-column: ${props=>props.row ? props.row : null};
  grid-row: ${props=>props.column ? props.column : null};

`

const Row = styled.div`
display: flex;
justify-content: space-between;
margin: 5px 0;
grid-column:1/5;
`
const Star = styled(FontAwesomeIcon)`
display: inline;
font-size: 20px;
color: ${props=>props.theme.highlight};
filter: drop-shadow(0 0 2px #232323);
margin: 0 5px;
@media only screen and (min-width: 1200px){
  display: inline;
  font-size: 40px;
  color: ${props=>props.theme.highlight};
  filter: drop-shadow(0 0 2px #232323);
  margin: auto;
}
`
const Header = styled.h2 `
color: ${props=>props.theme.dark};
text-transform: capitalize;
font-size: 1.2rem;
grid-column: ${props=>props.column ? props.column : null};
grid-row: ${props=>props.row ? props.row : null};
cursor: pointer;
padding: 0 5px;
text-decoration: ${props => {
    return props.completed
      ? "line-through red"
      : "none"}};
@media only screen and (min-width: 1200px){
  color: ${props=>props.theme.dark};
  text-transform: capitalize;
  font-size: 1.2rem;
  grid-column: ${props=>props.column ? props.column : null};
  grid-row: ${props=>props.row ? props.row : null};
  cursor: pointer;
  padding: 0 5px;
  text-decoration: ${props => {
      return props.completed
        ? "line-through red"
        : "none"}};
}
`
const List = styled.ul`
list-style: none;
display: inline-flex;
`
const expand = keyframes`
  0% {height: 1px;}
  100% {height: 100%;}
`

const Paragraph = styled.p `
text-transform: capitalize;
font-size: .8rem;
color: ${props=>props.theme.dark};
grid-column: ${props=>props.column ? props.column : null};
grid-row: ${props=>props.row ? props.row : null};
`
const HiddenText = styled(Paragraph)`
  animation: ${expand} 3s ease-in-out;
`

const Button = styled(FontAwesomeIcon)`
  color: ${props=>props.theme.colors.yellow};
  position: relative;
  font-size: 24px;
  text-shadow: 2px 2px 5px #000;
  transition: .2s ease all;
  margin: 0 10px;
  grid-column: ${props=>props.column ? props.column : null};
  grid-row: ${props=>props.row ? props.row : null};
  filter: drop-shadow(0 0 1px #000);
  cursor: pointer;
  &:hover{
    color: ${props=>props.theme.colors.yellow_light};
  }
`
const Close = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.red};
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  text-shadow: 2px 2px 5px #000;
  transition: .2s ease all;
  grid-column: ${props=>props.column ? props.column : null};
  grid-row: ${props=>props.row ? props.row : null};
  cursor: pointer;
  filter: drop-shadow(0px 0px 1px #000);
  &:hover{
    color: ${props => props.theme.colors.red_light};
  }
  @media(max-width: 480){
    font-size: 18px;
  }

`
const Add = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: ${props => props.theme.colors.green};
  position: absolute;
  top: 10px;
  right: 10px;
  transition: .2s ease all;
  grid-column: ${props=>props.column ? props.column : null};
  grid-row: ${props=>props.row ? props.row : null};
  cursor: pointer;
  &:hover{
    color: ${props => props.theme.colors.green_light};
  }
`
const Toggle = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: ${props => props.theme.blue};
  grid-column: ${props=>props.column ? props.column : null};
  grid-row: ${props=>props.row ? props.row : null};
`
const Checkbox = styled.input `
  width: 18px;
  height: 18px;
  margin-right: 15px;
  @media (min-width: 480px) {
    width: 24px;
    height: 24px;
  }
  grid-row: 1/4;
  align-self: center;
  grid-column: ${props=>props.column ? props.column : null};
  grid-row: ${props=>props.row ? props.row : null};
  
`
const SubHeader = styled.h3 `
  text-transform: capitalize;
  margin: 0 25px;
  font-size: .8rem;
  grid-column: ${props=>props.column ? props.column : null};
  grid-row: ${props=>props.row ? props.row : null};
  text-decoration: ${props => {
  return props.completed
    ? "line-through red"
    : "none"}};
  @media (min-width: 768px) {
    font-size: .6rem;
    margin: 0 20px;
    }
`
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: space-around;
  background-color: ${props=>props.theme.dark_50};
  padding: 20px;
  grid-column: ${props=>props.column ? props.column : null};
  grid-row: ${props=>props.row ? props.row : null}  ;
`
const PointsContainer = styled.div`
  display: flex;
  //grid-row: ${props=>props.row ? props.row : null};
  //grid-column: ${props=>props.column ? props.column : null};
  justify-content: center;
  align-items: center;
`


export {CardWrapper, Row, Header, List, Paragraph, Button, Close, Add, Toggle, Checkbox, Star, SubHeader, Overlay, PointsContainer, HiddenText}

