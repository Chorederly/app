// This is the form for adding a new user to the household, accessible via the
// settings page
import React, {useState, useContext} from 'react'
import {UserContext} from '../context/UserContext'
import styled from 'styled-components'

//styled components / CSS in JS
const FormWrapper = styled.form `
      // background-color: ${props => props.theme.highlight};
        padding: 0 15px;
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        //box-shadow: 2px 2px 2px 2px rgba(35, 35, 35, .5);
        place-content: center;
        justify-content: center;
        align-items: center;
        
        `
const Label = styled.label `
        padding: 0 15px;
        grid-column: ${props => props.column};
        font-size: 1.2rem;
        line-height: 1.2rem;
        grid-row: 2/3;
        color: ${props => props.theme.dark};
        `
const Option = styled.option `
        margin: 0 15px;
        //grid-column: 2/3;
        font-size: 1rem;
        line-height: 1rem;
        background-color: ${props => props.theme.dark};
    color:  ${props => props.theme.dark};
        `
const Header = styled.h1 `
    grid-column: ${props => props.column};
    grid-row: 1/2;
    color: ${props => props.theme.dark};
    text-align: center;
    `
const Select = styled.select `
   background-color: ${props => props.theme.dark};
    color:  ${props => props.theme.light};
    outline-color: ${props => props.theme.highlight};
    margin: 0 5px;
    padding: 3px;
    grid-column: 2/3;
    
    
    `
const Subheader = styled.h3 `
    grid-column: ${props => props.column};
    grid-row: ${props => props.row};
    `
const Input = styled.input `
    padding: 3px;
   grid-row: 2/3;
    outline-color: ${props => props.theme.highlight};
    color: ${props => props.theme.light};
    background-color: ${props => props.theme.dark};
    margin:5px;
    padding: 5px;
    grid-column: ${props => props.column};
    `
const Row = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    grid-column: 1/3; 
    grid-row: ${props => props.row};
    `
const Button = styled.button `
    padding: 3px 8px;
    font-size: 1.2rem;
    background-color: ${props => props.theme.primary_l};
    color:  ${props => props.theme.dark};
    grid-column: 2/3;
    font-weight: 500;
    margin:5px;
    outline-color: ${props => props.theme.light};
    width: max-content;
    `
const Radio = styled.input `
   margin: 0 10px;
   `
const TextArea = styled.textarea `
    grid-column: 2/3;
    margin: 10px 5px;
    padding: 5px;
    box-sizing: border-box;
    font-size: .75rem;
    line-height: 1rem;
    background-color: ${props => props.theme.dark};
    color:  ${props => props.theme.light};
    outline-color: ${props => props.theme.highlight};
    resize: vertical;
    box-shadow: inset 2px 2px black;
    `

function NewUserForm(props) {
  //Form control
  const initialState = {
    userName: "",
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
    setState({userName: "", adult: false})
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
        column="2/3"/><>
      <Label htmlFor="adult">Adult</Label>
      <Input
        type="checkbox"
        name="adult"
        id="adult"
        checked={state.adult}
        onChange={handleChange}/></>
      <Button type="submit">Submit</Button>
    </FormWrapper>
  )
}

export default NewUserForm