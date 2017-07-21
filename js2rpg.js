/*
  jsrpg 2017
  coded by jadeallencook & claytoncook
*/

document.rpg = {
  // character stats 
  character: {
    health: 100,
    inventory: []
  },
  // world settings
  world: {
    enemies: [],
    items: []
  },
  // array of maps
  maps: [],
  // level builder
  build: function (map) {

  },
  // game init 
  start: function(map) {
    // build map
    this.build(map);
  }
}
