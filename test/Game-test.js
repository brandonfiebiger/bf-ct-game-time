const { expect } = require('chai');
const Game = require('../lib/Game.js');


describe('Game',() => {

  it('should instantiate a new game',() => {
    const game = new Game();
    expect(game).to.be.an('object');
  })

  it('should create an empty array of cars',() => {
    const game = new Game();
    expect(game.cars).to.be.an('array')
  })

  it('should create an empty array of rows of cars',() => {
    const game = new Game();
    expect(game.carRows).to.be.an('array')
  })

  it('should create an empty array of logs',() => {
    const game = new Game();
    expect(game.logs).to.be.an('array')
  })

  it('should create an empty array of rows of logs',() => {
    const game = new Game();
    expect(game.logRows).to.be.an('array')
  })

  it('should create an empty array of grass',() => {
    const game = new Game();
    expect(game.grass).to.be.an('array')
  })

  it('should create an empty array of frog trophies',() => {
    const game = new Game();
    expect(game.frogTrophies).to.be.an('array')
  })

  it('should be able to draw frog trophies', function() {
    const game = new Game();
    expect(game.drawFrogTrophies).to.be.a('function')
  })

  it('should be able to draw logs', function() {
    const game = new Game();
    expect(game.drawLogs).to.be.a('function')
  })

  it('should be able to draw cars', function() {
    const game = new Game();
    expect(game.drawCars).to.be.a('function')
  })

  it('should be able to draw water', function() {
    const game = new Game();
    expect(game.drawWater).to.be.a('function')
  })

  it('should be able to draw the street', function() {
    const game = new Game();
    expect(game.drawStreet).to.be.a('function')
  })

  it('should be able to draw the background', function() {
    const game = new Game();
    expect(game.drawBackground).to.be.a('function')
  })

  it('should be able to draw the purple grass', function() {
    const game = new Game();
    expect(game.drawPurpleGrass).to.be.a('function')
  })

  it('should be able to draw the green grass', function() {
    const game = new Game();
    expect(game.drawGreenGrass).to.be.a('function')
  })

  it('should be able to add car rows', function() {
    const game = new Game();
    expect(game.addCarRows).to.be.a('function')
  })

  it('should be able to generate cars', function() {
    const game = new Game();
    expect(game.generateCars).to.be.a('function')
  })

  it('should be able to add log Rows', function() {
    const game = new Game();
    expect(game.addLogRows).to.be.a('function')
  })

  it('should be able to generate logs', function() {
    const game = new Game();
    expect(game.generateLogs).to.be.a('function')
  })

  it('should add the win area', function() {
    const game = new Game();
    expect(game.addWinArea).to.be.a('function')
  })

  it('should detect car collision', function() {
    const game = new Game();
    expect(game.carCollision).to.be.a('function')
  })

  it('should detect log collision', function() {
    const game = new Game();
    expect(game.logCollision).to.be.a('function')
  })

  it('should detect water collision', function() {
    const game = new Game();
    expect(game.waterCollision).to.be.a('function')
  })

  it('should detect landing on the grass area', function() {
    const game = new Game();
    expect(game.grassLanding).to.be.a('function')
  })

  it('should draw the score', function() {
    const game = new Game();
    expect(game.drawScore).to.be.a('function')
  })

  it('should draw the lives', function() {
    const game = new Game();
    expect(game.drawLives).to.be.a('function')
  })

  it('should be able to increase the lives', function() {
    const game = new Game();
    expect(game.oneUp).to.be.a('function')
  })

  it('should be able to end the game', function() {
    const game = new Game();
    expect(game.gameOver).to.be.a('function')
  })
  



})

