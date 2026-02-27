const express = require('express');
const router = express.Router();

const users = [
  { name: 'Anshul', email: 'anshul@gmail.com', age: 25 },
  { name: 'Sid', email: 'sid@gmail.com', age: 30 },
  { name: 'prithak', email: 'prithak@gmail.com', age: 35 }
];

router.get('/', (req, res) => {
    res.json(users);
  });
  
  router.post('/', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);  
  });
  
  module.exports = router;