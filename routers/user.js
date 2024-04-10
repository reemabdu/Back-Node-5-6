  
const express = require ('express')



const User = require('../models/user')

const router = express.Router()

// post // get  // patch // delete

router.post('/users' , (req , res) =>{
    console.log(req.body)

    // const user = new User ({ name : "REEM" , age : 31})
    const user = new User (req.body)
    
    user.save()
    .then((user) => {res.status(200).send(user)})
    .catch((e) => {res.status(400).send(e)})
})

module.exports = router

// https://httpstatuses.com/ 