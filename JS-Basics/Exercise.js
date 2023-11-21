//FizzBuzz program
//divisible by 3=> Fizz
//divisible by 5=> Buzz
//divisible by both 3 & 5=> FizzBuzz
//not divisible by 3, 5=> input
//not a number=>"NOT A NUMBER"

const output= fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
    if(typeof input !== 'number')
    return NaN;
    else if((input%3 === 0) && (input%5 === 0))
    return 'FizzBuzz';
    else if(input % 3 === 0)
    return 'Fizz';
    else if(input % 5 === 0)
    return 'Buzz';
    else input;
}

