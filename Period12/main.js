class Shape {
  width = 200;
  #height = 200;
  constructor(height, width) {
    this.#height = height;
    this.width = width;
  }

  get getHeight(){
    return this.#height;
  }

 area() {
    return this.width * this.#height;
  }
}

const shape = new Shape(10, 5);
console.log(shape.area());
console.log(shape.getHeight);
