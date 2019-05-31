(async () => {
  const { characters } = require('./package.json')
  const { readFile } = require('fs')
  const { promisify } = require('util')
  const Promise = require('bluebird')

  const pokemonArray = await Promise.map(characters, character => promisify(readFile)(`./pokemon/${character}.txt`, 'ascii'))

  module.exports = () => {
    return pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
  }
})()
