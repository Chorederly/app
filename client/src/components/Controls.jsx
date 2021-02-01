import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled, {ThemeProvider} from 'styled-components'
import {UserContext} from '../context/UserContext'
import {ChoreContext} from '../context/ChoreContext'
import NewChoreForm from './Form_NewChores'
import NewUserForm from './Form_NewUser'

const Wrapper = styled.div `
    
`
const Header = styled.h1 `
    text-align: center;
`
const SubHeader = styled.h2 `

`
const Tagline = styled.h5 `
`
const Paragraph = styled.p `

`
const List = styled.ul ``
const Item = styled.li ``
function Controls(props) {
  const history = useHistory()
  const {users} = useContext(UserContext)
  return (
    users.adultLoggedIn
    ? <Wrapper>
        <NewChoreForm/>
        <NewUserForm/>
      </Wrapper>
    : null)
}
export default Controls