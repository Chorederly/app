const express = require("express")
const reward = require("../models/reward.js")
const rewardRouter = express.Router()
const Reward = require("../models/reward.js")
// get all
rewardRouter.get("/", (req, res, next) => {
  Reward.find((err, rewards) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res
      .status(200)
      .send(rewards)
  })
})
// post new rewards
rewardRouter.post("/", (req, res, next) => {
  const newReward = new Reward(req.body)
  newReward.save((err, savedReward) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res
      .status(201)
      .send(savedReward)
  })
})
// delete rewards
rewardRouter.delete("/:rewardId", (req, res, next) => {
  Reward.findOneAndDelete({
    _id: req.params.rewardId
  }, (err, deletedReward) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res
      .status(200)
      .send(`Successfully deleted ${deletedReward.rewardName} from the list of rewards`)
  })
})
//updated reward
rewardRouter.put("/updateOne/:rewardId", (req, res, next) => {
  Reward.findOneAndUpdate({
    _id: req.params.rewardId
  }, req.body, {
    new: true
  }, (err, updatedReward) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res
      .status(201)
      .send(updatedReward)
  })
})

rewardRouter.get("search/:userId", (req, res, next)=>{
    Reward.find((err, foundRewards)=>{
        if (err){
            res.status(500)
            return next(err)
        }
        const filteredRewards = foundRewards.filter((reward)=>reward.user === req.params.userId)
        return res.status(200).send(filteredRewards)
    }
)})

module.exports = rewardRouter