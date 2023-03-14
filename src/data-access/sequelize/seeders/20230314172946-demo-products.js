'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Products', [
    {
      name: 'Product 1',
      color: 'Red',
      size: 'Small',
      brand: 'Brand 1',
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      name: 'Product 2',
      color: 'Blue',
      size: 'Medium',
      brand: 'Brand 2',
      'createdAt': new Date(),
      'updatedAt': new Date()
    },
    {
      name: 'Product 3',
      color: 'Green',
      size: 'Large',
      brand: 'Brand 3',
      'createdAt': new Date(),
      'updatedAt': new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
