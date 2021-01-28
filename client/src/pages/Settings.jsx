import React, {useContext} from 'react'
import styled from 'styled-components'
import {UserContext} from '../context/UserContext'
import Intro from '../components/Intro'
import Controls from '../components/Controls'
function Settings() {
  const {users} = useContext(UserContext)
  const SettingsWrapper = styled.div `
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
    `
  return (
    <SettingsWrapper>
      {users.all.length === 0 ? 
      <Intro/>
    : <Controls/>
    }
    </SettingsWrapper>
  )
}

export default Settings