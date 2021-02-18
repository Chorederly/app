//container for collection of available chores that a user can select
import React, {useContext, useEffect, useState} from 'react'
import styled, {withTheme} from 'styled-components'
import {ChoreContext} from '../../context/ChoreContext'
import ChoreCard from '../cards/Chore'
import {Row, Header, Wrapper} from './elementsForGroups'

//styled components


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
  (chore) =>< ChoreCard makeToast={props.makeToast} key = {
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
