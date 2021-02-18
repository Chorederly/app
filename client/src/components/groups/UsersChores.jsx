import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'
import {UserContext} from '../../context/UserContext'
import {ChoreContext} from '../../context/ChoreContext'
import ChoreCard from '../cards/Chore'
import {Row, Header, Wrapper, AddButton, EditButton, Modal, CardWrapper, Paragraph} from './elementsForGroups'

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
        ? usersChores.map(chore =><ChoreCard makeToast={props.makeToast} key={chore._id} {...chore} />)
        : <Paragraph>{`${users.current.userName} has no current chores assigned.`}</Paragraph>}
    </Wrapper>
  )
}

export default UserChoresGroup
