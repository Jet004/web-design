let output = '';
function getInput() {
    let numberA = Number(document.getElementById("num1").value);
    let numberB = Number(document.getElementById("num2").value);
    return [numberA, numberB];
}

function showResults() {
    document.getElementById("output").innerHTML += output + "<br>";
}

function addNumbers() {
    let numbers = getInput();
    output = numbers[0] + numbers[1];
    showResults();
}

function subtractNumbers() {
    let numbers = getInput();
    output = numbers[0] - numbers[1];
    showResults();
}

function multiplyNumbers() {
    let numbers = getInput();
    output = numbers[0] * numbers[1];
    showResults();
}

function divideNumbers() {
    let numbers = getInput();
    output = numbers[0] / numbers[1];
    showResults();
}

function clearOutput(){
    output = '';
    document.getElementById("output").innerHTML = '';
}