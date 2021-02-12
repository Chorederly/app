import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {ChoreContext} from './ChoreContext'

const UserContext = React.createContext(null)

const UserContextProvider = ({children}) => {
  const [users,
    setUsers] = useState({all: [], current: null, adultLoggedIn: false})
  
  const {chores, unassignChore} = useContext(ChoreContext)
  
  const addUser = (info) => {
    axios
      .post("/users", info)
      .then(resp => {
        updateUsers() 
      })
      .catch(err => console.log(err))
  }

  const updateUsers = () => {
    axios
      .get("/users")
      .then(resp => {
        console.log(resp)
        setUsers(prev => ({
          ...prev,
          all: resp.data
        }))
        if (resp.data.current !== null) {
          const currentUser = resp.data.all.find(user=> user._id === users.current._id)
          setUsers({
              current: currentUser,
              adultLoggedIn: currentUser.adult}
          )
        }
      })
      .catch(err => console.log(err))
  }
  function deleteUser(userId) {
    axios.delete(`/users/${userId}`)
    .then(res => {
      const choresToUnassign = chores.filter(chore=>chore.user = userId)
      choresToUnassign.map(chore=>unassignChore(chore._id))
      updateUsers();  
      //setUsers(prevUsers => prevUsers.all.filter(user => user._id !== userId))
    })
    .catch(err => console.log(err))
}
  useEffect(() => {
    updateUsers()
  }, [])
  
  const collectPoints = (points, userId)=>{
    axios.put(`/users/${userId}`, {points: points}).then(resp=>{
      updateUsers();
    }).catch(err=>console.log(err))
  }

  const signIn = (userId) => {
    const currentUser = users.all.find(user=> user._id === userId)
        setUsers(prev=>({
            ...prev, 
            current: currentUser,
            adultLoggedIn: currentUser.adult
        }))
        updateUsers()
        
        }
  const signOut = ()=>{
    setUsers(prev=>({
      ...prev,
      current: null
    }))
  }
  return (
    <UserContext.Provider
      value={{
      users,
      setUsers,
      updateUsers,
      addUser, 
      signIn,
      deleteUser, 
      collectPoints,
      signOut
    }}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserContextProvider}