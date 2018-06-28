const { expect } = require('chai');
const GamePiece = require('../lib/GamePiece.js');

describe('GamePiece', function() {

  it('should have properties', function() {
    const gamePiece = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0', 1)

    expect(gamePiece).to.equal(gamePiece, {
      x: 50,
      y: 50,
      height: 10,
      width: 10,
      color: 'rgb(250, 0, 0)',
      dx: 1,
      dxv: .5
    })
  })

  it('should have a function called draw', function() {
    const gamePiece = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0', 1)
    
    expect(gamePiece.draw).to.be.a('function');
  });

  it('should have a function called moveRight', function() {
    const gamePiece = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0', 1)

    expect(gamePiece.moveRight).to.be.a('function');
  });

  it('has a function called moveRight that should reset x to 0 when at the end of the canvas', function() {
    const gamePiece = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0', 1)
    for (var i = 0; i < 1300; i++) {
      gamePiece.moveRight();
    }
    expect(gamePiece.x === 0)
  });

  it('should have a function called moveLeft', function() {
    const gamePiece = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0', 1)

    expect(gamePiece.moveLeft).to.be.a('function');
  });

  it('has a function called moveLeft that should reset x to 700 when at the end of the canvas', function() {
    const gamePiece = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0', 1)
    for (var i = 0; i < 1300; i++) {
      gamePiece.moveLeft();
    }
    expect(gamePiece.x === 700)
  });


})

