/*
 * HERENCIA A TRAVES DE "ENCADENACION DEL PROTOTYPE"
 * 
 * Las propiedades de padre (ya sean variables o metodos) son heredadas sólo en el prototype
 * Las propiadas PROPIAS (this) son distintas para el padre e hijo
 * 
 * It's important to note that the prototype is "live". 
 * Objects are passed by reference in JavaScript, and therefore the prototype is not copied with every new object instance.
 * What does this mean in practice? It means that you can modify the prototype at any time and all objects (even those created before the modification) will inherit the changes.
 */
function Gadget(name, color) {
  this.name = name;
  this.color = color;
  this.whatAreYou = function(){
    return 'I am a ' + this.color + ' ' + this.name;
  }
}
Gadget.prototype.price = 100
Gadget.prototype.rating = 3
Gadget.prototype.getInfo = function() {
  return 'Rating: ' + this.rating + ', price: ' + this.price
}

var newtoy = new Gadget('webcam', 'black');
var newtoy2 = new Gadget('webcam', 'black');

Gadget.prototype.sayGadge = function () { return 'Gadget' }

// prototype es una propiedad DE LA FUNCION CONTRUCTOR no del objeto que esta creó
// para acceder a prototype desde el objeto: newtoy.constructor.prototype
var newtoyProt = newtoy.prototype // Unbdefined, el su lugar se usa:
var newtoySecretProto = newtoy.__proto__ // ar newtoySecretProto = newtoy.constructor.prototype
var newtoySecretProto2 = newtoySecretProto.__proto__
var newtoyCons = newtoy.constructor

function Phone(inch) {
  this.inch = inch
}
Phone.prototype = new Gadget()
Phone.prototype.constructor = Phone

var note5 = new Phone(5.7, 'red', 'Samsung Galaxy Note 5') // Los últimos 2 parámetros son ignorados

var not5Cons = note5.constructor
var note5Prot = note5.__proto__
var note5Prot2 = note5Prot.__proto__

/*
 * color es undefined porque nunca se especifico, puesto que el constructo de Gadget nunca se ejecuto
 * y el constructo de Phone que es el que si se ejecuta no lo consideró. Para estas sitauciones existe lo que se llama
 * PRESTAMOS DEL CONSTRUCOR (Borrowing a Constructor)
 */
console.log(note5.whatAreYou())
console.log(note5.getInfo())
console.log(note5.color)
console.log(note5.rating)

var end