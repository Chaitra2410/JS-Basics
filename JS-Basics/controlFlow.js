//if else statement
let hour =12;

if(hour>=6 && hour<12){
    console.log('Good morning!');
}
else if(hour>=12 && hour<=6){
    console.log('Good afternoon!');
}
else
console.log('Good evening!');

//switchcase
let role;
 switch(role){
    case 'guest':
         console.log('Welcome guest');
         break;
    case 'admin':
          console.log('Welcome guest');
          break;
     default:
         console.log('Unknow user');     
 }

 //for loop
 for(let i = 0; i<5; i++){
    console.log('Welcome');
 }

 //while
 let i=0;
 while(i<=5){
    console.log('kiki');
    i++;
 }

 //for-in
 const person = {
    fullName:'chetu',
    age:24
 };
 for(let key in person)
    console.log(key,person[key]);

 const colors=['red','black','white'];
 for(let index in colors)
    console.log(index,colors[index]);

//for of loop
let flowers=['rose','lotus','jasmine'];
for(let flower of flowers)
console.log(flower);

//max of two numbers
let number = max(24,10);
console.log(number);
function max(a,b) {
 return (a>b ? a : b)
}

