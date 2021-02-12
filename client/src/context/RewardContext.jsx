import React, {useState, useEffect} from 'react'
import axios from 'axios'

const RewardContext = React.createContext(null)

const RewardContextProvider = ({children}) => {
  const [rewards,
    setRewards] = useState([])

  const updateReward = (rewardId, body) => {
    axios
      .put(`rewards/${rewardId}`, body)
      .then(resp => {
        reloadRewards()
      })
      .catch(err => console.log(err))
  }

  const reloadRewards = () => {
    axios
      .get("/rewards")
      .then(resp => {
        console.log(resp)
        console.log(`setting Rewards from: ${rewards}`)

        setRewards(resp.data)
        console.log(`to: ${rewards}`)
      })
      .catch(err => console.log(err))
  }
  function deleteReward(rewardId) {
    axios
      .delete(`/rewards/${rewardId}`)
      .then(res => {
        setRewards(prevRewards => prevRewards.filter(reward => reward._id !== rewardId))
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    reloadRewards()
  }, [])

  function addReward(info) {
    axios
      .post(`/rewards`, info)
      .then(resp => {
        reloadRewards()
        console.log("reward added")
      })
      .catch(err => console.log(err))
  }

  return (
    <RewardContext.Provider value={{rewards,
    addReward,
    reloadRewards}}>
      {children}
    </RewardContext.Provider>
  )
}

export {RewardContext, RewardContextProvider}