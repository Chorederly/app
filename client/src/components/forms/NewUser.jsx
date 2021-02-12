// This is the form for adding a new user to the household, accessible via the
// settings page
import React, {useState, useContext} from 'react'
import {UserContext} from '../../context/UserContext'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWindowClose} from '@fortawesome/free-solid-svg-icons'
import {TextArea, Radio, Button, Row, Input, SubHeader, Select, Header, Option, Label, Close, FormWrapper} from './elementsForForms'

function NewUserForm(props) {
  //Form control
  const initialState = {
    userName: "",
    pin: "",
    adult: props.adult || false
  }
  const [state,
    setState] = useState(initialState)

  const handleChange = (e) => {
    const {name, value, type} = e.target
    if (type === "checkbox") {
      setState(prev => ({
        ...prev,
        [name]: !prev[name]
      }))
    } else {
      setState(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }
  //add new user via UserContext triggered by form submit
  const {addUser} = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    addUser(state)
    setState(initialState)
    if (props.callback) {
      props.callback()
    }
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Header column="1/4">Add New User</Header>
      <Label column="1/2" htmlFor="userName">Name</Label>
      <Input

        name="userName"
        id="userName"
        value={state.userName}
        onChange={handleChange}
        column="2/3"/>
        <Label htmlFor="pin" column="1/2">PIN</Label>
        <Input type="text" autocomplete="off" name="pin" id="pin" value={state.pin} onChange={handleChange} maxLength="4"/>
      <Label htmlFor="adult" column="1/2">Adult</Label>
      <Input
        type="checkbox"
        name="adult"
        id="adult"
        checked={state.adult}
        onChange={handleChange}/>
      <Button type="submit">Add</Button>
      <Close icon={faWindowClose} onClick={(e)=>{props.callback("users")}}/>
    </FormWrapper>
  )
}

export default NewUserForm
