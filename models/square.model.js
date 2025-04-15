class Square {
  constructor(sideLength) {
    this.sideLength = sideLength;
  }

  getPerimeter() {
    return 4 * parseFloat(this.sideLength);
  }

  getArea() {
    return parseFloat(this.sideLength) * parseFloat(this.sideLength);
  }
}

export default Square;
