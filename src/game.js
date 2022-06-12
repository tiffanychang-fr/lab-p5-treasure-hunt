class Game {
  constructor() {
    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = HEIGHT;
    this.player = new Player(0, 0);
    this.treasure = new Treasure();
    this.score = 0;
  }

  drawGrid() {
    while (this.startX <= WIDTH) {
      line(this.startX, this.startY, this.endX, this.endY);
      this.startX += SQUARE_SIDE;
      this.endX += SQUARE_SIDE;
    }
    this.startX = 0;
    this.startY = 0;
    this.endX = WIDTH;
    this.endY = 0;

    while (this.startY <= HEIGHT) {
      line(this.startX, this.startY, this.endX, this.endY);
      this.startY += SQUARE_SIDE;
      this.endY += SQUARE_SIDE;
    }

    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = HEIGHT;
  }

  play() {
    this.drawGrid();
    this.player.drawPlayer();
    this.treasure.drawTreasure();
    if (this.isColliding()) {
      this.score++;
      player1Score.innerText = this.score;
      this.player.drawPlayer();
      this.treasure.setRandomPosition();
    }
  }

  isColliding() {
    return (
      this.player.col == this.treasure.col &&
      this.player.row == this.treasure.row
    );
  }
}
