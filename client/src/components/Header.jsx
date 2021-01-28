import React from 'react'
import styled from 'styled-components'

const Banner = styled.div`
width: 100%;
height: 3rem;
display: grid;
place-content: center;
background-color: ${props=>props.theme.dark};
`
const H1 = styled.h1`
color:  ${props=>props.theme.highlight};
text-align: center;
font-size: 2rem;
line-height: 2rem;
`
function Header(){
    return (
        <Banner>
            <H1>Chorderly</H1>
        </Banner>
    )
}
export default Header