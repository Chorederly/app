import React, {useContext, useState} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {UserContextProvider, UserContext} from './context/UserContext'
import {ChoreContextProvider} from './context/ChoreContext'
import {RewardContextProvider} from './context/RewardContext'
import {Route, Link, Switch, useHistory} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Header from './components/Header'
import background from './img/background.jpg'
import Toast from './components/Toast'

const AppWrapper = styled.div `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* width: 100%;
    height: 100%;
    min-height: 100vh; */
    display: flex;
    flex-direction: column;

    //grid-template-columns: 1fr;
    //grid-template-rows:  1fr auto;
    //overflow-x: hidden;
  /* background:
  linear-gradient(135deg, ${props=>props.theme.colors.grey_light} 25%, transparent 25%) -50px 0,
  linear-gradient(225deg, ${props=>props.theme.colors.grey_light} 25%, transparent 25%) -50px 0,
  linear-gradient(315deg, ${props=>props.theme.colors.grey_light} 25%, transparent 25%),
  linear-gradient(45deg, ${props=>props.theme.colors.grey_light} 25%, transparent 25%);	
  background-size: 2em 2em; */
  //background-color:  ${props=>props.theme.light} 


`
const Cover = styled.div`
  width: 100%;
  height: 100%;
  

`

const Content = styled.main `
    width: 100vw;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 300px;
    grid-column: 1/2;
    grid-row: 2/3;
    background-image: url(${background});
    background-repeat: repeat; 
    background-size: 256px;
    background-attachment: fixed;
    @media (min-width: 768px) {
      margin: auto;
      overflow-y: scroll;
  }
`
const Overlay = styled.div`
width: 100%;
  height: 100%;
  background-color: rgba(245, 223, 76, .8);
  `

function App() {
  const [toaster, setToaster] = useState("")
  const makeToast = (message)=>{
    setToaster(message)
    setTimeout(() => {
      setToaster("")
    }, 5000);
  }
  return (
    <ChoreContextProvider>
    <UserContextProvider>
    <RewardContextProvider>
      <AppWrapper>
      { toaster ? <Toast message={toaster}/> : null}
        <Header/>
        <Content>
          <Switch>
            <Route exact path="/">
              <Profile makeToast={makeToast}/>
            </Route>
            <Route path="/settings">
              <Settings makeToast={makeToast}/>
            </Route>
          </Switch>
        </Content>
  
        <NavBar/>
      </AppWrapper>
    </RewardContextProvider>
    </UserContextProvider>
    </ChoreContextProvider>
  )
}

export default App