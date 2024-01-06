const express = require('express');
const router = express.Router(); 
router.use(express.json()); 
const registerDb = require('./db')
const schemaZod = require('./zod');

router.post('/login', async (req, res)=>{
    const reqForlogin = req.body;
    const verifyLogin = schemaZod.loginZod.safeParse(reqForlogin)
    if(verifyLogin.error){
        res.json({
            msg: "You sent a wrong input"
        }) 
    }
    try {
        const user = await registerDb.register.findOne({ email: reqForlogin.email }).exec();
    
        if (user) {
            const isMatch = reqForlogin.password === user.password;
        if(isMatch){
            console.log("Login successful");
            res.json({
                msg:"Login successful"
            })
        }else{
            console.log("Incorrect Credential");
            res.json({
                msg:"Incorrect Credential"
            })  
        }} else {
            console.log('User not found');
        }
    } catch (error) {
        res.json({
            msg: "You sent a wrong input"
        }) 
        // console.error(error);
    }
    
})

module.exports = router;