const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const PlaceModel = require('./models/Places');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const fs = require('fs');
const imageDownloader = require('image-downloader');

const app = express();


const PORT = 2000;

const cookieParser = require('cookie-parser');

// secret key salt for hashing by using the bcryptjs package
const bcryptSalt = bcrypt.genSaltSync(10);
// secret key for the jwt

const jwtSecret = 'gdsdsdsbwg9hsfs';





// MiddleWares 
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname+'/uploads'));
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173', // Update with your allowed origin
}));

// anther middlewares for parsing the cookies from the request














// Connection to MongoDB 
mongoose.connect('mongodb://127.0.0.1:27017/CO-Z')
    .then(() => console.log("Successful DB connected"))
    .catch((e) => console.log("Error occurred while connecting to the database:", e)); // Adding error logging for database connection



















// -------------> Routes <------------
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
          id:userDoc._id,
          
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

  //another routes


  app.get('/profile', (req,res)=>{
    const {token} = req.cookies; 
    
    if(token){
      jwt.verify(token,jwtSecret,{},async(err,userData)=>{
           if(err) throw err; 
      const {name,email, _id}=   await User.findById(userData.id);

           res.json({name,email, _id}); 
      })
    }else{
      res.json(null);
    }

   
  })

  /// route for the logout end point 

  app.post('/logout' , (req,res)=>{
      res.cookie('token', '').json({msg:true})
  })
  

  // route for uploading an image by link

  app.post('/upload-by-link', async(req, res)=>{
    const {link} = req.body;
    const newName = 'photo'+Date.now() + '.jpg';
    await imageDownloader.image({
      url: link, 
      dest: __dirname + '/uploads/' + newName,
    }).then(()=>{
      return res.json(newName);
    }).catch(()=>{
      return res.status(400).json({err:"error occured"});
    })
   
  })
 const photosMiddleware = multer({dest:'uploads'});
  app.post('/upload', photosMiddleware.array('photos',100),(req, res)=>{
    const uploadedFiles = [];
    for (let i = 0; i < req.files.length; i++) {
     
      const {path, originalname} = req.files[i];

      const arr = originalname.split('.');
      const extension = arr[arr.length-1];
      const newPath = path + '.'+ extension;
      fs.renameSync(path, newPath);
      uploadedFiles.push(newPath.replace('uploads/',''));
    }
   
    res.json(uploadedFiles);
  })

app.post('/places', (req, res)=>{
  const {token} = req.cookies;
 
  const {
    title, address, addedPhotos,
     description, perks, extraInfo, checkInTime ,
     checkOutTime, maxGuests
    } = req.body;
   
    if(!title || !address || !description || !perks ){
       throw new Error('An error occurred');
    }

    
  jwt.verify(token, jwtSecret, {}, async(err, userData)=>{
    if(err){
      res.json({err:"err"});
    }

   const placesDoc =  await PlaceModel.create({
    owner: userData.id,
    title, address, photos:addedPhotos,
    description, perks, extraInfo, checkInTime ,
    checkOutTime, maxGuests
    })
    
    
    res.json(placesDoc).status(200);
  })
})


// route for getting all the places aadded by a particular user we will get the id of a particular user with the help of cookies and then find the data corresponding to that user
app.get('/places', (req, res)=>{
  const {token} = req.cookies;
  jwt.verify(token, jwtSecret, {}, async(err, userData)=>{
    
     const {id} = userData;
     
     const result = await PlaceModel.find({owner:id});
    
     res.json(result);
  })
})



// end point for getting the places for the particular place id 

app.get('/places/:id' , async(req,res)=>{
   const {id}  = req.params;
   
   res.json(await PlaceModel.findById(id));
 })

 // api end point for the updating of the information of any places 
 app.put('/places', (req, res)=>{
  const {token} = req.cookies;
  const {
    id, title, address, addedPhotos,
     description, perks, extraInfo, checkInTime ,
     checkOutTime, maxGuests
    } = req.body;
    jwt.verify(token, jwtSecret, {}, async(err, userData)=>{
      if(err) throw err;
       const placesDoc = await PlaceModel.findById(id);
       
       if(userData.id === placesDoc.owner.toString()){
        placesDoc.set({
         
          title, address, photos:addedPhotos,
          description, perks, extraInfo, checkInTime ,
          checkOutTime, maxGuests
          })
          placesDoc.save();
          res.json("OKAY hai ji sab ");
       }

    });
 })




// Api end point for getting all the photos 

app.get('/allPlaces', async(req,res)=>{
    res.json(await PlaceModel.find());
})














app.listen(PORT, () => console.log(`Server Started at port ${PORT} `));
