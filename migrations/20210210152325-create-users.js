// sequelize model:create --name users --attributes username:string,password:string,firstName:string,lastName:string
'use strict';
module.exports = {
  // because this model is required as reference in notes model, this model should be created first
  up: async (queryInterface, Sequelize) => {
    // things we can put in queryInterface: https://sequelize.org/master/manual/query-interface.html
    await queryInterface.createTable('users', {
      // available data types: https://sequelize.org/master/manual/model-basics.html#data-types
      // in the doc, it says "DataTypes.STRING", just change the "DataTypes" to "Sequelize" for the migration
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(21)
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};