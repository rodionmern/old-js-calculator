let firstNumber, secondNumber, solutionOut, symbolSign, copypaste;

function solveCase() {

	// ~------~ setting variable names ~------~

	firstNumber = document.getElementById("first_number").value;
	secondNumber = document.getElementById("second_number").value;
	symbolSign = document.getElementById("symbols").value;

	// ~------~ convert string in int type ~------~

	firstNumber = parseInt(firstNumber);
	secondNumber = parseInt(secondNumber);

	// ~------~ if/else block ~------~

	console.log(symbolSign)

	if (symbolSign == "plus") {

		// ~------~ shenanigans with solutionOut ~------~

		solutionOut = parseInt(firstNumber) + parseInt(secondNumber);
		solOut = solutionOut;

		solutionOut = "Ответ: " + solutionOut;

		console.log(firstNumber, secondNumber, solutionOut, symbolSign)

	} else if (symbolSign == "minus") {

		// ~------~ shenanigans with solutionOut ~------~

		solutionOut = parseInt(firstNumber) - parseInt(secondNumber);
		solOut = solutionOut;

		solutionOut = "Ответ: " + solutionOut;
		
		console.log(firstNumber, secondNumber, solutionOut, symbolSign)
	} else if (symbolSign == "multiply") {

		// ~------~ shenanigans with solutionOut ~------~

		solutionOut = parseInt(firstNumber) * parseInt(secondNumber);
		solOut = solutionOut;

		solutionOut = "Ответ: " + solutionOut;

		console.log(firstNumber, secondNumber, solutionOut, symbolSign)
		
	} else if (symbolSign == "divide") {

		// ~------~ shenanigans with solutionOut ~------~

		solutionOut = parseInt(firstNumber) / parseInt(secondNumber);
		solOut = solutionOut;

		solutionOut = "Ответ: " + solutionOut;

		console.log(firstNumber, secondNumber, solutionOut, symbolSign)
		
	}

	// ~------~ output answer in html id="solution" ~------~

	solutionOut = document.getElementById("solution").innerHTML = solutionOut;

}

function copyPaste() {
	navigator.clipboard.writeText(solOut);

	console.log("Текст скопирован в буфер обмена");
}