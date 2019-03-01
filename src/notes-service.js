'use strict';

const xss = require('xss');

const sanitize = function (note) {

  return {
    id       : note.id,
    name     : xss(note.name),
    content  : xss(note.content),
    folderid : note.folderid,
    modified : note.modified,
  };
};

const getAllNotes = (db) => {

  return db
    .select('*')
    .from('notes')
    .then((results) => {

      return results.map(sanitize);
    });
};

const getNote = (db, id) => {

  return db
    .select('*')
    .from('notes')
    .where('id', id)
    .then((results) => {

      return results.map(sanitize);
    });
};

const createNote = (db, data) => {

  return db
    .insert(data)
    .into('notes')
    .returning('*')
    .then(rows => {
      return rows[0];
    });
};

const updateNote = (db, id, data) => {

  return db('notes')
    .update(data)
    .where('id', id);
};

const deleteNote = (db, id) => {

  return db('notes')
    .delete()
    .where('id', id);
};

module.exports = {
  getAllNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};
