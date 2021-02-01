import React, {useContext, useEffect, useState} from 'react'
import styled, {withTheme} from 'styled-components'
import {UserContext} from '../context/UserContext'
import {ChoreContext} from '../context/ChoreContext'
import UserCard from './Card_User'

const Wrapper = styled.div `
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr auto;
flex-direction: row;
flex-wrap: werap;
width: 100%;
`
const Header = styled.h1`
text-align: center;
grid-column: 1/3;
width: 100%;
color: ${props=>props.theme.dark};
justify-content: center;
align-items: center;
`
const UserGroup = props => {
  const {users} = useContext(UserContext)
  const {chores} = useContext(ChoreContext)
  const userCards = users
    .all
    .map((user) =>< UserCard key={user._id} {...user}
    chores = {chores.filter(chore=>chore.user === user._id)} />)
  return (
    <Wrapper>
        <Header>Who Are You?</Header>
      {userCards}
    </Wrapper>
  )
}

export default UserGroup