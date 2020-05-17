'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Posts",
      [
        {
          userId: 2,
          title: "Matte Black Everything",
          description: "black and yellow, black and yellow",
          imageUrl: "https://i.redd.it/mct12lfcpqn31.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          title: "Aquarium",
          description: "Betta Saga artisan kecaps by Jellykey",
          imageUrl: "https://i.redd.it/d8y7mkvvguo41.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          title: "Dots",
          description: "GMK Dots keyset makes everything you type a password",
          imageUrl: "https://i.redd.it/7a8ez6hapbo41.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          title: "click clack",
          description: "Mechanical keyboard themed valentines card",
          imageUrl: "https://i.redd.it/yevrc54oyud21.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          title: "Kirby Keycap",
          description: "Kirby artisan keycap made by CYSM Caps",
          imageUrl: "https://i.redd.it/b4xw85rhijo31.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          title: "Poster",
          description: "Tokyo Mechanical Keyboard Meetup: May, 25, 2019",
          imageUrl: "https://i.redd.it/vcumwn3t4cy21.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          title: "Watermelon",
          description: "Watermelon keycap on a J02 keyboard",
          imageUrl: "https://i.redd.it/chd5r9k9hry41.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          title: "50 Cent Clacks",
          description: "50 Cent clacking on an ergodox keyboard",
          imageUrl: "https://i.redd.it/ernyzr1hubg41.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          title: "ACNH",
          description: "Animal Crossing themed deskmat and keyset (epbt islander)",
          imageUrl: "https://i.imgur.com/6yEsXNT.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ]
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
