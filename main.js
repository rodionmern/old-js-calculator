const first = () => {

    first_number = +prompt("Введите число");

    localStorage.setItem('first__num', first_number);

}

const second = () => {

    second_number = +prompt("Введите число");

    localStorage.setItem('second__num', second_number);

}

const solve = () => {

    let symbol__num = prompt("Что будешь делать? (+, -, /, *, **)");

    if (symbol__num == "+") {
        let solution = localStorage.setItem('solve__numbers', first_number + second_number);
    } else if (symbol__num == "-") {
        let solution = localStorage.setItem('solve__numbers', first_number - second_number);
    } else if (symbol__num == "*") {
        let solution = localStorage.setItem('solve__numbers', first_number * second_number);
    } else if (symbol__num == "**") {
        let solution = localStorage.setItem('solve__numbers', first_number ** second_number);
    } else if (symbol__num == "/") {
        let solution = localStorage.setItem('solve__numbers', first_number / second_number);
    } else if (symbol__num == "%") {
        let solution = localStorage.setItem('solve__numbers', first_number ** second_number);
    } else {
        alert("Вводите верное значение")
    }

    // console.log("Сложение - ", first_number, " и ", second_number, " равно ", localStorage.getItem('solve__numbers'));

    alert(localStorage.getItem('solve__numbers'));

}