(async () => {
  const { writeFile } = require('fs')
  const { promisify } = require('util')
  const Promise = require('bluebird')
  const imageToAscii = require("image-to-ascii");

  const { characters } = require('../package.json')

  const loadPokemon = async (character) => {
    const loadedPokemon = await promisify(imageToAscii)(`${process.cwd()}/pokemon/${character}.png`)
    await promisify(writeFile)(`${process.cwd()}/pokemon/${character}.txt`, loadedPokemon, 'ascii')
  }

  Promise.map(characters, loadPokemon)
})()
