let firstNumber, secondNumber, outSolution, symbolSign, copypaste;

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

		outSolution = parseInt(firstNumber) + parseInt(secondNumber);
		solOut = outSolution;

		outSolution = "Ответ: " + outSolution;

	} else if (symbolSign == "minus") {

		// ~------~ shenanigans with solutionOut ~------~

		outSolution = parseInt(firstNumber) - parseInt(secondNumber);
		solOut = outSolution;

		outSolution = "Ответ: " + outSolution;
	
	} else if (symbolSign == "multiply") {

		// ~------~ shenanigans with solutionOut ~------~

		outSolution = parseInt(firstNumber) * parseInt(secondNumber);
		solOut = outSolution

		outSolution = "Ответ: " + outSolution;
		
	} else if (symbolSign == "divide") {

		// ~------~ shenanigans with solutionOut ~------~

		outSolution = parseInt(firstNumber) / parseInt(secondNumber);
		solOut = outSolution;

		outSolution = "Ответ: " + outSolution;
		
	}

	// ~------~ output answer in html id="solution" ~------~

	console.log(firstNumber, secondNumber, outSolution, symbolSign)

	outSolution = document.getElementById("solution").innerHTML = outSolution;

}

function copyPaste() {
	navigator.clipboard.writeText(solOut);

	console.log("Текст скопирован в буфер обмена");
}
