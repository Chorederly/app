import React, {useContext, useState, useRef} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {faCheckCircle, faBan} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Wrapper = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    width: 80%;
    @media (min-width: 450px) {
        width: 350px;
    }
    background-color: ${props => props.theme.dark_trans};
    position: absolute;
    margin: auto;
    height: 60%;
    top: 15%;
    padding: 20px 10px;
    transition: 1s all ease;
    grid-gap: 8px
    
    `
const Key = styled.button `
    display: grid;
    place-content: center;    
    background-color: ${props => props.theme.colors.grey_medium};
    grid-column: ${props => props.column};
    grid-row: ${props => props.row};
    outline-color: ${props => props.theme.highlight};
    :hover{
        cursor: pointer;
        background-color: ${props => props.theme.colors.grey_dark};
    }
    //flex: 1 auto auto;
    `
const Digit = styled.h1 `
    font-size: 2rem;
    color: ${props => props.theme.dark};
    `

const Screen = styled.div `
    grid-row: 1/2;
    grid-column: 1/4;
    border-radius: 5px;
    background-color: ${props => props.theme.dark};
    box-shadow: 
        inset 0px 0px 5px 5px ${props => props.theme.dark},
        inset 2px 2px 1px ${props => props.theme.dark},
        inset 5px 5px 12px ${props => props.theme.light}; 
    display: flex;
    align-items: center;
    justify-content: center;
`
const Numbers = styled.h1 `
    text-align: center;
    font-size: 2rem;
    line-height: 2rem;
    color: ${props => props.theme.light};
`
const Icon = styled(FontAwesomeIcon)`
        color: ${props => props.color};
        font-size: 2rem;
        margin: 20px 0;
    `
    
function Keypad(props) {
  const screenRef = useRef(null)
  const [pin,
    setPin] = useState("")
  const handleClick = (e) => {
    if (pin.length < 4) {
      let id = e.target.id
        ? e.target.id
        : e.target.parentElement.id
      console.log(id)
      setPin(prev => prev += id)
    }
    //screenRef.current.textContent = "*".repeat(pin.length)
  }
  const reset = (e) => {
    setPin("")
    //screenRef.current.textContent = "*".repeat(pin.length)
  }
  const enter = (e)=>{
      console.log(e)
  }

  return (
    <Wrapper>
      <Screen>
        <Numbers>{pin}</Numbers>
      </Screen>
      <Key id="1" colum="1/2" row="2/3" onClick={handleClick}>
        <Digit>1</Digit>
      </Key>
      <Key id="2" colum="2/3" row="2/3" onClick={handleClick}>
        <Digit>2</Digit>
      </Key>
      <Key id="3" colum="3/4" row="2/3" onClick={handleClick}>
        <Digit>3</Digit>
      </Key>
      <Key id="4" colum="1/2" row="3/4" onClick={handleClick}>
        <Digit>4</Digit>
      </Key>
      <Key id="5" colum="2/3" row="3/4" onClick={handleClick}>
        <Digit>5</Digit>
      </Key>
      <Key id="6" colum="3/4" row="3/4" onClick={handleClick}>
        <Digit>6</Digit>
      </Key>
      <Key id="7" colum="1/2" row="4/5" onClick={handleClick}>
        <Digit>7</Digit>
      </Key>
      <Key id="8" colum="2/3" row="4/5" onClick={handleClick}>
        <Digit>8</Digit>
      </Key>
      <Key id="9" colum="3/4" row="4/5" onClick={handleClick}>
        <Digit>9</Digit>
      </Key>
      <Key colum="1/2" row="5/6" onClick={reset}><Icon color="red" icon={faBan}/></Key>
      <Key id="0" colum="2/3" row="5/6" onClick={handleClick}>
        <Digit>0</Digit>
      </Key>
      <Key colum="3/4" row="5/6" onClick={enter}><Icon color="green" icon={faCheckCircle}/></Key>
    </Wrapper>
  )
}

export default Keypad