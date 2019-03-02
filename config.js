'use strict';

module.exports = {
  port: 8000 || process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://noteful@localhost/noteful',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://noteful@localhost/test_notful',
  API_KEY: process.env.API_KEY
};
