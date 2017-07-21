/*
  jsrpg 2017
  coded by jadeallencook & claytoncook
*/

var rpg = function (gameElement, tileSize, boardSize, dev) {

  // cache settings
  this.game = {
    element: document.getElementById(gameElement),
    tile: {
      x: tileSize[0],
      y: tileSize[1]
    },
    board: {
      x: boardSize[0],
      y: boardSize[1]
    }
  }

  // character stats 
  this.character = {
    health: 100,
    inventory: []
  }

  // world settings
  this.world = {
    enemies: [],
    items: [],
  }

  // array of maps
  this.titles = []
  this.maps = {}

  // level builder
  this.build = function (map) {

    // clear stage
    this.game.element.innerHTML = 'Loading...'

    // insert tiles
    var tileHTML = ''
    for (var y = 0; y < this.game.board.y; y++) {
      tileHTML += '<div class="tile-row">'
      for (var x = 0; x < this.game.board.x; x++) {
        tileHTML += '<div id="' + y + '-' + x + '" class="tile"></div>'
      }
      tileHTML += '</div>'
    }
    this.game.element.innerHTML = tileHTML

    // apply styles
    var tileElements = document.getElementsByClassName('tile')
    for (var x = 0; x < tileElements.length; x++) {
      var tile = tileElements[x]
      tile.style.height = this.game.tile.y + 'px'
      tile.style.width = this.game.tile.x + 'px'
      if (dev.border) tile.style.border = 'solid thin red'
    }
  }

  // game init 
  this.start = function (map) {
    // build map
    this.build(map)
  }

}
