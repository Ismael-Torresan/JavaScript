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


const temperature = [3, -2, -6, -1, 'erro', 9, 13, 17, 15, 14, 9, 5 ]
let amplitude;
const calcAmplitude = function(temps) {
  let max = temps[0]
  let min = temps[0]

  for (let i = 0; i < temps.length; i++){
    const curTemp = temps[i]
    if(typeof curTemp !== 'number') continue

    if(curTemp > max) max = curTemp;
    if(curTemp < min) min = curTemp;
  }
  console.log(max)
  console.log(min)
  amplitude = max - min;
}
calcAmplitude(temperature)
console.log(amplitude)