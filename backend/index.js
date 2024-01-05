const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors());
const register = require("./register")
app.use('/',register)
const login = require('./login')
app.use('/',login)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});