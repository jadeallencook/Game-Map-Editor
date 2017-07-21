# js2rpg
Create RPG games using JavaScript! 

## Setup
Include the 'js2rpg' JS/CSS files, then create a 'div' and give it an id. 

```html 
<link href="js2rpg.css" rel="stylesheet" type="text/css" />
<div id="myGame"></div>
<script src="js2rpg.js></script>
<script src="app.js></script>
```

Now in your JS app create a new rpg.

```javascript
var myGame = new rpg('game', [30, 30], [15, 5]);
```