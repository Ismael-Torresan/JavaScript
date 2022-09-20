'use strict';
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const maria = new Person('Maria', 1991);
console.log(maria);

Person.prototype.calcAge = function () {
  return 2037 - this.birthYear;
};
// maria.calcAge()
Person.prototype.species = 'Homo Sapiens';
// console.log(maria.__proto__)
// console.log(maria.calcAge())
// console.log(maria.species)

console.log(maria.hasOwnProperty('firstName'));
console.log(maria.hasOwnProperty('species'));
console.log(maria.hasOwnProperty('calcAge'));

console.log(maria.__proto__.__proto__);
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// __proto__: (...)
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()

console.dir(Person.prototype.constructor)

const arr = [3, 15, 17, 96]
console.log(arr.__proto__)

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed
//   }

//   accelerate() {
//     this.speed += 10
//     console.log(`${this.make} is going at ${this.speed}km/h`)
//   }

//   brake () {
//     this.speed -= 5
//     console.log(`${this.make} is going at ${this.speed}km/h`)
//   }

//   get speedUS() {
//     return `${this.speed / 1.6} m/h` 
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6
//   }
// }

// const ford = new Car('ford', 150)
// console.log(ford)
// console.log(ford.speedUS)
// ford.accelerate()
// ford.brake()
// ford.speedUS = 50
// console.log(ford)

// const bmw = new Car('BMW', 120)
// const mercedes = new Car('Mercedes', 95)

// bmw.accelerate()
// bmw.accelerate()
// bmw.brake()
// bmw.accelerate()

// const account = {
//   owner: 'Ismael',
//   movements: [200, 50, 120, 900],

//   get latest() {
//     return this.movements.slice(-1).pop()
//   },

//   set latest(mov) {
//     this.movements.push(mov)
//   }
// }

// console.log(account.latest)

// account.latest = 50
// console.log(account.movements)

// class Person23 {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// }

// const Student = function (firstName, birthYear, course) {
//   Person23.call(this, firstName, birthYear)
//   this.course = course
// }

// class Student {
//   constructor(firstName, birthYear, course){
//     Person.call(this, firstName, birthYear)
//     this.course = course
//   }
// }

// const att = new Student('Izzy', 1987, 'student')

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName}`)
// }
// Izzy.introduce()


const Personq = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Personq.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Personq.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Personq.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge()


// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed
//   }

//   accelerate() {
//     this.speed += 10
//     console.log(`${this.make} is going at ${this.speed}km/h`)
//   }

//   brake () {
//     this.speed -= 5
//     console.log(`${this.make} is going at ${this.speed}km/h`)
//   }
// }

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed)
//   this.charge = charge
// }

// EV.prototype = Object.create(Car.protoype)

// const tesla = new EV('Tesla', 200, 23)

// console.log(tesla)

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

class Account {
  locale = navigator.language

  constructor(owner, currency, pin) {
  this.owner = owner
  this.currency = currency
  this.pin = pin
  this._movements = []
  this.locale = navigator.language

  console.log(`Thanks ${owner} for opening an account with CommonWhealth`)
  }
  getMovements() {
    return this._movements
  }

  deposit(value) {
    this._movements.push(value)
    }
  
  withdraw(value) {
    this._movements.push(-value)
  }
}

const acc1 = new Account('Ismael', 'BRL', 1234)
acc1.deposit(426)
acc1.withdraw(120)
console.log(acc1)
console.log(acc1.getMovements())