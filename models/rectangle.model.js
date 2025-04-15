class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getPerimeter() {
    return 2 * (parseFloat(this.width) + parseFloat(this.height));
  }

  getArea() {
    return parseFloat(this.width) * parseFloat(this.height);
  }
}

export default Rectangle;
