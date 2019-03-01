'use strict';

const validateFolder = (name) => {
  let error = false;

  if (!name) {
    error = true;
  }

  return error;
};

module.exports = validateFolder;