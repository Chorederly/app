import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UserContext = React.createContext(null)

const UserContextProvider = ({children}) => {
  const [users,
    setUsers] = useState({all: [], current: null, adultLoggedIn: false})

  const addUser = (info) => {
    axios
      .post("/users", info)
      .then(resp => {
        console.log("user added")
      })
      .catch(err => console.log(`${info.userName} user in use`))
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
        if (users.current !== null) {
          setUsers(prevState=>(
            {adultLoggedIn: prevState.current.adult}
            ))
        }
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    updateUsers()
  }, [])
  
  const collectPoints = (points, userId)=>{
    axios.put(`/users/${userId}, {points}`).then(resp=>{
      updateUsers();
    }).catch(err=>console.log(err))
  }

  const signIn = (userId) => {
    const currentUser = users.all.find(user=> user._id === userId)
        setUsers(prev=>({
            ...prev, 
            current: currentUser
        }))
        updateUsers()
        console.log(`current: ${currentUser.adult }`)
        if (currentUser !== null) {
          setUsers(prevState=>(
            {adultLoggedIn: currentUser.adult}
            ))
        }
  }
  return (
    <UserContext.Provider
      value={{
      users,
      setUsers,
      updateUsers,
      addUser, 
      signIn
    }}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserContextProvider}