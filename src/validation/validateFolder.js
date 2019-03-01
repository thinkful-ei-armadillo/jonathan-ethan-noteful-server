'use strict';

const validateFolder = (folder) => {

  if (!folder) {
    return false;
  }

  if (!folder.name) {
    return false;
  }

  return true;
};

module.exports = validateFolder;
