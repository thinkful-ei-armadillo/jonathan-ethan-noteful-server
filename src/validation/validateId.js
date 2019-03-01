'use strict';

const validateId = (folder) => {
  let error = false;

  if(!folder.length) {
    error = true;
  }

  return error;
};

module.exports = validateId;