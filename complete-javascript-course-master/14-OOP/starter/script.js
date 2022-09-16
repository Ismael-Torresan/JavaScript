'use strict';
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear  
  }
}

const maria = new Person('Maria', 1991)
console.log(maria)

Person.prototype.calcAge = function () {
  return(2037 - this.birthYear)
}
// maria.calcAge()
Person.prototype.species = 'Homo Sapiens'
// console.log(maria.__proto__)
// console.log(maria.calcAge())
// console.log(maria.species)
