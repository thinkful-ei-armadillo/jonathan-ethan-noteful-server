'use strict';

const xss = require('xss');

const sanitize = function (folder) {

  return {
    id   : xss(folder.id),
    name : xss(folder.name),
  };
};

const getAllFolders = (db) => {

  return db
    .select('*')
    .from('folders')
    .then((results) => {

      return results.map(sanitize);
    });
};

const getFolder = (db, id) => {

  return db
    .select('*')
    .from('folders')
    .where('id', id)
    .then((results) => {

      return results.map(sanitize);
    });
};

const createFolder = (db, data) => {

  return db
    .insert(data)
    .into('folders')
    .returning('*')
    .then(rows => {
      return rows[0];
    });
};

const updateFolder = (db, id, data) => {

  return db('folders')
    .update(data)
    .where('id', id);
};

const deleteFolder = (db, id) => {

  return db('folders')
    .delete()
    .where('id', id);
};

module.exports = {
  getAllFolders,
  getFolder,
  createFolder,
  updateFolder,
  deleteFolder,
};
