import React, {useContext, useState} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {UserContextProvider} from '../context/UserContext'
import {ChoreContextProvider} from '../context/ChoreContext'

const Wrapper = styled.div`
    
`
const Header = styled.h1`
    text-align: center;
`
const SubHeader = styled.h2`

`
const Tagline = styled.h5`
`
const Paragraph = styled.p`

`
const List = styled.ul``
const Item =styled.li``
function Intro(props){

    return (
        <Wrapper>
            <SubHeader>Welcome to</SubHeader>
            <SubHeader>Chorederly</SubHeader>
            <Tagline>Get Your Chores in Order</Tagline>
            <Paragraph>It looks like this is your first visit! Let's get started by making you a profile. The first profile added to the household must be an adult, and by default will have the ability to</Paragraph>
            <List>
                <Item>Add new people to the household,</Item>
                <Item>Add or modify chores, and</Item>
                <Item>Add or modify rewards on the Star Menu</Item>
            </List>

        </Wrapper>
    )
}
export default Intro