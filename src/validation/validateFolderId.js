'use strict';

const validateFolderId = (folderId) => {

  if (!folderId) {
    return false;
  }

  return true;
};

module.exports = validateFolderId;
