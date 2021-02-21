'use strict';
const { nanoid } = require('nanoid')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      { id: nanoid(), name: 'Penting', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), name: 'Biasa', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), name: 'Alamat', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
