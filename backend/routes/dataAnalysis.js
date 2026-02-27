const express = require('express');
const { exec } = require('child_process');
const router = express.Router();


// Define a route for data visualization
router.get('/data-cleaning', (req, res) => {
  exec('python3 /usr/src/app/python/dataCleaning.py', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing script: ${error.message}`);
        console.error(`stderr: ${stderr}`);            
        return res.status(500).send(stderr);
      }
      res.send(stdout);
  });
});

// Define a route for data manipulation
router.get('/data-manipulation', (req, res) => {
    exec('python3 /usr/src/app/python/dataManipulation.py', (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing script: ${error.message}`);
          console.error(`stderr: ${stderr}`);
          return res.status(500).send(stderr);
        }
        res.send(stdout);
    });
});

// Define a route for data visualization
router.get('/data-visualization', (req, res) => {
    exec('python3 /usr/src/app/python/dataVisualization.py', (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing script: ${error.message}`);
          console.error(`stderr: ${stderr}`);            
          return res.status(500).send(stderr);
        }
        res.send(stdout);
    });
});

// Define a route for descriptive statistics
router.get('/descriptive-stats', (req, res) => {
    exec('python3 /usr/src/app/python/descriptiveStatistics.py', (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing script: ${error.message}`);
          console.error(`stderr: ${stderr}`);            
          return res.status(500).send(stderr);
        }
        res.send(stdout);
    });
});

module.exports = router;
