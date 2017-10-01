'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('profiles',
      [

          {
            firstname: 'dummy1',
            lastname: 'dummy1Last'
            bio: 'None'

          },    
          {
            firstname: 'dummy2',
            lastname: 'dummy2Last'
            bio: 'None'

          },    
          {
            firstname: 'dummy3',
            lastname: 'dummy3Last'
            bio: 'None'

          }
          

      ], 
      {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('profiles', [

          {
            firstname: 'dummy1',
            lastname: 'dummy1Last'
            bio: 'None'

          },    
          {
            firstname: 'dummy2',
            lastname: 'dummy2Last'
            bio: 'None'

          },    
          {
            firstname: 'dummy3',
            lastname: 'dummy3Last'
            bio: 'None'

          }
          

      ],{});
  }
};
