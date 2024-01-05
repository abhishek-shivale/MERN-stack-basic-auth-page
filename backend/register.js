const express = require('express');
const router = express.Router(); 
router.use(express.json()); 
const registerDb = require('./db')
const schemaZod = require('./zod');
const { default: mongoose } = require('mongoose');

router.post('/register',async (req,res)=>{
    // const {email,username,password} = req.body;
    const allReq = req.body;
    const verifyReq = schemaZod.registerZod.parse(allReq)
    if(verifyReq.error){
        res.status(411).json({
            msg: "You sent a wrong input",
            error
        })
    }
    const email = verifyReq.email
   try{ 
    
    const already = await registerDb.register.findOne({email:email})
    if(already){
        res.json({
            msg: "User alredy exists"
        })
       
    }
    }catch(err){
        console.error(err)
    }
    
    try{
        await registerDb.register.create({
            userName: verifyReq.username,
            email: email,
            password: verifyReq.password
        },res.json({
           meg: "your account has been created"
        }))
    }catch(err){
        console.error(err);
    }
})

module.exports = router;