import React, {useContext, useEffect, useState} from 'react'
import styled, {withTheme} from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Wrapper = styled.div `
display: flex;
flex-wrap: wrap;
flex-direction: row;
padding: 0px 0px ;
margin: 0;
width: 100vw;
height: 100%;
`
const Header = styled.h1 `
//background-color: ${props=>props.theme.secondary_highlight};
  border-bottom: thick solid ${props => props.theme.dark};
  color: ${props => props.theme.dark};
  width: 100%;
  text-align: center;
  grid-column: ${props=>props.columns ? props.columns : null};
`
const SubHeader = styled.h2`
  color: ${props => props.theme.dark};
  font-size: 1.2rem;
  grid-column: ${props=>props.columns ? props.columns : null};
`
const Row = styled.div `
display: flex;
place-content: center;
margin: 10px 0;
`
const EditButton = styled(FontAwesomeIcon)`
  color: ${props=>props.theme.colors.red};
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  text-shadow: 2px 2px 5px #000;
  transition: .2s ease all;
  cursor: pointer;
  &:hover{
    color: ${props=>props.theme.colors.red_light};
  }
`
const AddButton = styled(FontAwesomeIcon)`
color: ${props=>props.theme.colors.blue};
  font-size: 24px;
  //text-shadow: 2px 2px 5px #000;
  filter: drop-shadow(1px 1px 1px #000);
  transition: .2s linear all;
  cursor: pointer;
  &:hover{
    color: ${props=>props.theme.colors.blue_light};
  filter: drop-shadow(1px 1px 3px #000);
  }
`
const CardWrapper = styled.div `
    display: grid;
 grid-template-columns: 1fr 2fr 1fr;
 align-items: center;
    //flex-direction:  column;
    border-radius: 5px;
    width: auto;
    height: auto;
    padding: 20px;
    margin: 10px;
    background-color: ${props => props.theme.light_50};
    color: ${props => props.theme.colors.dark};
    position: relative;
    transition: 400ms all ease;
    backdrop-filter: blur(2px);
    box-shadow: 0 2px 2px rgba(35, 35, 35, .5);
    &:hover{
      box-shadow: 0 2px 5px 4px rgba(35, 35, 35, .5);
    backdrop-filter: blur(4px);
    }
    
`
const Modal = styled.div`
  width: auto;
  height: max-content;
  position: absolute;
  display: ${props=>props.show ? "flex" : "none"};
  //background-color: ${props=>props.theme.dark_75};
  color: ${props=>props.theme.light};
  margin: auto;
  padding: 15px;
  overflow-x: hidden;
  top: 0; left: 0; bottom: 0; right: 0;
`
const Paragraph = styled.p `
display: block;
color: ${props => props.theme.dark};
font-size: 1rem;
grid-column: ${props=>props.columns ? props.columns : null};
`
export {Row, Header, Wrapper, AddButton, EditButton, Modal, CardWrapper, Paragraph, SubHeader}