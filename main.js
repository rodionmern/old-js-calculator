let firstNumber, secondNumber, solutionOut, symbolSign;

function solveCase() {

	// ~------~ setting variable names ~------~

	firstNumber = document.getElementById("first_number").value;
	secondNumber = document.getElementById("second_number").value;

	symbolSign = prompt("Введите символ с помощью которого будет решаться пример (+: сложение, -: вычитание, *: умножение, /: деление)")

	// ~------~ convert string in int type ~------~

	firstNumber = parseInt(firstNumber);
	secondNumber = parseInt(secondNumber);

	// ~------~ if/else block ~------~

	if (symbolSign == "+") {

		// ~------~ shenanigans with solutionOut ~------~

		solutionOut = parseInt(firstNumber) + parseInt(secondNumber);

		solutionOut = "Ответ: " + solutionOut;

		console.log(firstNumber, secondNumber, solutionOut, symbolSign)

	} else if (symbolSign == "-") {

		// ~------~ shenanigans with solutionOut ~------~

		solutionOut = parseInt(firstNumber) - parseInt(secondNumber);

		solutionOut = "Ответ: " + solutionOut;
		
		console.log(firstNumber, secondNumber, solutionOut, symbolSign)
	} else if (symbolSign == "*") {

		// ~------~ shenanigans with solutionOut ~------~

		solutionOut = parseInt(firstNumber) * parseInt(secondNumber);

		solutionOut = "Ответ: " + solutionOut;

		console.log(firstNumber, secondNumber, solutionOut, symbolSign)
		
	} else if (symbolSign == "/") {

		// ~------~ shenanigans with solutionOut ~------~

		solutionOut = parseInt(firstNumber) / parseInt(secondNumber);

		solutionOut = "Ответ: " + solutionOut;

		console.log(firstNumber, secondNumber, solutionOut, symbolSign)
		
	} 

	solutionOut = document.getElementById("solution").innerHTML = solutionOut;

}