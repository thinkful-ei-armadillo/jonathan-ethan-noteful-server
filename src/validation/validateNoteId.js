'use strict';

const validateNoteId = (noteId) => {

  if (!noteId) {
    return false;
  }

  return true;
};

module.exports = validateNoteId;
