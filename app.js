// const mongoose =require ('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017//lec-12')

// const Car = mongoose.model('Car',{type :String})

// const car1 = new Car ({type :"audi"})

// car1.save()
// .then(() => console.log('car added'))


//  app.get('/',(req,res) => {
//      res.send("reem abdu")
//  })
/////////////////////////////////////////

const express = require ('express')

const app = express()

const port =process.env.PORT || 3000

require('./db/mongooees')

app.use(express.json())

 const userRouters = require("./routers/user")
 
 app.use(userRouters)

 app.listen(port , () => {console.log("all done successfully")})
