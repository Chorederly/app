//Representation of a chore, both for selecting a chore and as your todo list
import React, {useContext, useState, useRef} from 'react'
import styled, {withTheme} from 'styled-components'
import {UserContext} from '../../context/UserContext'
import {ChoreContext} from '../../context/ChoreContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWindowClose, faStar, faPlusCircle, faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons'
import {CardWrapper, Row, Header, Paragraph, Close, Add, Toggle, Checkbox, SubHeader, Star, PointsContainer, HiddenText} from './elementsForCards'
import '../../animations.css'

const ChoreCard = props => {
  const animationRef = useRef(null)
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
        props.makeToast(`+${props.pointValue} points!`)
        collectPoints(users.current.points + props.pointValue, props.user)
        updateUsers()
      } else {
        collectPoints(users.current.points - props.pointValue, props.user)
        updateUsers()
        props
          .history
          .splice(-1, 1)
          props.makeToast(`-${props.pointValue} points`)
        updateOneChore(props._id, {
          completed: false,
          history: props.history
        })
        updateChores()
      }
    }
  }
  const handleClose = (e) => {
    animationRef.current.style.opacity = "0"
//    animationRef.current.style.animation = null
  //  animationRef.current.style.right = "-200px"
    setTimeout(() => {
      unAssignChore(props._id)
    }, 400);
  }
  return (
    <CardWrapper ref={animationRef}>
      {props.user === null
        ? <Add
            icon={faPlusCircle}
            onClick={(e) => assignChore(props._id, users.current._id)}/>
        : <Close icon={faWindowClose} onClick={handleClose}/>}
      
        <Checkbox
          type="checkbox"
          onChange={handleCheckbox}
          checked={props.completed}
          name="completed"/>
        <Header column="2/4" completed={props.completed}>{props.name}</Header>
        <Paragraph column="2/3" completed={props.completed}>{props.frequency}</Paragraph>
        <PointsContainer>
        <Paragraph column="4/5">{props.pointValue}</Paragraph><Star icon={faStar}/>
        </PointsContainer>

      <Row>
        {expanded
          ? <HiddenText>{props.details}</HiddenText>
          : null}
      </Row>
      {props.details && props.details.length > 0
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
