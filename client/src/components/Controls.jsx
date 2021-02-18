import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled, {ThemeProvider} from 'styled-components'
import {UserContext} from '../context/UserContext'
import {ChoreContext} from '../context/ChoreContext'
import NewChoreForm from './forms/NewChores'
import NewUserForm from './forms/NewUser'
import NewRewardForm from './forms/NewReward'

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
    width: 100%;

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
const Button = styled.button`
  background-color: ${props=>props.theme.dark};
  color: ${props=>props.theme.highlight};
  font-size: 1.2rem;
  padding: 5px 10px;
  margin: 10px;
`
const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`
const List = styled.ul ``
const Item = styled.li ``
function Controls(props) {
  const [state, setState] = useState({
    chore: true,
    user: false, 
    reward: false
  })
  const [animations, setAnimations] = useState({enter: true, exit:false})
  const toggle = (form) =>{
    setAnimations(prev=>({
      enter: !prev.enter,
      exit: !prev.exit
    }))
    setState(prev=>({
      chore: false,
      user: false,
      reward: false,
      [form]: !prev[form]
    }))
  }

  const history = useHistory()
  const {users} = useContext(UserContext)
  return (
    users.adultLoggedIn
    ? <Wrapper>
      {state.chore ?
        <NewChoreForm enter={animations.enter} exit={animations.exit} makeToast={props.makeToast} callback={toggle}/> : null }
        {state.user ? 
        <NewUserForm makeToast={props.makeToast} callback={toggle}/> : null }
        {state.reward ?
        <NewRewardForm makeToast={props.makeToast} callback={toggle}/> : null }
        <Row>
          {state.chore ? null : <Button onClick={(e)=>toggle("chore")}>Add Chore</Button>}
          {state.user ? null : <Button onClick={(e)=>toggle("user")}>Add User</Button>}
          {state.reward ? null : <Button onClick={(e)=>toggle("reward")}>Add Reward</Button>}
        </Row>
      </Wrapper>
    : null)
}
export default Controls
