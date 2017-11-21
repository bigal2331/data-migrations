'use strict';
module.exports = (sequelize, DataTypes) => {
  var Toy = sequelize.define('Toy', {
    name: DataTypes.STRING,
    notes: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Toy;
};