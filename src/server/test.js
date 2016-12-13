/*
 * The functions in JavaScript are objects and they contain methods and properties.
 * JavaScript is classified as having a prototype-based object model. * 
 */

function foo(a, b){
  // this.a = a Si agregamos esto this la funcion se transforma en una "funcion constructor"
  return a * b
}

var fooCons = foo.constructor
var fooProt = foo.prototype
var fooProtType = typeof foo.prototype

var fooRetVal = foo(2,2)
// var fooObj = new foo(2,2)

/*
 * In the previous chapter you learned how to define constructor functions which can be used to create (construct) new objects. 
 * The main idea was that inside a function invoked with new you have access to the value this, 
 * which contains the object to be returned by the constructor
 */
function Product(name, price) {
  this.name = name;
  this.price = price;
  this.sayName = function () {
    return this.name
  }

  if (price < 0) {
    throw RangeError('Cannot create product ' + this.name + ' with a negative price');
  }
}

var generic = new Product('gen', 1);
var genConst = generic.constructor
// Because the constructor property contains a reference to a function, you might as well call this function to produce a new object
var generic2 = new generic.constructor('gen2', 1)

function Food(name, price) {
  Product.call(this, 'Tybo', 5);
  this.category = 'food';
} 

var cheese = new Food('feta', 5);

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var fun = new Toy('robot', 40);

/*
 * Functions are Data (functions are a special data type, are actually objects) with two important features: they contain code and they are executable (can be invoked)
 * There is a built-in "constructor function" called Function().
 * Like any other object, functions have a constructor property that contains a reference to the Function() constructor function.
 * This is an important concept that we'll need later on—functions in JavaScript
 * are actually data. This means that the following two ways to define a function
 * are exactly the same:
 */

function f(){ return 1 }
var f = function(){ return 1 }