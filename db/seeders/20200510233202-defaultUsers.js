'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@demo.com",
          name: "demo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'b@test.com',
          name: 'b',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'b@test.com',
          name: 'b',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'b@test.com',
          name: 'b',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
