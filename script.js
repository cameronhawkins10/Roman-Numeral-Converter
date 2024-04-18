const numberInput = document.getElementById('number');
const button = document.getElementById('convert-btn');
const result = document.getElementById('result');
const romanNumerals = [
    ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
    ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
    ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
];

function testNumber() {
    const num = parseInt(numberInput.value, 10);  // Convert the input to an integer
    if (isNaN(num) || num === "") {
        result.innerText = "Please enter a valid number";
    } else if (num < 1) {
        result.innerText = "Please enter a number greater than or equal to 1";
    } else if (num > 3999) {
        result.innerText = "Please enter a number less than or equal to 3999";
    } else {
        convertToRoman(num);
    }
}

function convertToRoman(num) {
    let roman = "";  // Initialize the roman numeral string
    romanNumerals.forEach(([letter, value]) => {
        while (num >= value) {
            roman += letter;
            num -= value;
        }
    });
    result.innerText = roman;  // Move the result update outside of the loop
}

button.addEventListener('click', testNumber);  // Correct the event listener

