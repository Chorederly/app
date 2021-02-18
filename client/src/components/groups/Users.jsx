import React, {useContext, useEffect, useState} from 'react'
import styled, {withTheme} from 'styled-components'
import {UserContext} from '../../context/UserContext'
import {ChoreContext} from '../../context/ChoreContext'
import {RewardContext} from '../../context/RewardContext'
import UserCard from '../cards/User'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserEdit, faUserPlus, faUsers} from '@fortawesome/free-solid-svg-icons'
import NewUserForm from '../forms/NewUser'
import {Row, Header, Wrapper, AddButton, EditButton, Modal, CardWrapper, SubHeader} from './elementsForGroups'
import { Paragraph } from '../cards/elementsForCards'

const UserGroup = props => {
  const [editMode, setEditMode] = useState(false)
  const toggleEditMode = (e)=>{
    setEditMode(mode=>!mode)
  }
  const [addMode, setAddMode] = useState(false)
  const toggleAddMode = (e)=>{
    setAddMode(mode=>!mode)
  }
  const {users} = useContext(UserContext)
  const {chores} = useContext(ChoreContext)
  const {rewards} = useContext(RewardContext)
  const userCards = users
    .all
    .map((user) =>< UserCard makeToast={props.makeToast} key={user._id} {...user} editMode={editMode}
    chores = {chores.filter(chore=>chore.user === user._id)} />)

  return (
    <Wrapper>
      <EditButton icon={faUserEdit} onClick={toggleEditMode}></EditButton>
        <Header>Who Are You?</Header>
      {userCards}
      <CardWrapper>
      <AddButton icon={faUserPlus} onClick={toggleAddMode}></AddButton>
      <SubHeader>New User</SubHeader>
      </CardWrapper>
        <Modal show={addMode}>
        <NewUserForm callback={toggleAddMode}/>
      </Modal>
    </Wrapper>
  )
}

export default UserGroup
