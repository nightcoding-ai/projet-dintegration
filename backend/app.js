require('dotenv').config()
const app = require('./server')
const mongoose = require('mongoose')

const URI = process.env.MONGODB_URL
mongoose.connect(URI, err =>{
  if(err) throw err;
  console.log('Connected to MongoDB')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
  console.log('Server is running on port', PORT)
})
