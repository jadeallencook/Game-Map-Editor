# js2rpg
Create RPG games using JavaScript! 

## Setup
Include the 'js2rpg' JS/CSS files, then create a 'div' and give it an ID. 

```html 
<!-- styles -->
<link href="js2rpg.css" rel="stylesheet" type="text/css" />

<!-- game container -->
<div id="myGame"></div>

<!-- scripts -->
<script src="js2rpg.js"></script>
<script src="app.js"></script>
```

Now in your JS app create a new rpg.

```javascript
var myGame = new rpg('myGame', [30, 30], [15, 5]);
```

__Example__

_In the example above we are creating a new game in the 'div' with the ID 'myGame'. The second parameter is the tile size array '30px by 30px' and the last parameter is the board size array '15 wide by 5 tiles tall'._

## Creating Tiles

## Generating Maps

## Binding Keys

## Starting Game

## Game Example