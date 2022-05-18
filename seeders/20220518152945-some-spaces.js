"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "Matias' Space",
          description: "Where I share my stuff",
          backgroundColor: "#ffffff",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Swen's Space",
          description: "Not sure why I'm here",
          backgroundColor: "#ffffff",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("spaces", null, {});
  },
};
