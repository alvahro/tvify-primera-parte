/*
 * HERENCIA A TRAVES DEL CONSTRUCTOR "PRESTAMO DE CONSTRUCTOR"
 * 
 * Junto con la herencia por encadenamiento de prototipos, lo que se tiene es que
 * el hijo hereda las propiedades PROPIAS del padre tanto en el prototipo como en 
 * las propias del hijo (redundancia: dobre instanciacion del padre).
 * 
 * Otra forma para evitar la redundancia es hacer una copia recursiva con una funcion como
 * extend2() (ver abajo)
 */

function Shape(id) { // Tambien se le llama "super constructor"
  this.id = id;
}
Shape.prototype.name = 'shape';

function Triangle() {
  Shape.apply(this, arguments);
}
Triangle.prototype = new Shape(101) // Es lo mismo que: Triangle.prototype = Object.create(Shape.prototype)
Triangle.prototype.constructor = Triangle
Triangle.prototype.name = 'Triangle';

var t = new Triangle(101)

var tCons = t.constructor
var tProt = t.__proto__
var tProt2 = tProt.__proto__
console.log(t instanceof Triangle)
console.log(t instanceof Shape)

console.log(t.id)
console.log(t.__proto__.id)

function extend2(Child, Parent) {
  var p = Parent.prototype;
  var c = Child.prototype;
  for (var i in p) {
    c[i] = p[i];
  }
  c.uber = p; // uber es una ref al padre que la creo. A esta propiedad NodeJs la llama "super_"
}

var end