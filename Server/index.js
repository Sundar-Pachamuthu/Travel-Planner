const PORT = 3030;
const cors = require('cors');
const express = require('express');
const { error } = require('console');
const { default: mongoose } = require('mongoose');
const { type } = require('os');
const { request } = require('http');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/TRAVEL-PLANNER');

// schema creation for user model

const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

// sign up function post method

app.post('/signup', async (req,res)=>{
    
    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"EXISTING USER FOUND WITH SAME EMAIL ADDRESS"});

    }
    const user = new Users({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })
    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data,'travel-planner');
    res.json({success:true,token});
})


// login function poste method

app.post('/login', async (req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        let compare = req.body.password === user.password;
        if(compare){
            const data ={
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'travel-planner');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"WRONG PASSWORD"});
        }
    }

    else{
        res.json({success:false,errors:"WRONG EMAIL ADDRESS"});
    }
})




app.listen(PORT,(error)=>{
    if(error){
        console.log(`Error: ${error}`);
    }
    else{
        console.log(`SERVER IS RUNNING ON PORT: ${PORT}`);
    }
})