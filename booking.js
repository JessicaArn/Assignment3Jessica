document.addEventListener('DOMContentLoaded', function () {
    /********* create variables *********/
let dailyRate = 35;
let dayCounter = 0;
const calculatedCostElement = document.getElementById('calculated-cost');
const clearButton = document.getElementById('clear-button');
const halfButton = document.getElementById('half');
const fullButton = document.getElementById('full');

const dayElements = document.querySelectorAll('.day-selector li');

    /********* colour change days of week *********/
    dayElements.forEach(function(dayElement) {
    dayElement.addEventListener('click', function () {
        if (!dayElement.classList.contains('clicked')) {
            dayElement.classList.add('clicked');
            dayCounter++;
        } else {
            dayElement.classList.remove('clicked');
            dayCounter--;
        }
        calculateCost();
    });
});

/********* clear days *********/
clearButton.addEventListener('click', function () {
    dayElements.forEach(function(dayElement) {
        dayElement.classList.remove('clicked');
    });
    dayCounter = 0;
    calculateCost();
});

/********* change rate *********/
halfButton.addEventListener('click', function () {
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    dailyRate = 20;
    calculateCost();
});

fullButton.addEventListener('click', function () {
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    dailyRate = 35;
    calculateCost();
});

/********* calculate *********/
function calculateCost() {
    const totalCost = dailyRate * dayCounter;
    calculatedCostElement.innerHTML = totalCost;
}
});