'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // how to define associations: https://sequelize.org/master/manual/assocs.html
      notes.hasOne(models.users, { foreignKey: 'id', as: 'from' })
      // notes.hasOne(models.categories, { foreignKey: 'categoryId', as: 'category' })
    }
  };
  notes.init({
    note: DataTypes.STRING,
    categoryId: DataTypes.STRING,
    userId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'notes',
  });
  return notes;
};