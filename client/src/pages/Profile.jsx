import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import {UserContext} from '../context/UserContext'
import ChoreGroup from '../components/groups/Chores'
import UserGroup from '../components/groups/Users'
import UsersChoresGroup from '../components/groups/UsersChores'
import Intro from '../components/Intro'
import Toast from '../components/Toast'

const ProfileWrapper = styled.div `
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        //overflow-y: hidden;
        `
const Row = styled.div `
                height: 1rem;
        `
function Profile(props) {
  const {users} = useContext(UserContext)
  return (
    <ProfileWrapper>
      {users.current === null
        ? <UserGroup makeToast={props.makeToast} />
        : <> <UsersChoresGroup makeToast={props.makeToast}/> < ChoreGroup makeToast={props.makeToast}/> </>
}

    </ProfileWrapper>
  )
}

export default Profile
