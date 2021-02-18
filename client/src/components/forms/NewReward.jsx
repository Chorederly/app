//form used to add a new reward to the database
import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import {RewardContext} from '../../context/RewardContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWindowClose} from '@fortawesome/free-solid-svg-icons'
import {TextArea, Radio, Button, Row, Input, SubHeader, Select, Header, Option, Label, Close, FormWrapper} from './elementsForForms'


function NewRewardForm(props) {

  //standard controlled component form-handling
  const initialState = {title: "", details: "", pointCost: 0,  needsAproval: false}
  const [state,
    setState] = useState(initialState)
const {rewards, addReward} = useContext(RewardContext)

  const handleChange = (e) => {
    const {name, value, type} = e.target
    if (type === "checkbox") {
      setState(prevstate => ({
        [name]: !prevstate[name]
      }))
    } else {
      setState(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }
  //When form is submitted we make a new
  const handleSubmit = (e) => {
    e.preventDefault()
    addReward(state)
    props.makeToast("Reward added!")
    setState(initialState)
    // axios
    //   .post("/rewards", state)
    //   .then(resp => {
    //     console.log("reward added")
    //   })
    //   .catch(err => console.log(err))
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Row>
        <Header>
          Add New Reward
        </Header>
      </Row>
      <Label htmlfor="title">Title:
      </Label><Input id="title" name="title" value={state.title} onChange={handleChange}/>
      <Label htmlFor="pointCost">Points</Label>
      <Input
        min="0"
        id="pointvalue"
        type="number"
        name="pointCost"
        value={state.pointCost}
        onChange={handleChange}/>
      <Label htmlFor="details">Description</Label>
      <TextArea
        id="details"
        name="details"
        value={state.details}
        onChange={handleChange}
        rows="3"/>
      <Label htmlFor="needsAproval">Checkoff</Label>
      <Input
        type="checkbox"
        name="needsAproval"
        id="needsAproval"
        checked={state.needsAproval}
        onChange={handleChange}/>
      <Button type="submit">Add</Button>
      <Close icon={faWindowClose} onClick={(e)=>{props.callback("reward")}}/>
    </FormWrapper>
  )
}

export default NewRewardForm
