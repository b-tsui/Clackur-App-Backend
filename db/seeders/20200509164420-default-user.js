'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          userName: "demo",
          email: "demo@demo.com",
          hashedPassword: bcrypt.hashSync('test1'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'btsui',
          email: 'b@test.com',
          hashedPassword: bcrypt.hashSync('hunter2'),
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
