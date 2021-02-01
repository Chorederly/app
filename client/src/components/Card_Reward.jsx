
import React, {useContext, useState} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {UserContextProvider} from './context/UserContext'
import {ChoreContextProvider} from './context/ChoreContext'
import { Car } from 'grommet-icons'
const CardWrapper = styled.div `
    display: flex;
    flex-direction: column;
    //border: thick solid ${props => props.theme.primary};
    //box-shadow: inset 2px 2px 2px 0 rgba(255,255,255,.7), 2px 2px 2px 0 rgba(0,0,0,.7);
    border-radius: 10px;
    max-width: max-content;
    height: auto;
    //grid-column: ${props => props.column};
    //sgrid-row: ${props => props.row};
    padding: 20px;
    margin: 20px;
    background-color: ${props => props.theme.light_50};
    color: ${props => props.theme.secondary};
   // box-shadow: 3px 3px 3px${props => props.theme.colors.black};
    border: thick solid ${props => props.theme.dark};
    cursor: pointer;
    
`
const Header = styled.h2 `
    color: ${props => props.theme.dark};
    text-transform: capitalize;

`
const List = styled.ul `
    list-style: none;
    display: inline-flex;
`
const Paragraph = styled.p `
    text-transform: capitalize;
    font-size: 1rem;
    color: ${props => props.theme.dark};
`
function RewardCard(props) {
    const initialState = {
        name: "", 
        details: "", 
        pointCost: 0,
        needsApproval: false
    }
const [state, setState] = useState(initialState)
  return (
      <CardWrapper>
          <Label>Name</Label>
          <Input name="name" value={state.name} onChange={handleChange}>
          </Input>
      </CardWrapper>
  )
}
export default RewardCard