const asyncHandler  = require('express-async-handler');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const registerUser = asyncHandler(async (req,res) => {
    const { email, password } = req.body;
  
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send('User with the provided email already exist.');
    }
  
    try {
      user = new User(req.body);
      user.password = await bcrypt.hash(password, 8);
  
      await user.save();
      res.status(201).send();
    } catch (e) {
      res.status(500).send('Something went wrong. Try again later.');
    }
});


const loginUser = asyncHandler(async (req,res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
          return res.status(400).send('User with provided email does not exist.');
        }
    
        const isMatch = await bcrypt.compare(
          req.body.password,
          user.password
        );
    
        if (!isMatch) {
          return res.status(400).send('Invalid credentials.');
        }
        const { user_password, ...rest } = user.toObject();
    
        return res.send(rest);
      } catch (error) {
        return res.status(500).send('Something went wrong. Try again later.');
      }
});

const hello = (req,res) =>{
  res.json({
    "hello":["anand","pothraj"]
  })
}

module.exports = { registerUser , loginUser , hello } ;



