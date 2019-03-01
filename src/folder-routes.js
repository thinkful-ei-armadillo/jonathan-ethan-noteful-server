const express = require('express');


const router = express.Router();

// router
//   .get('/', (req, res) => {
//     // GET /api/folders
//     res.status(200).send('get first method');
//   })
//   .post('/', (req, res) => {
//     // POST /api/folders
//     res.status(200).send('post first method');
//   });




router
  .route('/').get((req, res) => {
    // GET /api/folders
  })
  .route('/').post((req, res) => {
    // POST /api/folders
  });


module.exports = router;
