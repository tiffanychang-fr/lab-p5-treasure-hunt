class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
  }

  moveUp() {
    clear();
    this.row -= SQUARE_SIDE;
  }

  moveDown() {
    clear();
    this.row += SQUARE_SIDE;
  }

  moveLeft() {
    clear();
    this.col -= SQUARE_SIDE;
  }

  moveRight() {
    clear();
    this.col += SQUARE_SIDE;
  }

  drawPlayer() {
    // push();
    // fill("orange");
    // rect(this.col, this.row, this.width, this.height);
    // pop();
    image(vikingImage, this.col, this.row, this.width, this.height);
  }
}
