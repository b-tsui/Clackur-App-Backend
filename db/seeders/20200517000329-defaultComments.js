'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        postId: 7,
        userId: 2,
        comment: "Yummy yummy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 5,
        userId: 2,
        comment: "Cute!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postId: 1,
        userId: 1,
        comment: "Sleeeeeek",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {})
  }
};
