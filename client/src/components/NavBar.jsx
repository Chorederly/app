import React, {useContext} from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {UserContext} from '../context/UserContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUsers, faClipboard, faUserCog, faSignInAlt, faSignOutAlt, faStar} from '@fortawesome/free-solid-svg-icons'

const Icon = styled(FontAwesomeIcon)`

`
const Header = styled.h1 `
display: inline;
align-self: flex-start;
color: ${props => props.theme.highlight};
width: 100%;
margin: 0 20px;
font-size: 2rem;
`
const Nav = styled.nav `
    width: 100%;
    //: absolute;
    height: 3rem;
    display: flex;
    justify-content: flex-end;
    padding: 0;
    align-items: center;
    background-color: ${props => props.theme.dark};
    position: fixed;
    bottom: 0;
    overflow-y: hidden;
    `
const StyledNavLink = styled(NavLink)`
      padding: 0 35px;
      margin: 0;
      font-size: 1.5rem;
      line-height: 1.5rem;
      //place-content: center;
      display:inline-flex;
      justify-content: center;
    align-items: center;
    height:120%;
    color: ${props => props.theme.highlight};
    transition: all 100ms ease;
    `
function NavBar(props) {
  const users = useContext(UserContext)
  return (
    <Nav>
      <StyledNavLink
        activeStyle={{
        background: "rgb(245, 223, 76)",
        color: "#313133"
      }}
        to="/"
        exact>
        <Icon icon={faClipboard}/></StyledNavLink>

      <StyledNavLink
        activeStyle={{
        background: "#F5DF4C",
        color: "#313133"
      }}
        to="/settings"><Icon icon={faUserCog}/></StyledNavLink>
      <StyledNavLink
        activeStyle={{
        background: "#F5DF4C",
        color: "#313133"
      }}
        to="/rewards"><Icon icon={faStar}/></StyledNavLink>

    </Nav>
  )
}

export default NavBar