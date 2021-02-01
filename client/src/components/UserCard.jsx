import React, {useContext, useState, useEffect} from 'react'
import styled, {withTheme} from 'styled-components'
import { ChoreContext } from '../context/ChoreContext'
import {UserContext} from '../context/UserContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserMinus} from '@fortawesome/free-solid-svg-icons'

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
    background-color: ${props=>props.theme.light};
    color: ${props=>props.theme.secondary};
   // box-shadow: 3px 3px 3px${props=>props.theme.colors.black};
    border: thin solid ${props=>props.theme.dark};
    cursor: pointer;
    
`
const Header = styled.h2 `
color: ${props=>props.theme.dark};
text-transform: capitalize;

`
const List = styled.ul`
list-style: none;
display: inline-flex;


`
const Paragraph = styled.p `
text-transform: capitalize;
font-size: 1rem;
color: ${props=>props.theme.dark};

`
const Button = styled(FontAwesomeIcon)`
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

const UserCard = props => {
    const {users, signIn} = useContext(UserContext)
    const {chores} = useContext(ChoreContext)
    const [usersChores, setUsersChores] = useState([])
    useEffect(() => {
      const filtered = chores.filter(chore=>chore.user === props._id).map(chore=><li>{chore.name}</li>)
      setUsersChores(filtered)
    }, [chores])
    const handleClick=(e)=>{
        e.preventDefault()
        signIn(props._id)
    
    }
  return (
    <CardWrapper onClick={handleClick}>
      <Header >{props.userName}</Header>
      <Paragraph>{props.chores.map((chore, indx)=>{
          return (  
          <span>{`${indx === 0 ? " " : ", "} ${chore.name}`}</span>
        )})}
        </Paragraph>
      <Paragraph>Points: {props.points}</Paragraph>
      <Button icon={faUserMinus} onClick={() => props.deleteUser()}>Delete User</Button>
    </CardWrapper>

  )
}

export default UserCard