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
        },
        {
          categoryId: 1,
          userId: 2,
          title: "Poster",
          description: "Tokyo Mechanical Keyboard Meetup: May, 25, 2019",
          imageUrl: "https://i.redd.it/vcumwn3t4cy21.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          userId: 2,
          title: "50 Cent Clacks",
          description: "50 Cent clacking on an ergodox keyboard",
          imageUrl: "https://i.redd.it/ernyzr1hubg41.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Post', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
