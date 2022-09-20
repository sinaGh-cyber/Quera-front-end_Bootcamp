interface Ishapes  {
[key: string]: Function,
square(a:number):number,
circle(r:number):number,
triangle(a:number, h:number):number,
rectangle(a:number,b:number):number
}

const SHAPES : Ishapes = {
    square: (a) => a * a,
    circle: (r) => Math.PI * r * r,
    triangle: (a, h) => (a * h) / 2,
    rectangle: (a, b) => a * b,
};

function getAreaFunctions(shapes: string[]):Function[] {
    return shapes.map((shape):Function => SHAPES[shape]);
}

export default getAreaFunctions;