const capitalizeString = require('./capitalizeString')
const print = require('./print')
const roundNumber = require('./roundNumber')

module.exports = (str) => {
    return str.split("").reverse().join("");
  }