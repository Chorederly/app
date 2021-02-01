import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'
import {UserContext} from '../context/UserContext'
import {ChoreContext} from '../context/ChoreContext'
import ChoreCard from './Card_Chore'

const Wrapper = styled.div `
display: flex;
flex-direction: column;
padding: 10px 0px ;
margin: 0 auto;
width: 80vw;
`
const Header = styled.h1 `
//background-color: ${props => props.theme.dark_25};
  color: ${props => props.theme.dark};
  width: 100%;
  text-align: center;
  border-bottom: thick solid ${props => props.theme.dark};
`
const Row = styled.div `

display: flex;
place-content: center;
`
const Paragraph = styled.p `
display: block;
color: ${props => props.theme.light};
`
const UserChoresGroup = (props) => {
  const {users} = useContext(UserContext)
  const {chores} = useContext(ChoreContext)

  let usersChores = chores.filter((chore) => chore.user === users.current._id)
  return (
    <Wrapper>
      <Header>
        {users.current.userName}'s Chores
      </Header>
      {usersChores.length
        ? usersChores.map(
        chore =>< ChoreCard key = {
          chore._id
        }
        {
          ...chore
        } />)
        : <Paragraph>{`${users.current.userName} has no current chores assigned.`}</Paragraph>}
        
    </Wrapper>
  )
}

export default UserChoresGroup
