const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 2000;


// secret key salt for hashing by using the bcryptjs package
const bcryptSalt = bcrypt.genSaltSync(10);
// secret key for the jwt

const jwtSecret = 'gdsdsdsbwg9hsfs';





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

app.post('/register', async (req,res) => {
    
    const {name,email,password} = req.body;

    if(!name || !email || !password ){
       return  res.status(422).json({err: "error fill the form please"});
    }
    
  
    try {
      const userDoc = await User.create({
        name,
        email,
        password:bcrypt.hashSync(password, bcryptSalt),
      });
      res.json(userDoc);
    } catch (e) {
      res.status(422).json(e);
    }
  
  });

  app.post('/login', async (req,res) => {
   
    const {email,password} = req.body;
    const userDoc = await User.findOne({email});
    if (userDoc) {
      const passOk = bcrypt.compareSync(password, userDoc.password);
      if (passOk) {
        jwt.sign({
          email:userDoc.email,
          id:userDoc._id
        }, jwtSecret, {}, (err,token) => {
          if (err) throw err;
          res.cookie('token', token).json(userDoc);
        });
      } else {
        res.status(422).json('pass not ok');
      }
    } else {
      res.json('not found');
    }
  });
  




app.listen(PORT, () => console.log(`Server Started at port ${PORT} `));
