let namee = 'Mosh';
console.log(namee);

//constants
const amount=1000;
// amount=120; cannot assign for const value, 
console.log(amount);

//Primitive types
let fullName='Chaitra R';// String literal
let age=24;// Number literal
let firstName; //by default undefined
let isApproved=true;// Boolean literal
let lastName=null;
console.log(fullName,age,firstName,isApproved,lastName);

//Object
let person = {
    fullName:'Chetu',
    age:24
};
//dot notation
console.log(person.fullName);
//bracket notation
person['fullName']='Kiki';
console.log(person.fullName);

//Array
//object in array and size of array are dynamic(need not be of same typeOf)
let selectedColours =['black','blue'];
selectedColours[2]='orange';
console.log(selectedColours.length);//length > number of itemsit has

//Function
//parameter-which is there at the time of declaration
//argument-actual value supplied to that parameter
//performing a task
function greet(firstName,lastName) {
    console.log('Hello '+ firstName+' '+lastName);
}
greet('Chaitra','R');

//calculating a value
function square(number){
return number*number;
}
console.log(square(2));

//Airthmetic operation
let x=10;
let y=8;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
//Increment
console.log(++x);//increased value will display
//decrement
console.log(y--);// dispaly then decrease
console.log(y);
let z =2;
//z = z+4;
z=+4;
console.log(z);

//Relational 
let k=1;
console.log(k>0);
console.log(k>=0);
console.log(k<0);
console.log(k <= 1);

//Equality
console.log(k === 1);
console.log(k !== 1);
console.log('Equality');
//Strict Equality checks (Type+value)
console.log(1===1);
console.log('1'===1);

//Lose Equality(Value)
console.log(1==1);
console.log('1'==1);
console.log(true == 1);
console.log(false == 1);

//Ternary operators
let points=180;
let type = points>100 ? 'gold' : 'silver';
console.log(type);

//Logical operators
let highIncome = true;
let creditScrore= true;
let eligebleForLoan= highIncome && creditScrore;// both case shoild be true;
console.log(eligebleForLoan);
// let eligebleForLoan= highIncome || creditScrore// atleast one should be true
// console.log(eligebleForLoan);
//Not(!)
console.log(!eligebleForLoan);
//logical OR || will first check first parameter ("red"||"black") if it is falsy then it will go for second parameter

//Swapping variables
let a='red';
let b='blue';

let c=a;
a=b;
b=c;
console.log(a,b);