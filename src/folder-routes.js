'use strict';

const express = require('express');
const router = express.Router();
const folderService = require('./folders-service');
const bodyParser = express.json();
const validateFolder = require('./validation/validateFolder');
const validateId = require('./validation/validateId.js');
const xss = require('xss');

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
  .route('/')
  // Get all folders
  .get((req, res) => {
    const knex = req.app.get('db');
    folderService
      .getAllFolders(knex)
      .then(folders => {
        res.json(folders);
      });
  })
  
  .post(bodyParser, (req, res, next) => {
    // POST a new folder
    const knex = req.app.get('db');
    const { name } = req.body;
    const newItem = { name };

    validateFolder(name) ?
      res.sendStatus(400)
      :
      folderService
        .createFolder(knex, newItem)
        .then(folder => {
          res.status(201).send(folder);
        })
        .catch(next);
  });

router
  // GET a single folder
  .route('/:id')
  .get((req, res, next) => {
    const knex = req.app.get('db');

    folderService
      .getFolder(knex, req.params.id)
      .then(folder => {
        validateId(folder) ?
          res.sendStatus(404)
          :
          res.status(200).send(folder);
      })
      .catch(next);
  });

module.exports = router;
