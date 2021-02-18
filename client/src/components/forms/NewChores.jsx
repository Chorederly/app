//form used to add a new chore to the database
import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWindowClose} from '@fortawesome/free-solid-svg-icons'
import {
  TextArea,
  Radio,
  Button,
  Row,
  Input,
  SubHeader,
  Select,
  Header,
  Option,
  Label,
  Close,
  FormWrapper
} from './elementsForForms'

function NewChoreForm(props) {
  const initialState = {
    title: "",
    description: "",
    frequency: "as needed",
    pointValue: 0,
    needsApproval: false
  }

  //standard controlled component form-handling
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
  //When form is submitted we make a new`
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("/chores", state)
      .then(resp => {
        props.makeToast("Chore added!")
        setState(initialState)
        props.callback()
      })
      .catch(err => console.log(err))
  }

  return (
    <FormWrapper enter={props.enter} exit={props.exit} onSubmit={handleSubmit}>

      <Row>
        <Header>
          Add New Chore
        </Header>
      </Row>
      <Label htmlFor="name">Title</Label>
      <Input id="name" name="name" value={state.name} onChange={handleChange}/>
      <Label htmlFor="details">Description</Label>
      <TextArea
        id="details"
        name="details"
        value={state.details}
        onChange={handleChange}
        rows="3"/>
      <Label>Frequency</Label>
      <Select value={state.frequency} onChange={handleChange} name="frequency">
        <Option value="">
          Select One
        </Option>
        <Option value="daily">
          Daily
        </Option>
        <Option value="weekly">
          Weekly
        </Option>
        <Option value="as needed">
          As Needed
        </Option>
      </Select>
      <Label htmlFor="pointvalue">Points</Label>
      <Input
        min="0"
        id="pointvalue"
        type="number"
        name="pointValue"
        value={state.pointValue}
        onChange={handleChange}/>
      <Label htmlFor="needsAproval">Checkoff</Label>
      <Input
        type="checkbox"
        name="needsAproval"
        id="needsAproval"
        checked={state.needsAproval}
        onChange={handleChange}/>
      <Button type="submit">Add</Button>
      <Close
        icon={faWindowClose}
        onClick={(e) => {
        props.callback("chore")
      }}/>
    </FormWrapper>
  )
}

export default NewChoreForm
