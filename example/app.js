// create new game
var game = new rpg('game', [30, 30], [15, 5], {
  tileBorder: 'solid thin #999'
})

// add tiles 
game.tiles = [
  {
    color: 'green',
    death: false,
    walk: true

  }, {
    color: 'blue',
    death: true,
    msg: 'You drowned...',

  }, {
    color: 'tan',
    death: false,
    walk: [true, false, false, false]
  }
]

// add maps
game.maps = {
  level1: {
    entry: [0, 0],
    name: 'Level 1',
    enemies: [],
    map: [
      0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
      0, 0, 0, 1, 2, 0, 0, 2, 1, 0, 0, 0, 1, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
    ]
  }
}

// map keys
document.onkeydown = function (e) {
  e = e || window.event;
  if (e.keyCode == '38') game.movePlayer('up')
  else if (e.keyCode == '40') game.movePlayer('down')
  else if (e.keyCode == '37') game.movePlayer('left')
  else if (e.keyCode == '39') game.movePlayer('right')
}

// start game 
game.build(game.maps.level1)
