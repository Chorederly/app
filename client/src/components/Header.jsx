import React, {useContext} from 'react'
import {UserContext} from '../context/UserContext'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUsers} from '@fortawesome/free-solid-svg-icons'

const Banner = styled.div`
width: 100%;
height: 3rem;
display: grid;
place-content: center;
background-color: ${props=>props.theme.dark};
position: fixed;
z-index: 10;
`
const H1 = styled.h1`
color:  ${props=>props.theme.highlight};
text-align: center;
font-size: 2rem;
line-height: 2rem;
`
const UsersButton = styled(FontAwesomeIcon)`
  color: ${props=>props.theme.colors.purple};
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 24px;
  text-shadow: 2px 2px 5px #000;
  transition: .2s ease all;
  cursor: pointer;
  &:hover{
    color: ${props=>props.theme.colors.purple_light};
  }
`
function Header(){
    const {signOut} = useContext(UserContext)
    const history = useHistory()

    return (
        <Banner>
            <H1>Chorderly</H1>
            <UsersButton icon={faUsers} onClick={(e)=>{
                signOut()
                history.push("/")
            }}/>
        </Banner>
    )
}
export default Header