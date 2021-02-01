import React, {useContext} from 'react'
import styled from 'styled-components'
import {UserContext} from '../context/UserContext'
import ChoreGroup from '../components/Group_Chores'
import UserGroup from '../components/Group_Users'
import UsersChoresGroup from '../components/Group_UsersChores'
import Intro from '../components/Intro'

const ProfileWrapper = styled.div `
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: hidden;
        `
const Row = styled.div `
                height: 1rem;
        `
function Profile() {
  const {users} = useContext(UserContext)
  return (
    <ProfileWrapper>
      {users.current === null
        ? <UserGroup/>
        : <> <UsersChoresGroup/> < ChoreGroup /> </>
}

    </ProfileWrapper>
  )
}

export default Profile