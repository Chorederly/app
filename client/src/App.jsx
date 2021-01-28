import React, {useContext} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {UserContextProvider} from './context/UserContext'
import {ChoreContextProvider} from './context/ChoreContext'
import {Route, Link, Switch, useHistory} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Header from './components/Header'

const AppWrapper = styled.div `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows:  1fr auto;
    overflow: hidden;
  /* background:
  linear-gradient(135deg, ${props=>props.theme.colors.grey_light} 25%, transparent 25%) -50px 0,
  linear-gradient(225deg, ${props=>props.theme.colors.grey_light} 25%, transparent 25%) -50px 0,
  linear-gradient(315deg, ${props=>props.theme.colors.grey_light} 25%, transparent 25%),
  linear-gradient(45deg, ${props=>props.theme.colors.grey_light} 25%, transparent 25%);	
  background-size: 2em 2em; */
  background-color:  ${props=>props.theme.primary_l} ;

`
const Content = styled.main `
    width: 100%;
    height: 100%;
    grid-column: 1/2;
    grid-row: 2/3;
`
function App() {
  return (
    <ChoreContextProvider>
    <UserContextProvider>
      <AppWrapper>
        <Header/>
        <Content>
          <Switch>
            <Route exact path="/">
              <Profile />
            </Route>
            <Route path="/settings">
              <Settings/>
            </Route>
          </Switch>
        </Content>
        <NavBar />
      </AppWrapper>
    </UserContextProvider>
    </ChoreContextProvider>
  )
}

export default App