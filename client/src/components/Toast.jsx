import React from 'react'
import styled, {keyframes} from 'styled-components'

const toasterin = keyframes`
 0% { top: -100px; }
 20% {top: 20px;}
 60% {top: 20px;}
90% {opacity: 100;}
 100% {opacity: 0;}
`
const ToastWrapper = styled.div`
    width: 200px;
    height: auto;
    display: flex;
    border-radius: 15px;
    position: fixed;
    justify-content: center;
    align-items: center;
    top: -100px;
    left: 0;
    right: 0;
    margin: auto;
    background-color: ${props=>props.theme.secondary_highlight_75};
    backdrop-filter: blur(3px);
    z-index: 999;
    padding: 20px;
    animation: ${toasterin} 3s ease-in-out;
    box-shadow: 0 0 5px 5px ${props=>props.theme.dark_50};
    transition: 3s all ease-in-out;
    ;
`
const Message = styled.p`
    text-align:center;
    font-size: 1.3rem;
    font-weight: bold;
    color: #232323;
    text-shadow: 0 0 10px #fff;
`
export default function Toast(props){
    return (
<ToastWrapper onClick={(e)=>e.target.style.top = "-100px"}>
    <Message>{props.message}</Message>
</ToastWrapper>
    )
}

