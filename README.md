![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# JS | P5 Splatoon Like

## Introduction

Let's implement a simple Platoon-like game, where you would need to paint as many squares on the board as possible.

## Iteration 1

The goal is to reproduce the following grid.

![](https://github.com/ironhack-dev-squad-108/lab-canvas-treasure-hunt/blob/master/screenshots/grid.png?raw=true)

The `main.js` (that you will not forget from importing in your html too) will contain the starter code to manipulate your canvas.

To finish this iteration, you have to write the code of the `drawGrid` function.

## Iteration 2

Next step is creating a class `Player`. It should have at least:

- a `row` property, to indicate the row the player is in.
- a `col` property, to indicate the column
- a `moveUp()` method, to move the player up one row
- a `moveDown()` method, to move the player down one row
- a `moveLeft()` method
- a `moveRight()` method

Expected output:

```
const player = new Player(0,0) // (0,0) = Initial position
player.moveDown() // Increase by 1 the value of player.row
player.moveDown() // Increase by 1 the value of player.row
player.moveRight() // Increase by 1 the value of player.col
console.log(player.col, player.row) // => 1,2
```

## Iteration 3

Write the `drawPlayer` method in the `Player` class that should display the player on the canvas, based on its `col` and `row`.
Use `images/character-down.png` from the assets for this iteration.
Call the player's `drawPlayer()` method from the main `draw` function.

## Iteration 4

Write the `keyPressed` method that should detect `LEFT_ARROW`, `RIGHT_ARROW`, `UP_ARROW`, `DOWN_ARROW` and move the `player` accordingly.

Make sure you `clear()` before drawing your player again 😉
