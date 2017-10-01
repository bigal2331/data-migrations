'use strict';

module.exports = {
	up: function(queryInterface, Sequelize){
		return queryInterface.addColumn(
			'toys',
			'userId',
			{
				type: Sequelize.INTEGER,
				allowNull: false

			})

	},


	down: function(queryInterface, Sequelize){
		return queryInterface.removeColumn('toys','userId');
	}
}