
import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import {UserContextProvider} from './context/UserContext'
import {ChoreContextProvider} from './context/ChoreContext'
import {CardWrapper, Close, Checkbox, Header, SubHeader, Row} from './elementsForCards'

function RewardCard(props) {
    const initialState = {
        name: "", 
        details: "", 
        pointCost: 0,
        needsApproval: false
    }
const [state, setState] = useState(initialState)
  return (
      <CardWrapper>
          <Header>{props.title}</Header>
          
      </CardWrapper>
  )
}
export default RewardCard