import React, {useContext, useState} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {UserContextProvider} from './context/UserContext'
import {ChoreContextProvider} from './context/ChoreContext'
import {Row, Header, Wrapper, AddButton, EditButton, Modal, CardWrapper, Paragraph, SubHeader} from './elementsForGroups'
import {RewardSelector} from '../cards/RewardSector'

import { RewardContext } from '../../context/RewardContext'
function RewardMenu(props){
const {rewards} = useContext(RewardContext)
const selectorCards = rewards.map(r=><RewardSelector makeToast={props.makeToast} {...r}/>)
return (
    <Wrapper>
        {cards}
    </Wrapper>
    )
}
export default RewardMenu