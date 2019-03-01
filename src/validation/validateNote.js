'use strict';

const validateNote = (note) => {

  if (!note) {
    return false;
  }

  if(!note.name) {
    return false;
  }

  if(!note.content) {
    return false;
  }

  if(!note.folderId) {
    return false;
  }

  return true;
};

module.exports = validateNote;
