// sequelize model:create --name notes --attributes note:string,userId:string,categoryId:string
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('notes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(21)
      },
      note: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.STRING,
        // how to do a relation, more on how: https://medium.com/@eth3rnit3/sequelize-relationships-ultimate-guide-f26801a75554
        references: {
          model: 'users',
          key: "id"
        }
      },
      categoryId: {
        type: Sequelize.STRING(21),
        references: {
          model: 'categories',
          key: "id"
        }
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
    await queryInterface.dropTable('notes');
  }
};