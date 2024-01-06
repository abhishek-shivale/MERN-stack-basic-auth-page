const express = require('express');
const router = express.Router();
router.use(express.json());
const registerDb = require('./db');
const schemaZod = require('./zod');

router.post('/login', async (req, res) => {
  const reqForlogin = req.body;
  console.log(reqForlogin);
  const verifyLogin = schemaZod.loginZod.parse(reqForlogin);
  if (verifyLogin.error) {
    res.status(411).json({
      msg: 'You sent a wrong input',
      error,
    });
  }
  try {
    const user = await registerDb.register
      .findOne({ email: reqForlogin.email })
      .exec();

    if (user) {
      const isMatch = reqForlogin.password === user.password;
      if (isMatch) {
        console.log('Login successful');
        res.json({
          msg: 'Login successful',
        });
      } else {
        console.log('Incorrect Credential');
        res.json({
          msg: 'Incorrect Credential',
        });
      }
    } else {
      console.log('User not found');
      res.json({
        msg: 'User not found',
      });
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
