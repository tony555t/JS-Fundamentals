function factorial(n) {
    // Base cases
    if (isNaN(n) || n < 0) {
        return 1;
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // Recursive case
    return n * factorial(n - 1);
}

const args = process.argv.slice(2);
const num = parseInt(args[0]);

console.log(factorial(num));