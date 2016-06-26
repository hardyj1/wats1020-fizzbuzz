// Place your FizzBuzz code here. 
// Count from 1 to 20 and find out which numbers are divisible by 3, 5, or both.

for (i=1; i<=20; i++) {
    // For each number check:
    // See if it is divisible by 3
    if (i % 3 === 0) {
        // If so: see if also divisible by 5
        if (i % 5 === 0) {
            // If divisible by 3 AND 5: Print FizzBuzz
            console.log('FizzBuzz');
        } else {
            // If only divisible by 3: Print Fizz
            console.log('Fizz');
        }
    } else if (i % 5 === 0) {
        // See if it is divisible by 5
        // If so: Print Buzz
        console.log('Buzz')
    } else {
        // See if it is not divisible by 3 or 5
        // If so: Print number
        console.log(i)
    }
}