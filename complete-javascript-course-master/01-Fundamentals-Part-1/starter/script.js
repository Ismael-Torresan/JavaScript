// let js = 'amazing'
// if (js === 'amazing') alert('JavaScript is FUN!')

let myName = 'Ismael'
console.log(myName)

// second time does not need to declare
myName = 'mamamia'

console.log(typeof myName)

const now = 2022
const ageMaria = now - 1931
const myAge = now - 1987
console.log(ageMaria, myAge)
console.log(ageMaria > myAge)

let x = 10 + 5;
x += 10;
x *= 10;
x++;
x--;
console.log(x)

let u, p;
u = p = 30 - 15 - 58;
console.log(u, p);

const age = 16;
// const isOldEnough = age >= 18;

if(age >= 18){
    console.log('Sarah can start driving license');
}else{
    console.log(`Sarah can not drive yet, wait ${18-age} years.`)
 }

const birthYear = 2001
let century;
if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log('mamamia',century, 'century')

console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3)
console.log('23' / '2')

const favourite = prompt('What is your favourite number?')
console.log(favourite)

// operators
&& and 
|| or 
! not 


const day = 'monday'

switch(day) {
  case 'monday':
    console.log('Plan course structure')
    console.log('Go to coding meetup')
    break
  case 'tuesday':
  console.log('prepare theory videos')
  break
  case 'wednesday':
  case 'thursday':
    console.log('party day')
  default:
    console.log('Not a valid day!')
}