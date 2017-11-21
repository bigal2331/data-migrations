'use strict';
module.exports = (sequelize, DataTypes) => {
  var Asset = sequelize.define('Asset', {
    location: DataTypes.STRING,
    type: DataTypes.STRING,
    notes: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Asset;
};