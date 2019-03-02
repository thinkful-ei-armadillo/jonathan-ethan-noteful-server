'use strict';

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: 8000 || process.env.PORT,
  DB_URL: process.env.DATABASE_URL || 'postgresql://noteful@localhost/noteful',
  TEST_DB_URL: process.env.TEST_DATABASE_URL || 'postgresql://noteful@localhost/test_notful',
  API_KEY: process.env.API_KEY
};

// sadfasdf
