let totalApples: number = 5;
totalApples = 10;

let colors: string[] = ['red', 'green', 'white']


class Car {
}

let car: Car = new Car();

// Object literal

// let point:{x:number, y:number} = {
//   x: 10,
//   y: 20
// }

class Point{
  constructor(private x:number, private y:number){

  }

  coord(){
    return `${this.x}, ${this.y}`;
  }
}

let point: Point = new Point(20, 30);
console.log(point.coord());

// Functions

const logNumber: (i:number) => void = (i:number)=>{
  console.log(i);
}

const json = '{"x":20, "y": 20}';
const coord:{x:number, y:number} = JSON.parse(json);

console.log(coord.x);

