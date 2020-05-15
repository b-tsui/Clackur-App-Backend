'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Votes",
      [
        {
          postId: 1,
          userId: 1,
          upVote: true,
          downVote: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 2,
          userId: 1,
          upVote: true,
          downVote: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 3,
          userId: 1,
          upVote: true,
          downVote: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 4,
          userId: 1,
          upVote: true,
          downVote: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 5,
          userId: 1,
          upVote: true,
          downVote: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 6,
          userId: 1,
          upVote: true,
          downVote: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 1,
          userId: 2,
          upVote: true,
          downVote: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 3,
          userId: 2,
          upVote: true,
          downVote: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 2,
          userId: 2,
          upVote: true,
          downVote: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 6,
          userId: 2,
          upVote: true,
          downVote: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    )
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
