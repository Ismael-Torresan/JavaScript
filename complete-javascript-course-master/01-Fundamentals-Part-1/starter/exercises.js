let mass, height;

// let BMI = mass / (height * height); 

let maxHeight = 1.69;
let maxWeight = 67;

mass = maxWeight
height = maxHeight

let maxBMI = mass / (height * height)
console.log(maxBMI)



let jhonHeight = 1.85;
let jhonWeight = 95;

mass = jhonWeight
height = jhonHeight

let jhonBMI = mass / (height * height)
console.log(jhonBMI)

let maxHigherBMI = (maxBMI > jhonBMI)
console.log('Max BMI is higher?', maxHigherBMI)