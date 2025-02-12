const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 2000;
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173',
}));

app.get('/test',(req,res)=>{
    return res.json("test ok");
})
app.post('/register', (req,res)=>{
    const {name,email,password} = req.body;
    res.json({name, email,password});
})

app.listen(PORT, ()=> console.log(`Server Started at port ${PORT} `))
