// create new game
var game = new rpg('game', [50, 50], [15, 5], {
  border: true
})

// add tiles 
game.titles = [
  {
    color: 'green',
    death: false

  }, {
    color: 'blue',
    death: true,
    msg: 'You drowned...',

  }
]

// add maps
game.maps = {
  level1: {
    name: 'Level 1',
    enemies: [],
    map: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]
  }
}

// start game 
game.start(game.maps.level1)