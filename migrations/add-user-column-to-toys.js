module.exports = {
	up: function(queryInterface, Sequelize){
		queryInterface.addColumn('toys','userId',Sequelize.Integer);

	}


	down: function(queryInterface, Sequelize){
		queryInterface.removeColumn('toys','userId');
	}
}