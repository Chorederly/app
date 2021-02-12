import React, {useContext, useState} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {useHistory} from 'react-router-dom'
import {UserContext} from '../context/UserContext'
import {ChoreContext} from '../context/ChoreContext'
import Keypad from '../components/Keypad'
import NewUserForm from './forms/NewUser'

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50%;
    
`
const Header = styled.h1 `
    text-align: center;
    color: ${props=>props.theme.dark};
    font-size: 2rem;
    //text-shadow: 0 0 5px ${props=>props.theme.dark};
    margin: 35px 0;
    font-weight: 600;
`
const Tagline = styled.h5 `
    text-align: center;
`
const Paragraph = styled.p `
    padding: 0 20px;
`
const List = styled.ul ``
const Item = styled.li ``
const Label = styled.label ``
const Input = styled.input ``
const Button = styled.button ``

function Intro(props) {
  const {addUser} = useContext(UserContext)
  const [state,
    setState] = useState({name: "", pin: "", adult: true})
  const history = useHistory()
  const handleChange = (e) => {
    const {name,
      value} = e.target
    setState(prev=>({
        ...prev,
        [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addUser(state)
  }
  const callback = ()=>{
    history.push("/settings")
  }

  return (
    <Wrapper>
      <Header>Welcome</Header>
      <Paragraph>It looks like this is your first visit! Let's get started by making
        you a profile. The first profile added to the household must be an adult, and by default will have the ability to:</Paragraph>
      <List>
        <Item>Add new people to the household,</Item>
        <Item>Add or modify chores, and</Item>
        <Item>Add or modify rewards on the Star Menu</Item>
      </List>
      <Paragraph>Please enter your name and a 4-digit PIN. You will then be taken to the setup page where you can add family members, chores, and rewards.</Paragraph>
        <NewUserForm adult={true}/>
    </Wrapper>
  )
}
{/* <Label>Name:
  <Input name="name" value={state.name} onChange={handleChange}/>
</Label>
<Label htmlFor="pin">PIN:
  <Input name="pin" value={state.pin} onChange={handleChange}/>
</Label>
  <Button onClick={handleSubmit}>Done</Button> */}
export default Intro
