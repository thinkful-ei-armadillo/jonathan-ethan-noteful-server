'use strict';

module.exports = {
  port: 8000 || process.env.PORT,
  DB_URL: 'postgresql://jon@localhost/noteful' || process.env.DB_URL,
  TEST_DB_URL: 'postgresql://jon@localhost/test_notful' || process.env.TEST_DB_URL,
  API_KEY: process.env.API_KEY
};
