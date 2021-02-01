//container for collection of available chores that a user can select
import React, {useContext, useEffect, useState} from 'react'
import styled, {withTheme} from 'styled-components'
import {ChoreContext} from '../context/ChoreContext'
import ChoreCard from './Card_Chore'

//styled components
const Wrapper = styled.div `
display: flex;
flex-direction: column;
padding: 10px 0px ;
margin: 0 auto;
width: 80vw;
`
const Header = styled.h1 `
//background-color: ${props=>props.theme.secondary_highlight};
  border-bottom: thick solid ${props => props.theme.dark};
  color: ${props => props.theme.dark};
  width: 100%;
  text-align: center;


`
const Row = styled.div `

display: flex;
place-content: center;
margin: 10px 0;
`

const ChoreGroup = props => {
  //gets list of chores from server via context
  const {chores} = useContext(ChoreContext)
  //filter out the ones that are not currently available 
  let availableChores
  const [available,
    setAvailable] = useState([])
  useEffect(() => {
    availableChores = chores.filter(chore => chore.user === null && chore.completed ===false)
    setAvailable(availableChores)
  }, [chores])
//create ChoreCard component for each available chore, passing in all the chore's properties as props
  const choreCards = available.map(
  (chore) =>< ChoreCard key = {
    chore._id
  }
  {
    ...chore
  } />)
  return (
    <Wrapper>
      <Header>Available Chores</Header>
      {choreCards}
    </Wrapper>
  )
}

export default ChoreGroup