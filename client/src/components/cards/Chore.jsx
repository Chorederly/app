//Representation of a chore, both for selecting a chore and as your todo list
import React, {useContext, useState} from 'react'
import styled, {withTheme} from 'styled-components'
import {UserContext} from '../../context/UserContext'
import {ChoreContext} from '../../context/ChoreContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWindowClose, faStar, faPlusCircle, faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons'
import {CardWrapper, Row, Header, Paragraph, Close, Add, Toggle, Checkbox, SubHeader, Star, PointsContainer} from './elementsForCards'


const ChoreCard = props => {
  const {users, updateUsers, collectPoints} = useContext(UserContext)
  const {assignChore, unAssignChore, markCompleted, updateChores, updateOneChore} = useContext(ChoreContext)
  const [expanded,
    setExpanded] = useState(false)
  const toggleExpanded = (e) => {
    e.preventDefault()
    setExpanded(prev => !prev)
  }
  const handleCheckbox = (e) => {
    if (props.user !== null) {
      if (props.completed === false) {
        const now = new Date()
        updateOneChore(props._id, {
          completed: true,
          history: [
            ...props.history, {
              user: users.current._id,
              date: now
            }
          ]
        })
        updateChores()
        console.log(users.current.points)
        console.log(props.pointValue)
        collectPoints(users.current.points + props.pointValue, props.user)
        updateUsers()
      } else {
        collectPoints(users.current.points - props.pointValue, props.user)
        updateUsers()
        props
          .history
          .splice(-1, 1)
        console.log(`props.history: ${props.history}`)
        updateOneChore(props._id, {
          completed: false,
          history: props.history
        })
        updateChores()
      }
    }
  }
  return (
    <CardWrapper>
      {props.user === null
        ? <Add
            icon={faPlusCircle}
            onClick={(e) => assignChore(props._id, users.current._id)}/>
        : <Close icon={faWindowClose} onClick={(e) => unAssignChore(props._id)}/>}
      
        <Checkbox
          type="checkbox"
          onChange={handleCheckbox}
          checked={props.completed}
          name="completed"/>
        <Header column="2/4" completed={props.completed}>{props.name}</Header>
        <SubHeader column="2/3" completed={props.completed}>{props.frequency}</SubHeader>
        <PointsContainer>
        <Paragraph column="4/5">{props.pointValue}</Paragraph><Star icon={faStar}/>
        </PointsContainer>
      

      <Row>
        {expanded
          ? <Paragraph>{props.details}</Paragraph>
          : null}
      </Row>
      {props.details.length > 0
        ? <Toggle
            onClick={toggleExpanded}
            icon={expanded
            ? faCaretUp
            : faCaretDown}/>
        : null}
    </CardWrapper>

  )
}

      export default ChoreCard
