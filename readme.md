# Game Map Editor

This is an easy to use interactive editor for creating simple JSON game maps. 

## Getting Started

After you've redirected your terminal to this projet, you'll want to install the dependencies first.

```ssh 
npm install
```

You'll then be able to start up a local server with this project at "localhost:8000". 

```ssh
npm start
```

## Editor

The editor allows you to choose from our library of tiles and place them on the map.

![Editor](https://raw.githubusercontent.com/jadeallencook/Game-Map-Editor/master/screenshots/editor.png)

You can also download this project and upload your own tiles by editing the "firebase.temp.json" file. 

```js
"tile-uid": {
    "image": "image.png",
    "walk": [true, true, true, true]
}
```

A new tile needs an image and the sides that a player can walk on it from (clockwise starting from the top). 

## Player

Once you've finished your map in the editor, you can press "play" on the top toolbar to explore your map. 

![Play](https://raw.githubusercontent.com/jadeallencook/Game-Map-Editor/master/screenshots/play.png)

If you're happy with the results, your can click "download map" to download a JSON copy of it and use it to create your own games!