/*
  jsrpg 2017
  coded by jadeallencook & claytoncook
*/

var rpg = function (gameElement, tileSize, boardSize, optionalSettings) {

  // dev settings 
  this.settings = {
    border: false
  }

  // set dev settings
  if (optionalSettings) this.settings.border = optionalSettings.tileBorder;

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
  this.player = {
    x: 0,
    y: 0,
    health: 100,
    inventory: [],
    height: 10,
    width: 10,
    color: 'yellow',
    top: 10
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

    // apply style to tile
    function createTile(tile, style) {
      if (style.image) tile.style.backgroundImage = 'url("' + style.image + '")'
      else if (style.color) tile.style.backgroundColor = style.color
    }

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
      // cache tile
      var tile = tileElements[x]
      // apply height/width
      tile.style.height = this.game.tile.y + 'px'
      tile.style.width = this.game.tile.x + 'px'
      // red border for dev
      if (this.settings.border) tile.style.border = this.settings.border
      // create tile style 
      if (map.map[x]) createTile(tile, this.tiles[map.map[x]])
      else createTile(tile, this.tiles[0])
    }

    // place player
    var $entry = document.getElementById(map.entry[0] + '-' + map.entry[1])
    this.player.x = map.entry[0]
    this.player.y = map.entry[1]
    $entry.innerHTML = '<div id="player"></div>'

    // change player style 
    var $player = document.getElementById('player');
    $player.style.height = this.player.height + 'px'
    $player.style.width = this.player.width + 'px'
    $player.style.marginTop = this.player.top + 'px'
    $player.style.backgroundColor = this.player.color

  }
    
  // moves player 
  this.movePlayer = function(direction) {
    // cache player
    var $player = document.getElementById('player');
    // get new coordinates
    if (direction === 'up' && this.player.y > 0) this.player.y -= 1
    else if (direction === 'down' && this.player.y < this.game.board.y) this.player.y += 1
    console.log(this.player.y + '-' + this.player.x)
    // remove player
    $player.remove()
    // place new player 
    var $tile = document.getElementById(this.player.y + '-' + this.player.x)
    $tile.innerHTML = '<div id="player"></div>'
    $player.style.height = this.player.height + 'px'
    $player.style.width = this.player.width + 'px'
    $player.style.marginTop = this.player.top + 'px'
    $player.style.backgroundColor = this.player.color
  }
  
  // arrow keys
  document.onkeydown = function (e) {
    console.log(this)
    e = e || window.event;
    if (e.keyCode == '38') this.movePlayer('up')
    else if (e.keyCode == '40') this.movePlayer('down')
    else if (e.keyCode == '37') this.movePlayer('left')
    else if (e.keyCode == '39') this.movePlayer('right')
  }

}
