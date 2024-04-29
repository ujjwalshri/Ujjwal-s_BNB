const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();
const PORT = 2000;

// secret key salt for hashing by using the bcryptjs package
const bcryptSalt = bcrypt.genSaltSync(10);

// MiddleWares 
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173', // Update with your allowed origin
}));

// Connection to MongoDB 
mongoose.connect('mongodb://127.0.0.1:27017/CO-Z')
    .then(() => console.log("Successful DB connected"))
    .catch((e) => console.log("Error occurred while connecting to the database:", e)); // Adding error logging for database connection

// Routes
app.get('/test', (req, res) => {
    return res.json("test ok");
});

app.post('/register', async (req, res) => {
   const body = req.body;
   console.log(body);
   if(!body || !body.name || !body.email || !body.password){
    return res.status(400).json({msg:"First name , last name are required"});
}
   try{

    const result = await User.create({
        name:body.name,
        email:body.email,
        password:body.password
      })
   }catch(e){
      res.json({
        err: "User already exists"
      }).status(500)
   }

  
   
   return res.json(result);
});

app.listen(PORT, () => console.log(`Server Started at port ${PORT} `));
