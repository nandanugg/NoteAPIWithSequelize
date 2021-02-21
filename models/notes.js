'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Notes.hasOne(models.Users, { as: 'from', foreignKey: 'id' })
      Notes.hasOne(models.Categories, { as: 'category', foreignKey: 'id' })
    }
  };
  Notes.init({
    note: DataTypes.STRING,
    categoryId: DataTypes.STRING,
    userId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Notes',
  });
  return Notes;
};