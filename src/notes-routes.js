'use strict';

const express = require('express');
const router = express.Router();
const noteService = require('./notes-service');


router
  .route('/')
  // Get all notes
  .get((req, res) => {

    const knex = req.app.get('db');

    noteService
      .getAllNotes(knex)
      .then((results) => {

        res.status(200).json(results);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json();
      });
  })

  .post((req, res, next) => {

    const data = req.body;

    const knex = req.app.get('db');

    noteService
      .createNote(knex, data)
      .then((note) => {

        // set location header TODO
        res.status(201).json(note);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json();
      });
  });

router
  // GET a single note
  .route('/:id')
  .get((req, res) => {

    const id = Number.parseInt(req.params.id, 10);

    const knex = req.app.get('db');

    noteService
      .getNote(knex, id)
      .then((results) => {

        if (results.length === 0) {
          return res.status(404).json();
        }

        res.status(200).json(results[0]);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json();
      });
  })
  .patch((req, res) => {

    const id = Number.parseInt(req.params.id, 10);
    const data = req.body;

    const knex = req.app.get('db');

    noteService
      .updateNote(knex, id, data)
      .then((results) => {

        if (!results) {
          return res.status(404).json();
        }

        res.status(204).json();
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json();
      });
  })
  .delete((req, res) => {

    const id = Number.parseInt(req.params.id, 10);

    const knex = req.app.get('db');

    noteService
      .deleteNote(knex, id)
      .then((results) => {

        if (!results) {
          return res.status(404).json();
        }

        res.status(204).json();
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json();
      });
  });

module.exports = router;
