const getAllNotes = (db) => {

  return db.select('*').from('notes');
};

const getNote = (db, id) => {

  return db.select('*').from('notes').where('id', id);
};

const createNote = (db, data) => {

  return db.insert(data).into('notes').returning('*').first();
};

const updateNote = (db, id, data) => {

  return db('notes').update(data).where('id', id);
};

const deleteNote = (db, id) => {

  return db('notes').delete().where(('id', id));
};

module.exports = {
  getAllNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};
