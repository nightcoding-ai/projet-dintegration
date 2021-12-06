require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload =  require('express-fileupload')
const cookieParser = require('cookie-parser')

const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const contactRoutes = require('./routes/contact.routes');

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
  useTempFiles: true
}))


const URI = process.env.MONGODB_URL
mongoose.connect(URI, err =>{
  if(err) throw err;
  console.log('Connected to MongoDB')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
  console.log('Server is running on port', PORT)
})



// routes

app.use('/api/user', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/contact', contactRoutes);

