class Treasure {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
    this.setRandomPosition();
  }

  setRandomPosition() {
    const randomCol = Math.floor(Math.random() * 10) * SQUARE_SIDE;
    const randomRow = Math.floor(Math.random() * 10) * SQUARE_SIDE;
    this.col = randomCol;
    this.row = randomRow;
  }

  drawTreasure() {
    // push();
    // fill("#BADA55");
    // rect(this.col, this.row, this.width, this.height);
    // pop();
    image(treasureImage, this.col, this.row, this.width, this.height);
  }
}
