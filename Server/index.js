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


// mongoose.connect('mongodb://localhost:27017/TRAVEL-PLANNER');

mongoose.connect("mongodb+srv://sundarkarthick574:Moon@cluster0.qtuqvrt.mongodb.net/TripUp");

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



// schema for add trip

const TripPlans = mongoose.model("TripPlans",{
    id:{
        type:Number,
        require:true,
    },
    start:{
        type:String,
        require:true,
    },
    destination:{
        type:String,
        require:true,
    },
    start_date:{
        type:String,
        require:true,
    },
    end_date:{
        type:String,
        require:true,
    },
    mode:{
        type:String,
        require:true,
    },
    notes:{
        type:String,
        require:true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
})

app.post('/createTrip', async (req,res)=>{
    let tripPlans = await TripPlans.find({});
    let id;
    if(tripPlans.length>0){
        let last_tripPlan_array = tripPlans.slice(-1);
        let last_tripPlan = last_tripPlan_array[0];
        id = last_tripPlan.id + 1;
    }
    else{
        id=1;
    }
    const tripPlan = new TripPlans({
        id:id,
        start:req.body.start,
        destination:req.body.destination,
        start_date:req.body.start_date,
        end_date:req.body.end_date,
        mode:req.body.mode,
        notes:req.body.notes,
    });
    console.log(tripPlan);
    await tripPlan.save();
    console.log("TRIP PLAN ADDED");
    res.json({
        success:true,
        start:req.body.start,
    })
})


// api for get all trip plans
app.get('/allTripPlans', async(req,res)=>{
    let tripPlans = await TripPlans.find({});
    console.log(" ALL TRIP PLANS ARE FETCHED");
    res.send(tripPlans);
})


// api for get trip id

app.get('/getTripId/:id',(req,res) =>{
    let id = req.params.id;
    TripPlans.findById({_id:id})
    .then(tripPlan =>res.json(tripPlan))
    .catch(err => res.json(err))
})

// api for update trip

app.put('/updateTrip/:id', async (req,res)=>{
    const id = req.params.id;
    let updateTrip = await TripPlans.findByIdAndUpdate({_id:id},{
        start:req.body.start,
        destination:req.body.destination,
        start_date:req.body.start_date,
        end_date:req.body.end_date,
        mode:req.body.mode,
        notes:req.body.notes,
    })
    .then(tripPlan => res.json(tripPlan))
    .catch(err =>res.json(err))
    console.log(updateTrip);
     await res.send(updateTrip)
     alert(" TRIP UPDATED")
})

// api for delete a trip plan

app.post('/deleteTripPlan', async (req,res)=>{
    await TripPlans.findOneAndDelete({id:req.body.id});
    console.log("TRIP PLAN DELETED");
    res.json({
        success:true,
        start:req.body.start,
    })
})


app.listen(PORT,(error)=>{
    if(error){
        console.log(`Error: ${error}`);
    }
    else{
        console.log(`SERVER IS RUNNING ON PORT: ${PORT}`);
    }
})