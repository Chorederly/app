import React, {useContext, useState, useEffect} from 'react'
import styled, {withTheme} from 'styled-components'
import { ChoreContext } from '../../context/ChoreContext'
import {UserContext} from '../../context/UserContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserTimes, faUserEdit, faStar} from '@fortawesome/free-solid-svg-icons'
import {CardWrapper, Row, Header, List, Paragraph, Button, Overlay, Star, PointsContainer, Close, Add, Toggle, Checkbox, SubHeader} from './elementsForCards'


const UserCard = props => {
    const {users, signIn, deleteUser} = useContext(UserContext)
    const {chores} = useContext(ChoreContext)
    const [usersChores, setUsersChores] = useState([])
    useEffect(() => {
      const filtered = chores.filter(chore=>chore.user === props._id).map(chore=><li key={chore._id}>{chore.name}</li>)
      setUsersChores(filtered)
    }, [chores])
    const handleClick=(e)=>{
        e.preventDefault()
        signIn(props._id)
    }
  return (
    <CardWrapper>
      <Header column="1/2" onClick={handleClick}>{props.userName}</Header>
      <PointsContainer>
        <Paragraph column="3/4">{props.points}</Paragraph><Star icon={faStar}/>
        </PointsContainer>
      <Paragraph column="1/3" onClick={handleClick}>{props.chores.map((chore, indx)=>{
          return (
          <span key={indx}>{`${indx === 0 ? " " : ", "} ${chore.name}`}</span>
        )})}
        </Paragraph>
     {props.editMode ?  <Overlay><Button icon={faUserTimes} onClick={() => deleteUser(props._id)}/>
     <Button icon={faUserEdit}/>
     </Overlay>
     : null}
    
    </CardWrapper>
  )
}

export default UserCard
