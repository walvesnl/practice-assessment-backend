"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Day at the beach",
          content: "I spent the day at the beach",
          imageUrl:
            "https://i.guim.co.uk/img/media/a3cada51454f953a60cae1a257ac963f89906b2c/0_200_6000_3600/master/6000.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "Day at the mountain",
          content: "I spent the day at the mountain",
          imageUrl:
            "https://geographical.co.uk/media/k2/items/cache/852c2fa5e5468761c3ae8b796ca9be85_XL.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "Coding day",
          content: "Today I spent the day coding",
          imageUrl:
            "https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "2nd coding day",
          content: "Once again, I spent the day coding",
          imageUrl:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--kqpQgs9---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/4o9cvq6pqddj35xm1r95.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("stories", null, {});
  },
};
