document.getElementById('factorial-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const number = parseInt(document.getElementById('number').value);
    const resultElement = document.getElementById('result');
    
    if (number < 0) {
        resultElement.textContent = 'Please enter a non-negative integer.';
        return;
    }

    const factorial = calculateFactorial(number);
    resultElement.textContent = `Factorial of ${number} is ${factorial}.`;
});

function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calculateFactorial(n - 1);
}
