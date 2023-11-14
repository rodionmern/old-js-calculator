// I'm set variable names

var firstNumber, secondNumber, outSolution, symbolMath;

outSolution = document.getElementById("solution").value;

// Const which help me calculate answer

const solve = () => {

    firstNumber = document.getElementById("first_number").value
    secondNumber = document.getElementById("second_number").value;
    outSolution = document.getElementById("solution").value;

    // Convert my variables to int

    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    // I'm asking a question: "Which sign?"

    symbolMath = prompt("Введите символ(+, -, *, **, /)");

    // I find out what the sign is

    if (symbolMath == "+") {
        solution = firstNumber + secondNumber;
    }
    else if (symbolMath == "-") {
        solution = firstNumber - secondNumber;
    }
    else if (symbolMath == "*") {
        solution = firstNumber * secondNumber;
    }
    else if (symbolMath == "**") {
        solution = firstNumber ** secondNumber;
    }
    else if (symbolMath == "/") {
        solution = firstNumber / secondNumber;
    }

    solution = "Ответ: " + solution;

    // Conclude answer in HTML class

    outSolution = document.getElementById("solution").innerHTML = solution;

}