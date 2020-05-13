'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Posts",
      [
        {
          categoryId: 1,
          userId: 2,
          title: "Matte Black Everything",
          description: "black and yellow, black and yellow",
          imageUrl: "https://i.redd.it/mct12lfcpqn31.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          userId: 2,
          title: "Kirby Keycap",
          description: "Kirby artisan keycap made by CYSM Caps",
          imageUrl: "https://i.redd.it/b4xw85rhijo31.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          userId: 2,
          title: "Dots",
          description: "GMK Dots keyset makes everything you type a password",
          imageUrl: "https://i.redd.it/7a8ez6hapbo41.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
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
