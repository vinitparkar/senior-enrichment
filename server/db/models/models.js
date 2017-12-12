'use strict';

const db = require('../index');
const Sequelize = require('sequelize');

const Students = db.define('students', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: true
        }
        },

    gpa: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            min: 0.0,
            max: 4.0
        }
    },

    name: {
        type: Sequelize.VIRTUAL,
        get () {
          return this.getDataValue('firstName') + ' ' + this.getDataValue('lastName')
        }
    }
});

const Campuses = db.define('campuses',{
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: "https://www.cisco.com/c/en/us/solutions/design-zone/networking-design-guides/campus-wired-wireless/_jcr_content/Grid/subcategory_atl_5db5/layout-subcategory-atl/blade_a6cf/bladeContents/spotlight_c294/image.img.jpg/1503036863031.jpg",
        validate: {
            isUrl: true
        }
    },

    description: Sequelize.TEXT

});

module.exports = {Students, Campuses};