// 'use strict';
// let hasDriversLicense = false
// const passTest = true

// if (passTest) hasDriverLicense = true
// if (hasDriversLicense) console.log('I can drive')

// const interface = 'Audio'

function logger() {
  console.log('My name is Izzy')
}

logger()

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges)
  const juice = `Juice ${apples} and ${oranges} oranges.`
  return juice
}

console.log(fruitProcessor(5, 3))
